const Discord = require("discord.js");
const client = new Discord.Client();
const quoteBot = require('./quotebot.js');

client.on("ready", quoteBot.botReady);

client.on("message", quoteBot.sendQuote);

client.login(process.env.DISCORD_TOKEN);