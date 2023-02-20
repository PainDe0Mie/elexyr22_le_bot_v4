const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberAdd", async (bot, member, user) => {
    
    const db = bot.db;
    
   // console.log(`[JOIN SERVEUR :] ${member.user.username} viens de rejoindre ${member.guild.name} !`)
    console.log(chalk.blue(`[JOIN SERVEUR :] ${member.user.username} viens de rejoindre ${member.guild.name} (${member.guild.id}) !`))

    let Embed = new Discord.MessageEmbed()
    .setColor(bot.color)
    .setTitle("New Join :")
    .setDescription(`**${member} *(${member.id})* viens de rejoindre \`\`${member.guild.name}\`\`**`)
     .setTimestamp()

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {

        //if(req.length < 1) return

   let channel = member.guild.channels.cache.get(`${req[0].logID}`)
    if(!channel) return;
    await channel.send({embeds: [Embed]})
})})