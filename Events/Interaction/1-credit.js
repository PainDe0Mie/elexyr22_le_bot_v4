const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction, db) => {
    
    if(interaction.isButton()) {

        if(interaction.customId === "credit1") {

            const row1 = new MessageActionRow()
            .addComponents(
              new MessageButton()
                .setURL(`https://t.me/cash2pays`)
                .setLabel('Cash2Pay')
                .setEmoji("💳")
                .setStyle('LINK'),
            
                new MessageButton()
                .setURL(`https://my.axial-host.fr/aff.php?aff=3`)
                .setLabel('Hébergeur VPS Pas Cher')
                .setEmoji("🚀")
                .setStyle('LINK'),
                
                new MessageButton()
                .setURL(`https://discord.gg/wdhqyAZN4r`)
                .setLabel('Bot List [Ajoute ton bot]')
                .setEmoji("🤖")
                .setStyle('LINK'),


               /* new MessageButton()
                .setURL(`https://www.youtube.com/watch?v=NOnh1QAMqZc`)
                .setLabel('Code Bot Open Source GRATIS !')
                .setEmoji("🦝")
                .setStyle('LINK'), */
);
    
            const embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setTitle(`Information Secondaire :`) 
            .setDescription("__Nos autre projet,__ n'hésitez pas à aller jeter un **coup d'oeil !**")
            interaction.reply({embeds: [embed], components: [row1], ephemeral: true})
        
}}})
