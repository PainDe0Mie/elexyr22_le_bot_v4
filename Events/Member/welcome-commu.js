const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberUpdate", async (member, oldMember, newMember) => {
    if(newMember.guild.id !== "ID") return; //ID du serv
    
    //if(user !== member.roles.cache.get("1065700494711984319")) return console.log("uwu")
    //if(member.roles.cache.get("1065700494711984319")) return;
    if(oldMember.pending && !newMember.pending) {

    await member.channels.cache.get("ID").send(`Bienvenue ${newMember}, sûr le serveur ** 👑・Taverne d'Elexyr22 !**\n\n Nous sommes **${newMember.guild.memberCount}.** \n\n Passe un **agréable** moment dessus ! `)

}})
