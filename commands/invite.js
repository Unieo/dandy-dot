const Discord = require("discord.js");
const config = require("./config/config.json");

module.exports = {
    name: "invite",
    aliases: ["inv"],
    cooldown: 2,
    run(message) {
        let invite =
            "[Invite Manually](https://discord.com/oauth2/authorize?client_id=786882695186874368&scope=bot&permissions=2147483647)";
        const embed = new Discord.MessageEmbed()
            .setTitle("Invite The Bot!")
            .setColor("RANDOM")
            .setDescription(invite)
            .setTimestamp()
            .setFooter(`${config.copyright}`);
        message.channel.send({ embed });
    },
};
