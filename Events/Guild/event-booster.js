const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberUpdate", async (bot, oldMember, newMember) => {

    // Nouveau Booster :
    const newStatuts = newMember.premiumSince;
    const oldStatuts = oldMember.premiumSince;
     if(!oldStatuts && newStatuts) {
        const channel = bot.channels.cache.get("1054730452537184286") 
        let embed1 = new Discord.MessageEmbed()
        .setColor("#f47fff")
        .setTitle("Nouveau Booster :")
        .setDescription(`**${newMember.user}** (\`\`(${newMember.username})\`\`) viens de **booster** le serveur ! <a:boost1:1071204641909506048>`)
        .setImage("https://cdn.discordapp.com/attachments/765158755905961984/769895365599297536/image0-1-1.png")
        channel.send({embeds : [embed1]})
    } 

    
    // ancien booster : 
    //if(oldStatuts.guild.id !== "1040701512298541106") return;
    if(oldStatuts&& !newStatuts) {
        const channel = bot.channels.cache.get("1054730452537184286") 
        let embed2 = new Discord.MessageEmbed()
        .setColor("#f47fff")
        .setTitle("Ancien Booster :")
        .setDescription(`<@${oldMember.user.id}> - \`\`(${oldMember.user.username})\`\` *(${oldMember.user.id})* *viens de __unbooster__ !* <a:snif:1069970251279769641>`)
        channel.send({embeds : [embed2]}) 
    } 
})