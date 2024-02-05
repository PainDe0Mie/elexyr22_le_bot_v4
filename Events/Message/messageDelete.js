const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageDelete", async (bot, message) => {

    const db = bot.db;
    
    if(bot.snipe.get(message.channel.id)) await bot.snipe.delete(message.channel.id) && await bot.snipe.set(message.channel.id, message)
    else await bot.snipe.set(message.channel.id, message);
    if(message.author.bot) return;

    
    const AuditsLogs = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE',
        limit: 1
    })

    const LatestMessageDeleted = AuditsLogs.entries.first();
    
    let Embed = new Discord.MessageEmbed()
    .setColor("#e000ff")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setTitle("New Message Delete:")
    .setDescription(`Auteur: ${message.author} \n\nDate: <t:${Math.floor(message.createdAt / 1000)}:F> \n\nDans: <#${message.channel.id}> \n\nContenu  \`\`\`${message.content}\`\`\``)
     .setTimestamp()

    db.query(`SELECT * FROM serveur WHERE guildID = ${message.guildId}`, async (err, req) => {

        if(req.length < 1) return;

   let channel = message.guild.channels.cache.get(`${req[0].logID}`)
    if(!channel) return;
    await channel.send({embeds: [Embed]})
})})
