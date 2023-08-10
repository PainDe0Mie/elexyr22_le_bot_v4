const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const chalk = require("chalk");

module.exports = new Event("voiceStateUpdate", async (bot, oldState, newState) => {
    
    if(newState.member.user.id === "1013135812545753119") return

        const db = bot.db;
        const oldChannel = oldState.channel;
        const newChannel = newState.channel;

        db.query(`SELECT * FROM serveur WHERE guildID = ${oldState.guild.id}`, async (err, req, length) => {
            if(req.length < 1) return;

            let channel = oldState.guild.channels.cache.get(`${req[0].logID}`)
            if(!channel) return;

        if (oldChannel === null && newChannel !== null) {
            let Embed1 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Salon vocal rejoint :")
            .setDescription(`**${newState.member.user} - ${newState.member.user.username} *(${newState.member.user.id})* viens de rejoindre: \`\`${newChannel.name}\`\`**`)
            .setTimestamp()
            await channel.send({embeds: [Embed1]})

        } else if (newChannel === null) {
            let Embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Salon vocal quitter :")
            .setDescription(`**${oldState.member.user} - ${oldState.member.user.username} *(${oldState.member.user.id})* viens de quitter: \`\`${oldChannel.name}\`\`**`)
            .setTimestamp()
            await channel.send({embeds: [Embed2]})
        } else {
            let Embed3 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle("Salon vocal moove :")
            .setDescription(`**${oldState.member.user} - ${oldState.member.user.username} *(${oldState.member.user.id})* à été moove de : \n \`\`${oldChannel.name}\`\` à \`\`${newChannel.name}\`\`**`)
            .setTimestamp()
            await channel.send({embeds: [Embed3]})
        }})})