# Alexa Skill Sample - Help Desk

[![Salesforce Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-done._TTH_.png)](./1-salesforce-setup.md)[![Deploy](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-done._TTH_.png)](./2-heroku.md)[![Account Linking](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-done._TTH_.png)](./3-deploy.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-4-done._TTH_.png)](./4-account-linking.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-5-on._TTH_.png)](./5-testing.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-6-off._TTH_.png)](./6-distribute-private-skills.md)

## Part 5: Testing

Now that you completed most of the setup, let's make sure everything is working. You start by validating the account linking flow, then interact with the skill to create a voice code and access Salesforce data.

### Test the Linking Flow

1. Go to your Alexa app on your device (or go to https://alexa.amazon.com).
2. Click **Skills**. 
3. Click **Your Skills**.
4. Find the **Help Desk** skill and click it.
5. Click **Settings**.
6. Click **Link Account**.

Your browser or device will then open a window to the Salesforce login screen. 
Enter your Salesforce user credentials, and you should see a page letting you know your skill was successfully linked.

### Use the Skill

1. Try out the following request: **“Alexa, open Help Desk.”**
2. Alexa will welcome you and prompt you with some functions you can use.
3. Try: **"Create a ticket"**.
4. Alexa will then prompt you about what is broken.
5. Try saying: **"The projector"**
6. Once Alexa has created a ticket, you can say: **"List my tickets"** and Alexa will return a list of tickets you've created as a card to your Alexa app or to your display enabled device.

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/button-next._TTH_.png)](./6-distribute-private-skills.md)
