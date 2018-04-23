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

The ASK CLI will create the skill front-end for you.

1. Use a command line tool to navigate to the ```skill-sample-heroku-help-desk/alexa-skill-assets/``` folder path.
2. You deploy the skill and the lambda function in one step :

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

In order to test the skill before publishing, you need to enable testing on the  Alexa Developer Console. Note: we will need to set up account linking before we can test the skill.

1. You can directly jump to the page by substituting your Skill ID into the following URL: ```https://developer.amazon.com/alexa/console/ask/test/<Skill ID>/development/en_US/```
2. Click the slider next to Disabled for testing. It should now say Enabled.


[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/button-next._TTH_.png)](./4-account-linking.md)
