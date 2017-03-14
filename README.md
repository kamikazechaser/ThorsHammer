[![https://telegram.me/ThorsHammerBot](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-ThorsHammerBot-blue.svg?style=flat-square)](https://telegram.me/ThorsHammerBot)
[![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg?style=flat-square)](https://telegram.me/kamikazechaser)
> 🔨 ThorsHammer

A Simple Moderation Bot For Telegram

> "The Hammer That Was Promised"

## Background

This is a simple group moderation bot that complements existing group moderation bots. It is written in JavaScript and uses mongoDB as the database. Most of the strings are hardcoded in English, but the help information is available in several languages!

### Commands

_You can use either `/, !, or #` as command prefixes_

Command | Description | Status | Superuser | Global Admin | Group Admin | Normal user
--- | --- | --- | --- | --- | --- | --- |
/hammer | `[by reply/username/id]`  Ban a user globally | ✅ | ✅ | ✅ | ❌ | ❌
/unhammer | `[by reply/username/id]`  Unban a user globally | ✅ | ✅ | ✅ | ❌ | ❌
/leave | Bot leaves chat | ✅ | ✅ | ❌ | ❌ | ❌
/promote | `[by reply/username/id]`  Promotes a user to a global admin | ✅ | ✅ | ❌ | ❌ | ❌
/demote | `[by reply/username/id]`  Demotes a user from a global admin | ✅ | ✅ | ❌ | ❌ | ❌
/banlist | Sends a txt file to the log channel, of globally banned users | ✅ | ✅ | ✅ | ❌ | ❌
/admins | Returns a list of group admins | ✅ | ✅ | ✅ | ✅ | ✅
/globaladmins | Returns a list of global admins admins | ✅ | ✅ | ✅ | ✅ | ✅
/kick | Kicks a user from the group (can join back) | ✅ | ❌ | ❌ | ✅ | ❌
/ban | Bans a user from the group | ✅ | ❌ | ❌ | ✅ | ❌
/start or /help | Displays help information in several languages | ✅ | ✅ | ✅ | ✅ | ✅

### Inline Mode

You can get help information in any chat by using the inline mode: 

```bash
# Type In The Message Field
@thorshammerbot help [language-code]
```

### Filters

Action| Description | Status 
--- | --- | --- | 
**Entry Checks** | Automatically bans a globally banned user upon entry into moderated group | ✅ 
**Message Checks** | Automatically bans a globally banned user if a message is detected | ✅ 


## Setup

### Node.JS

You need Node.js version > 4, inorder to download dependencies and run this bot.
For Windows users, simple click [here](https://nodejs.org/dist/v7.4.0/node-v7.4.0-x64.msi) to install it.
For Unix users, use the preffered method [here](https://nodejs.org/en/download/).

### Telegram

<img src="http://i.imgur.com/84FFJo2.png" height="120">

- Create a bot, read on how to do that [here](https://core.telegram.org/bots/faq#how-do-i-create-a-bot)
- Disable bot privacy, send `/setprivacy` to [@BotFather](https://telegram.me/BotFather). Read more about privacy [here](https://core.telegram.org/bots/faq#what-messages-will-my-bot-get)
- Enable inline mode, send `/setinline` to [@BotFather](https://telegram.me/BotFather). Read more about inline [here](https://core.telegram.org/bots/inline)
- Create a log channel, and get its id by simply forwarding a message from the channel to [@getidsbot](https://telegram.me/getidsbot). The id always starts with '-100'. 
- Using the same bot above, get your own id.
- Open `core/config.js` and input the token and id's in their respective fields.

### MongoDB

You need MongoDB to run this bot, You can get a free deployment from [mongolab](https://mlab.com). Follow the instructions below (skip if deploying to Openshift):

<img src="http://i.imgur.com/2h426nA.png" width="200">

- Open the [mongolab](https://mlab.com) website
- Click the yellow Sign up button
- Fill in your user information then hit Create account
- From the dashboard, click on ⚡️Create new button
- Select any cloud provider (I usually go with AWS, region EU)
- Under Plan click on Single-node (development) tab and select Sandbox (it's free)
- Leave MongoDB version as is - 2.4.x
- Enter Database name, can be anything you like
- Then click on ⚡️Create new MongoDB deployment button
- Now, to access your database you need to create a DB user
- Click to the recently created database
- You should see the following message:
  A database user is required to connect to this database. Click here to create a new one.
- Click the link and fill in DB Username and DB Password fields
- Add the mongodb link to core/config.js, it looks something like:
  `mongodb://USERNAME:PASSWORD@ds027479.mongolab.com:27479/DATABASE_NAME`

## You can have the following deployment strategies:

### ZEIT (Free & Easy)

<img src="http://i.imgur.com/uvhZcZ3.png" width="200">

```bash
# Ensure You Have Node.JS Installed! 
$ node -v

# Zeit Webhook
# Clone The Repo
$ git clone https://github.com/kamikazechaser/ThorsHammer.git -b zeit/webhook
# Expermimental Websocket Updates: git clone https://github.com/kamikazechaser/ThorsHammer.git -b zeit/socket
$ cd ThorsHammer

# Install Zeit
$ npm install -g now

# Ensure all fields in core/config.js are present! 
$ now
```


### Running On Your Own Server (Recommended)
<img src="http://i.imgur.com/a4FTMwW.png" width="200">

*Polling Strategy*

```bash
# Ensure You Have Node.JS Installed!
$ node -v

# Polling Strategy: Low Traffic, Low Load
# Clone The Repo
$ git clone https://github.com/kamikazechaser/ThorsHammer.git
$ cd ThorsHammer

# Install Dependencies
$ npm install
$ npm install -g forever

# # Ensure all fields in core/config.js are present! 
$ forever start bot.js
```

*Webhook Strategy (Via Ngrok Tunnel)*

```bash
# Ensure You Have Node.JS Installed!
$ node -v

# Webhook Strategy: Moderate Traffic, Moderate Load
# Clone The Repo
$ git clone https://github.com/kamikazechaser/ThorsHammer.git -b ngrok
$ cd ThorsHammer

# Install Dependencies
$ npm install
$ npm install -g forever

# # Ensure all fields in core/config.js are present! 
$ forever start bot.js
```

### Openshift

<img src="http://www.opencloudconf.com/images/openshift_logo.png" width="200">

```bash
# Ensure You Have Node.JS Installed! 
$ node -v

# Clone The Repo
$ git clone https://github.com/kamikazechaser/ThorsHammer.git -b openshift
$ cd ThorsHammer
# Ensure all fields in core/config.js are present! Except the MONGODB_URL, leave it as is!

# Log into your Openshift web console
# Create a new app
# Select Node.js [Latest]
# Launch the app
# Add a cartridge > Install your own cartridge
# Enter this => https://raw.githubusercontent.com/icflorescu/openshift-cartridge-mongodb/master/metadata/manifest.yml
# Add your ssh keys to Openshift and ensure they are available in $HOME/.ssh locally
# Copy your git address from the side, on the web console

$ git remote add openshift [REMOTE GIT ADDRESS, COPIED FROM ABOVE]
$ git push openshift master --force

```

*Other Strategies*

You can modify `core/telegram.js` to implement your own strategy, such as clustering or websockets.


## Issues And Contribution

Star and Fork the repository and submit a pull request for whatever change you want to be added to this project. If you have any questions, just open an issue.

### Translations

Translations are welcome. Languages given priority are:

- 🇪🇸 Español
- 🇧🇷 Português
- 🇮🇷 Farsi
- 🇸🇦 Arabic - Translated by [@rix4r](https://github.com/claydev) - [full arabic fork](https://github.com/claydev/ThorsHammer)
- 🇮🇹 Italiano

Edit the respective fields in `core/locale.json` and submit a pull request. be careful of Markdown elements and `\n`, they are important!

## License

Released under AGPL-v3.0, see the [LICENSE](https://github.com/kamikazechaser/ThorsHammer/blob/master/LICENSE) file.
