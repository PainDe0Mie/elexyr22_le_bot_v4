const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event");
const numberUnBanMap = new Map();

module.exports = new Event("guildBanRemove", async (bot, unban, guild) => {

    const audit = (await unban.guild.fetchAuditLogs().catch(() => {})).entries.first();
             
    if(audit.action === "MEMBER_BAN_REMOVE") {
    if(audit.action === "MEMBER_BAN_REMOVE" == true){
 

console.log(chalk.green(`[NEW UNBAN :] ${unban.user.username} à été unban par "${audit.executor.username}" sûr le serveur '${unban.guild.name}'`))
  //console.log(chalk.cyan(`[NEW MESSAGE :] ${member.username}  à envoyé le message "${message.content}" dans le channel : < ${message.channel.name} > sûr le serveur '${message.guild.name}' (${message.guildId})`))  
    
}}})