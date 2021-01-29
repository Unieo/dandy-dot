const Discord = require("discord.js");
const config = require("../config/config.json");

module.exports = {
    name: "ping",
    description: "Sends the bot and api latency",
    cooldown: 2,
    run(client, message, args) {
        let latency = Date.now() - message.createdTimestamp;
        let api = Math.round(client.ws.ping);

        let embed = new Discord.MessageEmbed()
            .setTitle(":ping_pong: Pong!")
            .setColor("RANDOM")
            .addField("Latency", latency)
            .addField("API Latency", api)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
