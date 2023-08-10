const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction, db) => {
    
    // création ticket 
    
    if(interaction.isButton()) {

      if(interaction.customId === "tickets") {

         // let maman = await interaction.guild.channels.setParent("1065925962862178334")
          //let channel = await maman.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
          
          let channel = await interaction.guild.channels.create(`ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
          await channel.setParent(interaction.channel.parentId)
          
        

          await channel.permissionOverwrites.create(interaction.user, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true,
          })

          await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false,

          })

          await interaction.reply({content: `Votre ticket a été ouvert dans ${channel} !`, ephemeral: true})
          
          let Embed = new Discord.MessageEmbed()
          .setColor(bot.color)
          .setTitle("Nouvelle demande :")
          .setDescription(`Bonjour ${interaction.user}, qu'elle est votre **problème / question ?** \n\n Si tu envoye **aucun message,** \n 1h après avoir ouvert ton ticket, __il sera fermé.__ \n\n Notre équipe vous répondra dans les __plus brefs délais.__ \n\nMerci d'évité de **mentionné** Elexyr22, \n ou son équipe sous peine de __sanctions.__ \n\nL'équipe de <@1088442920530620477>`)
          .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()

          const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
          .setStyle("DANGER")
          .setEmoji("🔒")
          .setLabel("Fermer le ticket")
          .setCustomId("close"),
                                                                   
         /* new Discord.MessageButton()
          .setStyle("PRIMARY")
          .setEmoji("📑")
          .setLabel("Demander le transcript")
          .setCustomId("transcript")) */
                                                                   )

         // await channel.send(`|| ${interaction.user} | <@&1065700459618238554> ||`)
          await channel.send(`|| ${interaction.user} | @everyone  ||`)
          await channel.send({embeds: [Embed], components: [btn]})
      
      }

      if(interaction.customId === "transcript") {

          /* await interaction.deferReply()
          await bot.channels.cache.get(req[0].channelID).send({content: `Transcript de ${interaction.message.embeds[0].description.split(" ")[0]}`, files: [await transcript.createTranscript(interaction.channel)]})
          await interaction.editReply({content: "Transcript envoyé avec succès !", ephemeral: true}) */
          await interaction.reply({content: `*Le transcript sera patch, bientôt, nous avons beaucoup de taff !*`, ephemeral: true})
      }

      if(interaction.customId === "close") {

          /* let user = interaction.guild.members.cache.find(m => m.user.username === interaction.message.embeds[0].description.split(" ")[0].split("#")[0] && m.user.discriminator === interaction.message.embeds[0].description.split(" ")[0].split("#")[1]).user;
          try {await user.send(`Votre ticket a été supprimé par ${interaction.user.tag}`)} catch (err) {} */
          await interaction.channel.delete()
      }
}})
