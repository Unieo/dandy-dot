//const Discord = require("discord.js");
//const config = require("../config.json");

module.exports = {
    name: "setname",
    cooldown: 5,
    execute(message, args) {
        if (!args[0]) {
            message.reply("Please ask a full question");
        } else {
            message.guild.setName(args[0]);
        }
    },
};
