const Discord = require("discord.js");
const config = require("../config/config.json");

module.exports = {
    name: "set-topic",
    description: "Sets a new guild owner.",
    cooldown: 2,
    run(client, message, args) {
        if (message.channel instanceof Discord.DMChannel) return;
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return;
		let topic = args.slice(0).join(" ");
        if (!topic)
            return message.channel.send("**Error:** No topic provided!");
        if (topic.length > 1024)
            return message.channel.send(
                "**Error:** Enter a channel topic less than or equal to 1024 characters in length."
            );
        if (topic) {
            message.channel.setTopic(topic).then(() => {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Channel Topic Changed")
                    .setColor("RANDOM")
                    .setDescription(
                        `This channels topic has been changed to \`${topic}\``
                    )
                    .setTimestamp()
                    .setFooter(`${config.copyright}`);
                message.channel.send({ embed });
            });
        }
    },
};
