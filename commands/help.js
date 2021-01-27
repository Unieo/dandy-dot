const Discord = require("discord.js");
/* const pagination = require("discord.js-pagination");
 * const config = require("../data/config.json");
 * const help = require("../data/help.json");
 */

module.exports = {
    name: "help",
    description: "Displays a list of usable commands",
    cooldown: 2,
    run(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription("&ban\n&kick\n&name\n&ping");
        message.channel.send({ embed });
    },
};
