const Discord = require("discord.js");
const config = require("../config/config.json");

module.exports = {
	name: "set-region",
	description: "Set your servers new region with this command",
	cooldown: 2,
	run(client, message, args) {
		if (message.channel instanceof Discord.DMChannel) return;
		if (!message.member.permissions.has("MANAGE_GUILD")) return;
		let region = args.join(" ").toLowerCase();

		if (region === "") {
			message.channel.send(
				"**Error:** Please specify one of the following: brazil, europe, hong-kong, india, japan, russia, singapore, south-africa, sydney, us-central, us-east, us-south, us-west"
			);
		} else if (region === "brazil") {
			message.guild
				.setRegion("brazil")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "europe") {
			message.guild
				.setRegion("europe")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "hong-kong") {
			message.guild
				.setRegion("hong-kong")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "india") {
			message.guild
				.setRegion("india")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "japan") {
			message.guild
				.setRegion("japan")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "russia") {
			message.guild
				.setRegion("russia")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "singapore") {
			message.guild
				.setRegion("singapore")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "south-africa") {
			message.guild
				.setRegion("south-africa")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "sydney") {
			message.guild
				.setRegion("sydney")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "us-central") {
			message.guild
				.setRegion("us-central")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "us-east") {
			message.guild
				.setRegion("us-east")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "us-south") {
			message.guild
				.setRegion("us-south")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		} else if (region === "us-west") {
			message.guild
				.setRegion("us-west")
				.then(() => {
					const embed = new Discord.MessageEmbed()
						.setTitle("Guild Region Changed")
						.setColor("RANDOM")
						.setDescription(
							`This guilds region has been changed to \`${region}\``
						)
						.setTimestamp()
						.setFooter(`${config.copyright}`);
					message.channel.send({ embed });
				})
				.catch(console.error);
		}
	},
};
