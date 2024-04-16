const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');
const transcript = require('discord-html-transcripts');
const Event = require('../../Structure/Event');

const usersWithTickets = new Set();

module.exports = new Event('interactionCreate', async (bot, interaction) => {

  if(interaction.isButton()) {

    if(interaction.customId === "ticket") {

        let channel = await interaction.guild.channels.create(`<🎫・ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})
        await channel.setParent(interaction.channel.parentId)

        await channel.permissionOverwrites.create(interaction.user, {
            SEND_MESSAGES: true,
            EMBED_LINKS: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true
        })
        await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
            SEND_MESSAGES: false,
            EMBED_LINKS: false,
            VIEW_CHANNEL: false,
            READ_MESSAGE_HISTORY: false
        })

        await interaction.reply({content: `Votre ticket a été créé avec succès ${channel} !`, ephemeral: true})
        
        let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle("Nouveau Ticket")
        .setDescription(`Bonjour ${interaction.user}, quelle est votre **problème / question ?** \n\n Si vous n'envoyez **aucun message,** \n 1 heure après avoir ouvert votre ticket, __il sera fermé.__ \n\n Notre équipe vous répondra dans les __plus brefs délais.__ \n\nMerci d'éviter de **mentionner** Elexyr22 / \nson équipe sous peine d'un __mute.__ \n\nL'équipe de <@1088442920530620477>`)
        //.setDescription(`${interaction.user.username} vient d'ouvrir un ticket !`)
        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()

        const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("DANGER")
        .setEmoji("🔒")
        .setLabel("Fermer le ticket")
        .setCustomId("close"))
                                                                 
       /* new Discord.MessageButton()
        .setStyle("PRIMARY")
        .setEmoji("📑")
        .setLabel("Demander le transcript")
        .setCustomId("transcript") */

        await channel.send(`|| ${interaction.user} | @everyone  ||`);
        const sentMessage = await channel.send({embeds: [Embed], components: [btn]})
        await sentMessage.pin();
    }

   /* if(interaction.customId === "transcript") {
        await interaction.reply({content: `<:elexyr22:1067501213085597806> *Le transcript est en cours de développement, merci de patienter...* <a:fox_work:1065710430980411482>`, ephemeral: true})} */

    if(interaction.customId === "close") {
	if(interaction.guild.id === "ID") { //ID du serveur

        let transcriptData = await transcript.createTranscript(interaction.channel);

        let logsChannelId = "ID"; 
        let logsChannel = interaction.guild.channels.cache.get(logsChannelId);
        if(!logsChannelId) return

        await logsChannel.send({
            content: `**Transcript du ticket** de: \`\`${interaction.channel.name}\`\``,
            files: [transcriptData],
        })}
        
        await interaction.channel.delete()
    }}})
