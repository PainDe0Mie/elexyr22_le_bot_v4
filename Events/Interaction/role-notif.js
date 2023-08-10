const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction, db) => {
    
    if(interaction.isButton()) {

      if(interaction.customId === "notif1") { //notif cordo
        if(interaction.member.roles.cache.get("1087315432203108403")) return interaction.member.roles.remove("1087315432203108403") && interaction.reply({content: `<:elexyr22:1067501213085597806> Tu pert : <@&1087315432203108403> <a:valide_or:1067501018906108024>`, ephemeral: true})

        interaction.member.roles.add("1087315432203108403") //notif cordo
        interaction.reply({content: `<:elexyr22:1067501213085597806> Tu reçois : <@&1087315432203108403> <a:valide_or:1067501018906108024>`, ephemeral: true})
    }
    
    if(interaction.customId === "notif2") { //notif gw
        
if(interaction.member.roles.cache.get("1066028124845912064")) return interaction.member.roles.remove("1066028124845912064") && 
interaction.reply({content: `<:elexyr22:1067501213085597806> Tu pert : <@&1066028124845912064> <a:valide_or:1067501018906108024>`, ephemeral: true})
    
        interaction.member.roles.add("1066028124845912064") //notif gw
        interaction.reply({content: `<:elexyr22:1067501213085597806> Tu reçois : <@&1066028124845912064> <a:valide_or:1067501018906108024>`, ephemeral: true})
        
    }
    
    if(interaction.customId === "notif3") { //notif youtube
        
if(interaction.member.roles.cache.get("1066026168748343346")) return interaction.member.roles.remove("1066026168748343346") && 
interaction.reply({content: `<:elexyr22:1067501213085597806> Tu pert : <@&1066026168748343346> <a:valide_or:1067501018906108024>`, ephemeral: true})
    
        interaction.member.roles.add("1066026168748343346") //notif youtube
        interaction.reply({content: `<:elexyr22:1067501213085597806> Tu reçois : <@&1066026168748343346> <a:valide_or:1067501018906108024>`, ephemeral: true})
    }
    
    if(interaction.customId === "notif4") { //notif annnonce
   
if(interaction.member.roles.cache.get("1066026170937774192")) return interaction.member.roles.remove("1066026170937774192") && 
interaction.reply({content: `<:elexyr22:1067501213085597806> Tu pert : <@&1066026170937774192> <a:valide_or:1067501018906108024>`, ephemeral: true})
    
        interaction.member.roles.add("1066026170937774192") //notif annnonce
        interaction.reply({content: `<:elexyr22:1067501213085597806> Tu reçois : <@&1066026170937774192> <a:valide_or:1067501018906108024>`, ephemeral: true})
    
    
        if(interaction.customId === "notif5") { //notif sondage
        
          if(interaction.member.roles.cache.get("1066026164877017189")) return interaction.member.roles.remove("1066026164877017189") && 
          interaction.reply({content: `<:elexyr22:1067501213085597806> Tu pert : <@&1066026164877017189> <a:valide_or:1067501018906108024>`, ephemeral: true})
              
interaction.member.roles.add("1066026164877017189") //notif sondage
interaction.reply({content: `<:elexyr22:1067501213085597806> Tu reçois : <@&1066026164877017189> <a:valide_or:1067501018906108024>`, ephemeral:true})
              
      }}}})
