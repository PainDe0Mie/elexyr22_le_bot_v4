const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message) => {
    if(message.author.bot) return;
	if(message.guild === null) return;

    const db = bot.db;
    
     if(message.author.id == "ID" && message.author.id == "ID") return //les personne pas touché
    
    db.query(`SELECT * FROM serveur WHERE guildID = '${message.guild.id}'`,async(err, req) => {
        if(req[0].spam !== "on") {
            return;
        } else {
            if(message.author.id === message.guild.ownerId){
                return;
            } else {
                await bot.function.searchSpam(message)
            }
        }

        db.query(`SELECT * FROM serveur WHERE guildID = '${message.guild.id}'`,async(err, req) => {
            if (req[0].antilien !== "on") {
                return;
            } else {
                if(message.author.id === message.guild.ownerId){
                    return;
                } else {
                    await bot.function.searchLinks(message)
                }
            }
        })
        db.query(`SELECT * FROM serveur WHERE guildID = '${message.guild.id}'`,async(err, req) => {
            if (req[0].mention !== "on") {
                return;
            } else {
                if(message.author.id === message.guild.ownerId){
                    return;
                } else {
                    await bot.function.searchMentions(message)
                }
            }
        })

    })})
