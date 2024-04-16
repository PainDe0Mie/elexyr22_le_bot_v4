const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("guildCreate", async (bot, guild, member, memberCount) => {

 const serveur = guild.memberCount
let nombre = [
    "0"
]

if(serveur < nombre) {
    const final = (nombre - serveur);
    return guild.leave()
}})
