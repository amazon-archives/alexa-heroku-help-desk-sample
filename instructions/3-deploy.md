# Alexa Skill Sample - Help Desk
 
[![Salesforce Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-done._TTH_.png)](./1-salesforce-setup.md)[![Deploy](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-done._TTH_.png)](./2-heroku.md)[![Account Linking](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-on._TTH_.png)](./3-deploy.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-4-off._TTH_.png)](./4-account-linking.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-5-off._TTH_.png)](./5-testing.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-6-off._TTH_.png)](./6-distribute-private-skills.md)

## Part 3: Customize and Deploy the Skill 

In this part, we will deploy our skill and link it to the Heroku application we just created.

### Setup

1. First, we will configure our Alexa skill to point to the Heroku application we just deployed. To do that, modify ```skill-sample-heroku-help-desk/alexa-skill-assets/.ask/config```

Enter in your full application name here where it says **\<Your Application Name\>** below:

```javascript
{
  "deploy_settings": {
    "default": {
      "skill_id": "", 
      "was_cloned": false,
      "merge": {
        "skillManifest": {
          "apis": {
            "custom": {
              "endpoint": {
                "sslCertificateType": "Wildcard",
                "uri": "https://<Your Application Name>.herokuapp.com/skill"
              }
            }
          }
        }
      }
    }
  }
}
```


### Deployment

ASK will create the skill front-end for you.

1. You deploy the skill and the lambda function in one step :

```
$ ask deploy
-------------------- Create Skill Project --------------------
Profile for the deployment: [default]
Skill Id: <Your Skill ID>
Skill deployment finished.
Model deployment finished.
[Info]: No lambda functions need to be deployed.
```

2. Make sure to save your skill ID returned in the previous output. We’ll use that often in the future steps.

### Enable Testing

In order to test the skill before publishing, you need to enable testing on the  Alexa Developer Console.

1. You can directly jump to the page by substituting your Skill ID into the following URL: ```https://developer.amazon.com/alexa/console/ask/test/<Skill ID>/development/en_US/```
2. Click the slider next to Disabled for testing. It should now say Enabled.

### Simulate

1. Run the following command to execute a command against your skill:

```
$ ask simulate -l en-US -t "alexa, open help desk"
✓ Simulation created for simulation id: 0c857923-0753-43a5-b44c-ee2fca137aab
◜ Waiting for simulation response{
  "status": "SUCCESSFUL",
  "result": {
...
```

2. Check for the output message to also see what Alexa would have said. In this case, the message just indicates you need to link a Salesforce account since the skill requires authentication against Salesforce to get started. 

```
...
"outputSpeech": {
  "type": "SSML",
  "ssml": "<speak>You need to link a Salesforce account before you can use this skill.\n I've sent a card to your Alexa app to help.</speak>"
},
...
```

### Debugging

1. If for any reason you aren't seeing the expected response, debugging via the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) can help provide visibility that the skill backend is being invoked. 
2. Once you install the CLI, you can use the the following command to see the logs for your specific application:

```bash
$ heroku logs -a <Your Application Name> --tail
```

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/button-next._TTH_.png)](./4-account-linking.md)
