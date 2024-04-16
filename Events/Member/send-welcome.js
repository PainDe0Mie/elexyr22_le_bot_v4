const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberAdd", async (bot, member, user, guild) => {

    let serv = member.guild.name

    const db = bot.db;

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {

    if(req.length < 1) return;

    if(req[0].raid === "off") {
        
    if(req[0].welcome === "on") {

    let bvn = member.guild.channels.cache.get(`${req[0].welcomeID}`)
    if(!bvn) return 
    
	bvn.send(`Bienvenue ${member}, sûr le serveur **${serv} !**\n\n Passe un **agréable** moment dessus !`)

}}})})
