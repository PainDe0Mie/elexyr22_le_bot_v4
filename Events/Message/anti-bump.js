const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message, guild) => {
    if(message.author.bot) return;
	if(message.guild === null) return;

    const channels = "ID"
    const salon = bot.channels.cache.get(`${message.channel.id}`)
    
    if(channels == message.channel.id) return message.delete() && salon.send(`${message.author}, tu n'a pas droit **d'envoyer messages,** tu peux seulement __utilisé__ : \`\/bump\`\.`).then(async mess => setTimeout(async () => {mess.delete()}, 5000)) 
})
