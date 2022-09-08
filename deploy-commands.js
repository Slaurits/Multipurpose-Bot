const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('beep').setDescription('Replies with Boop!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);


rest.put(Routes.applicationCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);

// for global commands
//rest.put(Routes.applicationCommands(clientId), { body: [] })
//	.then(() => console.log('Successfully deleted all application commands.'))
//	.catch(console.error);