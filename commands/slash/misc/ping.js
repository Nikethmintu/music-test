const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed: Embed } = require("discord.js");
const client = new Discord.Client();
module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("bot latency"),
	async execute(interaction) {
		const commands = interaction.client.slashCommands;
		const client = interaction.client;

        const ping = new Discord.MessageEmbed()
        .setTitle(':ping_pong: Pong!')
		.addField("Bot ping:", + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms")
		.addField("Api ping:", + `${Math.round(client.ws.ping)}` + "ms")
        .setColor('RANDOM')
		.setTimestamp()
        msg.edit(ping);
        
    })
}
}
