const { MessageEmbed } = require("discord.js");
const config = require("../config/config.json");

module.exports = {
    name: "ping",
    run(client, message) {
        let latency = Date.now() - message.createdTimestamp;
        let api = Math.round(client.ws.ping);

        let embed = new MessageEmbed()
            .setTitle(":ping_pong: Pong!")
            .setColor(Math.floor(Math.random() * 16777215))
            .addField("Latency", latency)
            .addField("API Latency", api)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
