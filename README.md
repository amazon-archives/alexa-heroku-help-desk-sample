# Alexa Skill Sample - Help Desk

<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

[![Salesforce Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-1-off._TTH_.png)](./instructions/1-salesforce-setup.md)[![Heroku Setup](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-2-off._TTH_.png)](./instructions/2-heroku.md)[![Deploy](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-3-off._TTH_.png)](./instructions/3-deploy.md)[![Account Linking](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-4-off._TTH_.png)](./instructions/4-account-linking.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-5-off._TTH_.png)](./instructions/5-testing.md)[![Distribute Private Skills](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/tutorial-page-marker-6-off._TTH_.png)](./instructions/6-distribute-private-skills.md)

## Introduction

This skill demonstrates how to build a private Alexa skill to access  Salesforce data powered by Herkou and Heroku Connect. 

This sample skill is a Help Desk that allows users to create tickets (Cases) and retrieve information on tickets that they've created.

## Pre-requisites

This repository contains the NodeJS Heroku application code as well as Alexa skill definition files.

### Amazon Developer Account

You need an [Amazon developer account](https://developer.amazon.com) to create an Alexa Skill.

### Alexa Skills Kit - Command Line Interface

The [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) is used to create the skill voice user interface and models.

Once you have installed the CLI, you need to initialize ASK CLI with your Amazon developer account credentials with the following command:

```bash
$ ask init
```

**Note:** You may have AWS credentials connected to the ASK CLI to automatically deploy and manage skills powered by AWS Lambda; for this set up, you **do not** need to have AWS credentials tied to your ASK CLI installation. For more information on how to set up your AWS credentials, see [Set Up Credentials for an Amazon Web Services (AWS) Account](https://developer.amazon.com/docs/smapi/set-up-credentials-for-an-amazon-web-services-account.html).

### Salesforce

You will need a [Salesforce Trailhead Playground](https://trailhead.salesforce.com/en/modules/trailhead_playground_management/units/create-a-trailhead-playground) to provide the Salesforce data for this skill.

### Heroku

You will need a [Heroku](https://www.heroku.com) account to deploy the provided code sample. You can sign up for one by deploying the code below (see more setup details on Step 2).

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://www.heroku.com/deploy?template=https://github.com/alexa/alexa-heroku-help-desk-sample)

## Objectives

Together, we'll build a skill that is invoked with the name Help Desk.

```text
Alexa, open Help Desk
```

Let's get started!

1. **Salesforce Setup** - Set up a Salesforce org using Trailhead Playground.
2. **Heroku Setup** - Configure your Heroku settings for Heroku Connect.
3. **Create the Alexa Skill** - Deploy the provided skill. 
4. **Account Linking** - Create a Connected App in Salesforce to use for Account Linking to the Alexa skill.
5. **Testing** - Make sure everything works.
6. **Distribute Private Skills** - Learn about Alexa for Business and how to distribute private skills. 

[![Get Started](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_get_started._TTH_.png)](./instructions/1-salesforce-setup.md)

