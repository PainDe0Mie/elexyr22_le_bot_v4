const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {
    
    const db = bot.db
    
    if(interaction.isButton()) {
    if(interaction.customId === "unban") {

            db.query(`SELECT * FROM ban WHERE guildID = ${interaction.guild.id}`, async (err, req) => {
            if(!interaction.member.permissions.has(new Discord.Permissions(Discord.Permissions.FLAGS.BAN_MEMBERS))) return interaction.reply({content: "Vous n'avez pas la permission requise pour cliquer sur ce bouton !", ephemeral: true})
            try {
                const banInfo = await interaction.guild.bans.fetch(req[0].userID);
                if (banInfo.size === 0) return interaction.reply(`<@${req[0].userID}> n'est pas banni du serveur.`);
            await interaction.reply(`<@${req[0].userID}> viens d'être **unban** du serveur !`)
            await interaction.guild.members.unban(req[0].userID)
            } catch (error) {
                interaction.reply({content: `Erreur de la base de donnée...`, ephemeral: true})
            }})}}})
