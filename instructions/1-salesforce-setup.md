# Alexa Skill Sample - Help Desk

[![Salesforce Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-on._TTH_.png)](./1-salesforce-setup.md)[![Deploy](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-off._TTH_.png)](./2-heroku.md)[![Account Linking](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-off._TTH_.png)](./3-deploy.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-4-off._TTH_.png)](./4-account-linking.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-5-off._TTH_.png)](./5-testing.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-6-off._TTH_.png)](./6-distribute-private-skills.md)

## Part 1: Create a Salesforce Trailhead Playground

In order to build our skill, you need a Salesforce org to interact with. A Salesforce Trailhead Playground is free and allows you to create everything you will need to complete this skill.

1. Go to the [Trailhead Playground Management Module](https://trailhead.salesforce.com/modules/trailhead_playground_management) to create a Trailhead Playground (TP) org.
2. Complete units 1 & 2 in order to set up your TP and obtain your username and login credentials. 

## Prepare Objects for Heroku Connect

Heroku Connect needs a unique identifier to be created on the key objects we will interact with for this skill. 

### Create an External ID field for the Case object

1. In Setup, click the **Object Manager** tab.
2. Click the **Case** object.
3. Click **Fields & Relationships**.
4. Click **New**.
5. For Data Type, select **Text**, and click **Next**.
6. Complete the custom field as follows:
 * Field Label: **External Case ID**
 * Length: **10**
 * Field Name: **External_Case_ID**
 * Unique: Select **Do not allow duplicate values**
 * External ID: Select **Set this field as the unique record identifier from an external system**
7. Click **Next**.
8. Check the **Visible** box to make the field visible to all profiles, and click **Next**, and then **Save**.

For more information on what Heroku Connect is doing, see the [Heroku Developer documentation](https://devcenter.heroku.com/articles/writing-data-to-salesforce-with-heroku-connect).

### Create an Alexa Case Origin Option

1. You should be on the **Fields & Relationships** page from the last step.
2. Click **Case Origin**.
3. In Case Origin Picklist Values, click **New**.
4. Add **Alexa** as an option in the textbox.
5. Click **Save**.

[![Next](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/button-next._TTH_.png)](./2-heroku.md)
