const Discord = require("discord.js");
const config = require("../config/config.json");

module.exports = {
	name: "ban",
	description: "Bans a mentioned user in a Guild.",
	cooldown: 2,
	run(client, message, args) {
		if (message.channel instanceof Discord.DMChannel) return;
		const user = message.mentions.users.first();
		if (user == config.botid)
			return message.channel.send("**Error:** You cannot ban me!");
		if (user == message.author.id)
			return message.channel.send("**Error:** You cannot ban yourself!");
		if (user) {
			const member = message.guild.members.cache.get(user.id);
			member
				.ban()
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Member Banned from Server")
						.setColor("RANDOM")
						.setDescription(
							`**<@${user.id}> was banned by <@${message.author.id}>.**`
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			message.channel.send(`**Error:** Member not found! Try using: \`${config.prefix}ban @usermention\``);
		}
	},
};
