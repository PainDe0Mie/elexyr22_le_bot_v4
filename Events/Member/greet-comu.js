const Discord = require("discord.js")
const Event = require("../../Structure/Event")
const ms = require("ms");

module.exports = new Event("guildMemberAdd", async (bot, member, user, message) => {
    if(member.guild.id !== "ID") return; //id du serv

    let channel1 = bot.channels.cache.get("ID") 
    
      let triggerTime = Date.now()
      let timestampInMilliseconds = triggerTime
      let timestampInSeconds = Math.floor(timestampInMilliseconds / 1000); 

  channel1.send(`Bienvenue ${member}, merci de **lire le message** dans: https://discord.com/channels/1040701512298541106/1117142257770954824/1117144603041206383 | || <t:${timestampInSeconds}:R> || `).then(async mess => setTimeout(async () => {mess.delete()}, 15000))
    


})
