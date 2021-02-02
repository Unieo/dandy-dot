const Discord = require("discord.js");
const config = require("../config/config.json");

module.exports = {
	name: "set",
	description: "Set",
	cooldown: 2,
	run(client, message, args) {
		if (message.channel instanceof Discord.DMChannel) return;
		if (!message.member.permissions.has("MANAGE_GUILD")) return;
		let setCmd = args.join(" ").toLowerCase();

		if (setCmd === "") {
			return;
		} else if (setCmd === "name") {
			let name = args.slice(0).join(" ");

			if (!name)
				return message.channel.send("**Error:** No name provided!");

			if (name.length >= 2 && name.length <= 100) {
				message.guild.setName(name).catch((err) => {
					if (err) {
						console.log(err);
					}
				});
				const embed = new Discord.MessageEmbed()
					.setTitle("Server Name Changed")
					.setColor("RANDOM")
					.setDescription(
						`**The server name has been changed to \`${name}\` by <@${message.author.id}>.**`
					)
					.setTimestamp()
					.setFooter(`${config.copyright}`);
				message.channel.send({ embed });
			} else if (name.length <= 2) {
				message.channel.send(
					"**Error:** Enter a server name more than or equal to 2 characters in length."
				);
			} else if (name.length >= 100) {
				message.channel.send(
					"**Error:** Enter a server name less than or equal to 100 characters in length."
				);
			}
		} else if (setCmd === "topic") {
			let topic1 = args.slice(0).join(" ");
			let topic2 = topic1.substring(6);

			if (!topic2)
				return message.channel.send("**Error:** No topic provided!");
			if (topic2.length > 1024)
				return message.channel.send(
					"**Error:** Enter a channel topic less than or equal to 1024 characters in length."
				);
			if (topic2) {
				message.channel.setTopic(topic2).then(() => {
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
		}
	}
}