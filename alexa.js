 /*
  * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
  *
  * Licensed under the MIT License. See the LICENSE accompanying this file
  * for the specific language governing permissions and limitations under
  * the License.
  */
const AWS = require("aws-sdk");
const alexa = require("alexa-app");
const express = require("express");
const sf = require("./salesforce");

const app = express();
const debug = process.env.DEBUG_ENABLED || true;
const PORT = process.env.PORT || 8080;
const schemaName = process.env.SCHEMA_NAME || "salesforce";

// Defines Alexa endpoint of /skill and set up express
const alexaApp = new alexa.app("skill");

alexaApp.express({
  expressApp: app,
  checkCert: false,
  debug: true
});

// from here on you can setup any other express routes or middlewares as normal
app.set("view engine", "ejs");

alexaApp.launch(function(request, response) {
  let output = `Welcome to Your Help Desk, powered by Salesforce. Try telling me what's broken or ask about your open tickets.`;
  response.say(output).reprompt(output).shouldEndSession(false);
});

alexaApp.intent("CreateTicket", {}, function(request, response) {
    console.log(`INFO - CreateTicket start`);

    let userId = request.getSession().get("userId");
    const origin = "Alexa";
    let status = "New";
    let priority = "Medium";
    let equipment = getSlotValue(request.slots["equipment"]);

    if (!equipment) {
      debugLog(`No equipment slot detected - let Alexa handle it.`);
      let dialogDirective = {
        "type": "Dialog.Delegate"
      };
      response.shouldEndSession(false).directive(dialogDirective).send();
    } else {
      const subject = `User is reporting ${equipment} requires attention`;

      let query = `INSERT INTO ${schemaName}.Case (subject, createdbyid, origin, status, priority) VALUES 
                  ('${subject}', '${userId}', '${origin}', '${status}', '${priority}')`;

      return sf.queryData(query).then(function(results) {
        debugLog(`DEBUG - Inside CreateTicket insert query callback`);
        debugLog(`DEBUG - ${JSON.stringify(results)}`);
        let output = `I've created the ticket for the ${equipment}. What else can I help with? `;
        output += `Try asking me for a list of your tickets.`;
        response.say(output).reprompt(output).shouldEndSession(false).send();
      });
    }
  }
);

alexaApp.intent("GetTicket", {},
  function(request, response) {

    // Limiting 5 in this query as that caps out the basic template we're using in the Echo Show.
    // This is just to illustrate what is possible.
    let query = `SELECT casenumber, status, subject, createddate FROM ${schemaName}.CASE WHERE 
                createdbyid = '${request.getSession().get("userId")}' AND origin = 'Alexa' AND isclosed = false 
                ORDER by createddate DESC LIMIT 5`
    return sf.queryData(query).then(function(results) {
      let numResults = results.length;
      if (numResults > 0 ) {
        let output = `I found ${results.length} tickets created by you using Alexa. I've sent the ticket details in a card to you.`;
        let title = `Tickets`;
        let body = "";
        for (let i = 0; i < results.length; i++) {
          body += `Ticket #${results[i].casenumber}: ${results[i].subject}. Status: ${results[i].status}\n\n`;
        }
        response.card(buildStandardCard(title, body));
        if (isRenderTemplateSupported(request)) {
          response.directive(buildBodyTemplate2Directive(title, body));
        }
        response.say(output).send();
      } else {
        // No results, ask user to make a ticket.
        let output = `I didn't find any tickets created by you using Alexa. Try telling me to create a ticket to get started.`;
        response.say(output).reprompt(output).shouldEndSession(false).send();
      }
    });
  }
);

// Helper function to only log DEBUG statements if the debug flag is set to true
function debugLog(statement) {
  if (debug) {
    console.log(statement);
  }
}

// Helper function to determine if the requesting device supports Display templates. 
// If not, the skill should not send a RenderTemplate directive.
function isRenderTemplateSupported(request) {
  return request.context.System.device.supportedInterfaces.Display;;
}

// Returns a Standard card object with the given title & text
var buildStandardCard = function(title, text) {
  let card =
  {
    "type": "Standard",
    "title": title,
    "text": text,
    "image": {
      "largeImageUrl": "https://s3.amazonaws.com/alexa-salesforce-demo-skill-images/help_image.png"
    }
  };
  return card;
}

// Echo Show - BodyTemplate 2 directive response 
var buildBodyTemplate2Directive = function(title, text) {
  let directive = 
  {
    "type": "Display.RenderTemplate",
    "template": {
      "type": "BodyTemplate2",
      "token": "ticket",
      "backButton": "HIDDEN",
      "image": {
        "sources": [
          {
            "url": "https://s3.amazonaws.com/alexa-salesforce-demo-skill-images/help_image.png"
          }
        ]
      },
      "title": title,
      "textContent": {
        "primaryText": {
          "text": text.replace(/\n/g,'<br/>'), //replace newlines with <br/> HTML markup for echo show templates
          "type": "RichText"
        }
      }
    }
  };
  return directive;
}

// Obtains a slot value from entity resolution (if it matched a synonym) or just from the primary slot value
var getSlotValue = function(slot) {
  let slotValue;
  debugLog(`DEBUG - slot: ${JSON.stringify(slot)}`);
  if (slot && slot.resolutions && slot.resolutions.length > 0 && 
      slot.resolutions[0].values && slot.resolutions[0].values.length > 0) {
    // For the purpose of this skill, we'll assume that resolutions mean we have one 
    // canonical entry from one ER. It is possible, and likely, that real scnearios 
    // have multiple canonical choices, but we're being simple for a demo.
    slotValue = slot.resolutions[0].values[0].name;
    debugLog(`DEBUG - getSlotValue resolutions flow - slotValue: ${slotValue}`);

  }
  if (!slotValue && slot && slot.value) {
    // If we don't have any entity resolutions or if it didn't resolve to anything, just take the slot value (if it exists)
    slotValue = slot.value;
    debugLog(`DEBUG - getSlotValue non-resolutions flow - slotValue: ${slotValue}`);
  }
  return slotValue;
}

// Returns a date formatted like: 2018/03/08
var getFormattedDate = function(dateObj) {
  return `${dateObj.getFullYear()}-${("0" + (dateObj.getMonth()+1)).slice(-2)}-${("0" + dateObj.getDate()).slice(-2)}`;
}

/* 
 * General Intent support - start
 */

alexaApp.intent("AMAZON.HelpIntent", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    let helpOutput = "The Help Desk skill can help you easily create a ticket or get the status of your open tickets." +
                    "Try asking me to create a ticket to get started.";
    let reprompt = "Would you like to create a ticket or get ticket status?";
    request.getSession().clear();
    response.say(helpOutput).reprompt(reprompt).shouldEndSession(false);
  }
);

alexaApp.intent("AMAZON.StopIntent", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    let stopOutput = "OK, bye";
    response.say(stopOutput);
  }
);

alexaApp.intent("AMAZON.CancelIntent", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    let cancelOutput = "OK, bye.";
    response.say(cancelOutput);
  }
);

/* 
 * General Intent support - end
 */

/* 
 * General functions - start
 */

// debugging -- displays the intent being invoked
alexaApp.pre = function(request, response, type) {
  if (debug) {
    console.log(`=====================REQUEST START=====================`);
    console.log(`Intent received - ${type}`);
    console.log(JSON.stringify(request.data));
    console.log(`=====================REQUEST END  =====================`);
  }

  // Pre-populate the user's Salesforce userId so we can refer to it elsewhere
  let session = request.getSession();
  if (!session.get("userId")) {
    let accessToken = request.getSession().details.user.accessToken;
    return sf.getIdentity(accessToken).then(function(userId) {
      session.set("userId", userId);
    }).catch(function(err) {
      console.log(`ERROR - ${err}`);
      let output = `You need to link a Salesforce account before you can use this skill.
                    I've sent a card to your Alexa app to help.`;
      response.linkAccount().say(output).send();
    });
  }
};

// the last thing executed for every request. turn any exception inta a respose
alexaApp.post = function(request, response, type, exception) {

  if (debug) {
    console.log(`=====================RESPONSE START=====================`);
    console.log(JSON.stringify(response));
    console.log(`=====================RESPONSE END  =====================`);
  }

  if (exception) {
    // always turn an exception into a successful response
    return response.clear().say(`Drat! An error occured: ${exception}`).send();
  }
};

alexaApp.error = function(exception, request, response) {
  console.log(`ERROR - ${exception}`);
  response.say(`Sorry, something unexpected happened. Please try Help Desk later.`);
};

app.get('/', function (req, res) {
  res.render('index');
})

app.listen(PORT);

/* 
 * General functions - end
 */
