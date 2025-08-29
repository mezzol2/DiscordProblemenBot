const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('problemen')
        .setDescription('problemen'),
    async execute(interaction){
        await interaction.reply('problemen');
    },
};