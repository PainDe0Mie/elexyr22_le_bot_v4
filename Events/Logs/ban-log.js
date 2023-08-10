const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event");
const numberBanMap = new Map();

module.exports = new Event("guildBanAdd", async (bot, ban, guild) => {

    const audit = (await ban.guild.fetchAuditLogs().catch(() => {})).entries.first();
    if(audit) return
    
    const reason = audit.reason
             
    if(audit.action === "MEMBER_BAN_ADD") {
    if(audit.action === "MEMBER_BAN_ADD" == true){
 

console.log(chalk.red(`[NEW BAN :] (${ban.user.username}) à été ban par "${audit.executor.username}" pour <${reason}>  sûr le serveur '${ban.guild.name}'`))
  //console.log(chalk.cyan(`[NEW MESSAGE :] ${member.username}  à envoyé le message "${message.content}" dans le channel : < ${message.channel.name} > sûr le serveur '${message.guild.name}' (${message.guildId})`))  
    
}}})