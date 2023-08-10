const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {
    
    const db = bot.db
    
    if(interaction.isButton()) {
    if(interaction.customId === "unban") {

            db.query(`SELECT * FROM dev WHERE guildID = ${interaction.guild.id}`, async (err, req) => {
            if(!interaction.member.permissions.has(new Discord.Permissions(Discord.Permissions.FLAGS.BAN_MEMBERS))) return interaction.reply({content: "<:elexyr22:1067501213085597806> Vous n'avez pas la permission requise pour cliquer sur ce bouton ! <a:nop1:1068106487358038126>", ephemeral: true})
            try {
                const banInfo = await interaction.guild.bans.fetch(req[0].userID);
                if (banInfo.size === 0) return interaction.reply(`<:elexyr22:1067501213085597806> ${user} n'est pas banni du serveur. <a:happy:1067494990240034917>`);
            await interaction.reply(`<:elexyr22:1067501213085597806> <@${req[0].userID}> viens d'être **unban** du serveur ! <a:ayoupi1:1067166921293844491>`)
            await interaction.guild.members.unban(req[0].userID)
            } catch (error) {
                interaction.reply({content: `<:elexyr22:1067501213085597806>  <@${req[0].userID}> n'est plus banni ! <a:nop1:1068106487358038126>`, ephemeral: true})
            }})}}})