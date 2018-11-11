const shell = require("shelljs");
const fs = require("fs");

var text = fs.readFileSync("quotes.txt").toString('utf-8');
var quotes = text.split("\t")

function botReady() {
    console.log("I am ready!");
}

function sendQuote(message) {
    console.log(message.content);
    if (message.content.startsWith("!quote")) {
        let quote = getQuote();
        message.channel.send(quote);
    }
}

function getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getFortune() {
    return shell.exec("fortune").stdout;
}

function checkFortune() {
    if (!shell.which('fortune')) {
        shell.echo('Sorry, this script requires fortune');
        shell.exit(1);
    }
}

module.exports = {
    botReady: botReady,
    sendQuote: sendQuote
}