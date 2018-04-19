/* Ark's Discord Bot
*  Creator: @Arkanon 
*  Date Created: April 12, 2018
*  Last Updated: April 17, 2018
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const info = require("./package.json");

client.login(config.token);

client.on("ready", () => {
    console.log("${config.name} reporting for duty!");
    console.user.setActivity('Doing bot things');
});

//This will prompt advice when a user types '!advice'.
client.on("message", async message => {
    //Checks if message is sent by bot vs. user.
    if(message.author.bot) 
        return;
    
    //Checks if prefix is at index 0 and is same in config.
    if(message.content.indexOf(auth.prefix) !== 0) 
        return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if(command === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip).
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    //Bot will join the user's channel.
    else if(command === join){
        if(message.member.joinChannel){
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply("Connection Successful!");
            })
            .catch(console.log);
        }
        //Will occur when user is not in a voice channel.
        else{
            message.reply("You must join a channel first!")
        }
    }
    else if(command === "suggestion"){
        message.channel.send("Message @Arkanon#6160 on Discord for any suggestions regarding this bot!");
    }
    //If command doesn't exist or if command is incorrectly typed, then this will happen.
    else {
        const m = await message.channel.send("Command not found!");        
    }
});