# Alexa Skill Sample - Help Desk

[![Salesforce Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-done._TTH_.png)](./1-salesforce-setup.md)[![Deploy](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-on._TTH_.png)](./2-heroku.md)[![Account Linking](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-off._TTH_.png)](./3-deploy.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-4-off._TTH_.png)](./4-account-linking.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-5-off._TTH_.png)](./5-testing.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-6-off._TTH_.png)](./6-distribute-private-skills.md)

## Part 2: Heroku 

In this part, we will deploy our Heroku app and set up Heroku Connect to talk to your Salesforce instance.

### Deploy Heroku App

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://www.heroku.com/deploy?template=https://github.com/alexa/alexa-heroku-help-desk-sample)

Make sure to save your full application path, as you'll need in Part 3.

### Heroku Connect Setup

1. Go to your [Heroku Dashboard](https://dashboard.heroku.com/) and select the application you just deployed. Alternatively, from the Heroku deployment page, click **Manage App**.
2. Under Installed add-ons, click on **Heroku Connect**.
3. Click **Setup Connection**. This will detect the Heroku Postgres add-on details and configure Heroku Connect with them.
4. Click on the highlighted row that has **DATABASE_URL** to select this as your desired Postgres database.
5. Click **Next** on the Provision Connection screen.
6. Click **Authorize**.
7. Log in to your Salesforce account you just created in Step 1.
8. Click **Allow**.
9. You should now be on the Heroku Connect Overview page showing your connection details. The next step will be to add mappings to your Salesforce objects.

### Configure Heroku Connect Mapping

1. Click on the **Settings** menu and click on **Import/Export Configuration**.
2. Click **Import**.
3. Click **Browse...**.
4. Browse to this file in the repo you cloned: ```skill-sample-heroku-sales-assistant/connect_config/help_desk_connect_config.json```
5. Click **Upload**.
6. Your Heroku Connect setup should import the Case mapping and synchronize data from your Salesforce to your local Heroku Postgres instance.

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/button-next._TTH_.png)](./3-deploy.md)
