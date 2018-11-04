const Discord = require("discord.js");
const client = new Discord.Client();
const shell = require("shelljs");

function ready() {
	if (!shell.which('fortune')) {
        shell.echo('Sorry, this script requires fortune');
        shell.exit(1);
    } else {
        console.log("I am ready!");
    }
}

function quote(message) {
    console.log(message.content);
    if (message.content.startsWith("!quote")) {
        let quote = shell.exec("fortune").stdout;
        message.channel.send(quote);
    }
}

client.on("ready", ready);

client.on("message", quote);

client.login(process.env.DISCORD_TOKEN);