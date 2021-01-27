const Discord = require("discord.js");
const config = require("../config/config.json");

module.exports = {
    name: "kick",
    description: "Kicks a mentioned user in a Guild.",
    cooldown: 2,
    run(client, message, args) {
        if (message.channel instanceof Discord.DMChannel) return;
        const user = message.mentions.users.first();
        if (user == config.botid)
            return message.channel.send("**Error:** You cannot kick me!");
        if (user == message.author.id)
            return message.channel.send("**Error:** You cannot kick yourself!");
        if (user) {
            const member = message.guild.members.cache.get(user.id);
            member
                .kick()
                .then(() => {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Member Kicked from Server")
                        .setColor(Math.floor(Math.random() * 16777215))
                        .setDescription(
                            `**<@${user.id}> was kicked by <@${message.author.id}>.**`
                        )
                        .setTimestamp()
                        .setFooter(`${config.copyright}`);
                    message.channel.send({ embed });
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            message.channel.send("**Error:** Member not found!");
        }
    },
};
