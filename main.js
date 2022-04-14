// require("dotenv").config();

// discord js 
const { Client, Intents } = require("discord.js");
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] },
    { partials: ["MESSAGE" ,"CHANNEL", "REACTION"] }
);

// colors
const colors = require("colors")


// mongoose
const mongoose = require("mongoose");



//require

const { autorole } = require("./events/autorole");
const { commands } = require("./commands/prefix");
const { banbot } = require("./events/banbot");


// starter
client.on('ready', () => {console.log(`${client.user.username} is online` .green)});

commands(client);
autorole(client);
banbot(client);

client.login(process.env.BOT_TOKEN);


