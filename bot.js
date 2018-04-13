const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const info = require("package.json");

client.on("ready", () => {
    console.log("${config.name} reporting for duty!");
    console.user.setActivity('Doing bot things');
});

//This will prompt advice when a user types '!advice'.
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    const args = message.content.slice
});



client.login(config.token);