const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event");
const numberUnBanMap = new Map();

module.exports = new Event("guildBanRemove", async (bot, unban, guild) => {
    const db = bot.db;

    const audit = (await unban.guild.fetchAuditLogs().catch(() => {})).entries.first();   
    if(audit.action === "MEMBER_BAN_REMOVE") {
    if(audit.action === "MEMBER_BAN_REMOVE" == true){
        
 	console.log(chalk.green(`[NEW UNBAN :] ${unban.user.username} à été unban par "${audit.executor.username}" sûr le serveur '${unban.guild.name}'`))

let Embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setThumbnail(unban.user.displayAvatarURL({dynamic: true}))
.setTitle("New Uban:")
.setDescription(`**${unban.user} - ${unban.user.username}** *(${unban.user.id})* viens d'être unban par ${audit.executor}`)
 .setTimestamp()
 
db.query(`SELECT * FROM serveur WHERE guildID = ${unban.guild.id}`, async (err, req) => {
	if(req.length < 1) return

   let channel = unban.guild.channels.cache.get(`${req[0].logID}`)
    if(!channel) return;
    await channel.send({embeds: [Embed]})
    
   let guild = bot.guilds.cache.get("ID"); //id du serv
   let log = guild.channels.cache.get("ID") //id du channel
    if(!log) return console.log("salon inconnu")
    if(unban.guild.id === "ID") return log.send({embeds: [Embed]}) //id du serv
})}}})
