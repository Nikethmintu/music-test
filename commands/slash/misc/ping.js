const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
	Permissions,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("pinb")
		.setDescription("get ping of bot"),

	async execute(interaction) {
		const commands = interaction.client.slashCommands;
		const client = interaction.client;

		const ping = new MessageEmbed()
			.setColor(`RED`)
			.setAuthor(
				`${interaction.user.username}`,
				`${interaction.user.avatarURL({ dynamic: true })}`,
				`https://discord.com/users/${interaction.user.id}`
			)
			.setDescription("Bot ping:", + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms")
			.setTitle(`**${client.user.username}**`)
			.setThumbnail(client.user.avatarURL({ dynamic: true }))
			.setFooter(
				`${client.user.username.toUpperCase()} ${new Date().getFullYear()}`,
				client.user.avatarURL({ dynamic: true })
			)
			.setTimestamp();

		);
		const invite = client.generateInvite({
			permissions: [Permissions.FLAGS.ADMINISTRATOR],
			scopes: ["bot", "applications.commands"],
		});
		const kool = new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel("Invite")
				.setStyle("LINK")
				.setURL(invite)
				.setEmoji("🔗"),
			new MessageButton()
				.setLabel("support")
				.setStyle("LINK")
				.setURL("https://discord.gg/fjqR3YxyZf")
				.setEmoji("744345792172654643"),

		);

		await interaction.editReply({
			embeds: [ping],
			components: [kool],
		});
	},
}
}
