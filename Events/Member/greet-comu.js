const Discord = require("discord.js")
const Event = require("../../Structure/Event")
const ms = require("ms");

module.exports = new Event("guildMemberAdd", async (bot, member, user, message) => {
    if(member.guild.id !== "1040701512298541106") return;

    let channel1 = bot.channels.cache.get("1117142257770954824") 
    //let channel2 = bot.channels.cache.get("1065665447481053235")
    
      let triggerTime = Date.now()
      let timestampInMilliseconds = triggerTime
      let timestampInSeconds = Math.floor(timestampInMilliseconds / 1000); 

  channel1.send(`<:elexyr22:1067501213085597806> Bienvenue ${member}, merci de **lire le message** dans: https://discord.com/channels/1040701512298541106/1117142257770954824/1117144603041206383 <a:bvn:1068255439302692904> | || <t:${timestampInSeconds}:R> || `).then(async mess => setTimeout(async () => {mess.delete()}, 15000))
    
/*channel2.send(`<:elexyr22:1067501213085597806> Bienvenue ${member}, merci de **lire le message** dans: https://discord.com/channels/1040701512298541106/1117142257770954824/1117144603041206383 <a:bvn:1068255439302692904>`).then(async mess => setTimeout(async () => {mess.delete()}, 60000)) */

})
