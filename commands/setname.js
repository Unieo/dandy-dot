const { MessageEmbed } = require("discord.js");
const config = require("./config/config.json");

module.exports = {
    name: "setname",
    description: "Sets the guild name.",
    guildOnly: true,
    cooldown: 5,
    run(client, message, args) {
        if (!args[0])
            return message.reply("Please enter a name for the Server!");

        let name = args.slice(0).join(" ");

        if (name.length >= 2 && name.length <= 100) {
            message.guild.setName(name).catch((e) => {
                if (e) {
                    message.author.send(
                        `Error. You seems to be in your DMs, this command only works in Servers!`
                    );
                }
            });
            let embed = new MessageEmbed()
                .setTitle("Server Name Changed")
                .setColor(Math.floor(Math.random() * 16777215))
                .setDescription(
                    `**The server name has been changed to \`${name}\` by <@${message.author.id}>.**`
                )
                .setTimestamp()
                .setFooter(`${config.copyright}`);
            message.channel.send({ embed });
        } else if (name.length <= 2) {
            message.reply(
                "Please enter a Server Name more than or equal to 2 characters in length."
            );
        } else if (name.length >= 100) {
            message.reply(
                "Please enter a Server Name less than or equal to 100 characters in length."
            );
        }
    },
};
