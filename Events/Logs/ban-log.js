const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event");
const numberBanMap = new Map();

module.exports = new Event("guildBanAdd", async (bot, ban, guild) => {

  const audit = (await ban.guild.fetchAuditLogs().catch(() => {})).entries.first();
  if(audit) return;
  

	if(audit.action === "MEMBER_BAN_ADD") {
  if(audit.action === "MEMBER_BAN_ADD" == true){
      
const reason = audit.reason
 

const db = bot.db;

console.log(chalk.green(`[NEW ban :] ${ban.user.username} à été ban par "${audit.executor.username}" sûr le serveur '${ban.guild.name}' pour "${reason}" `))

let Embed = new Discord.MessageEmbed()
.setColor("YELLOW")
.setThumbnail(ban.user.displayAvatarURL({dynamic: true}))
.setTitle("New Ban:")
.setDescription(`**${ban.user} - ${ban.user.username}** *(${ban.user.id})* viens d'être ban par ${audit.executor} pour ${reason}`)
 .setTimestamp()
 
db.query(`SELECT * FROM serveur WHERE guildID = ${ban.guild.id}`, async (err, req) => {
if(req.length < 1) return

   let channel = ban.guild.channels.cache.get(`${req[0].logID}`)
    if(!channel) return;
    await channel.send({embeds: [Embed]})

})}}})
