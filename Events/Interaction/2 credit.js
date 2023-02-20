const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction, db) => {
    
    if(interaction.isButton()) {

        if(interaction.customId === "credit2") {

            const row1 = new MessageActionRow()
            .addComponents(
            
                new MessageButton()
                .setURL(`https://discord.com/invite/elexyr22`)
                .setLabel('Support')
                .setEmoji("🧨")
                .setStyle('LINK'),
    
                new MessageButton()
                .setURL(`https://www.youtube.com/c/Elexyr22`)
                .setLabel('Youtube')
                .setEmoji("🎥")
                .setStyle('LINK'),
    
				new MessageButton()
                .setURL(`https://go.nordvpn.net/aff_c?offer_id=612&aff_id=71951&url_id=14830`)
                .setLabel('NordVPN')
                .setEmoji("🗻")
                .setStyle('LINK'),
    

);
    
            const embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setTitle(`Information Secondaire :`)
            .setDescription("__Nos sponsor,__ n'hésitez pas à aller jeter un **coup d'oeil !**")
            interaction.reply({embeds: [embed], components: [row1], ephemeral: true})
           //interaction.reply({content: {embeds: [embed], components: [row1]})
        
}}})
