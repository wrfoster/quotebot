const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  console.log(message.content);
  if (message.content.includes("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login(process.env.DISCORD_TOKEN);