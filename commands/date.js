const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('date')
		.setDescription('Displays the date'),
	async execute(interaction) {
		const currentDate = new Date();
		return interaction.reply(`**${currentDate.toLocaleString('en-DK', {
			hour12: false,
		})}**`);
	},
};