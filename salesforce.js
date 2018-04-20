 /*
  * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
  *
  * Licensed under the MIT License. See the LICENSE accompanying this file
  * for the specific language governing permissions and limitations under
  * the License.
  */
'use strict';

var nforce = require('nforce');
var pg = require('pg');

/*
 These are set to NA as they are not used, due to the fact that we are using 
 Alexa's account linking process to obtain an acess token, not the default
 nforce createConnection and authenticate methods.
 */
var org = nforce.createConnection({
  clientId: "NA",
  clientSecret: "NA",
  redirectUri: "NA"
});

var getIdentity = function(accessToken) {
  return new Promise(function(resolve, reject) {
    org.getIdentity({oauth: getOauthObject(accessToken)}, function(err, resp) {
      if (err) {
        console.log(`Error in getIdentity: ${err}`);
        reject(err);
      } else {
        var splitString = resp.identity.split('/');
        var userId = splitString[splitString.length-1]
        resolve(userId);
      }
    });
  });
}

var queryData = function(query) {
  return new Promise(function(resolve, reject) {
    pg.connect(process.env.DATABASE_URL, function (err, conn, done) {
      // watch for any connect issues
      if (err) console.log(err);
      conn.query(query, function(err, result) {
        done();
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      });
    });
  });
}

function getOauthObject(accessToken) {
  // Construct our OAuth token based on the access token we were provided from Alexa
  var oauth = {};
  oauth.access_token = accessToken;
  oauth.instance_url = process.env.SFDC_INSTANCE_URL;
  return oauth;
}

module.exports = {getIdentity, queryData};

