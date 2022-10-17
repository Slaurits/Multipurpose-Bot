const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.addUserOption(option => option.setName('target').setRequired(true).setDescription('The member we are kicking'))
		.setDescription('kicks the user'),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		console.log(member);
		return member.kick('target'), interaction.reply('Succesfully kicked the user');
	},
};