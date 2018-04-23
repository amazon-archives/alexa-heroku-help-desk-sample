# Alexa Skill Sample - Help Desk

[![Salesforce Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-done._TTH_.png)](./1-salesforce-setup.md)[![Deploy](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-done._TTH_.png)](./2-heroku.md)[![Account Linking](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-done._TTH_.png)](./3-deploy.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-4-done._TTH_.png)](./4-account-linking.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-5-on._TTH_.png)](./5-testing.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-6-off._TTH_.png)](./6-distribute-private-skills.md)

## Part 5: Testing

Now that you completed most of the setup, let's make sure everything is working. We'll show you first how to test using the command line, then validate the account linking flow, finally interact with the skill to access Salesforce data.

### Simulate

1. Run the following command to execute a command against your skill:

```
$ ask simulate -l en-US -t "open help desk"
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

### Test the Linking Flow

1. Go to your Alexa app on your device (or go to https://alexa.amazon.com).
2. Click **Skills**. 
3. Click **Your Skills**.
4. Click the **Dev Skills** header.
5. Find the **Help Desk** skill and click it.
6. Click **Settings**.
7. Click **Link Account**.

Your browser or device will then open a window to the Salesforce login screen. 
Enter your Salesforce user credentials, and you should see a page letting you know your skill was successfully linked.

### Use the Skill

Now it's time to use the skill out on an Alexa-enabled device.

1. Try out the following request: **“Alexa, open Help Desk.”**
2. Alexa will welcome you and prompt you with some functions you can use.
3. Try: **"Create a ticket"**.
4. Alexa will then prompt you about what is broken.
5. Try saying: **"The projector"**
6. Once Alexa has created a ticket, you can say: **"List my tickets"** and Alexa will return a list of tickets you've created as a card to your Alexa app or to your display enabled device.

### Debugging

1. If for any reason you aren't seeing the expected response, debugging via the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) can help provide visibility that the skill backend is being invoked. 
2. Once you install the CLI, you can use the the following command to see the logs for your specific application:

```bash
$ heroku logs -a <Your Application Name> --tail
```

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/button-next._TTH_.png)](./6-distribute-private-skills.md)
