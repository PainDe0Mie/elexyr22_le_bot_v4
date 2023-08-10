const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message, guild) => {
    if(message.author.bot) return;

    const channels = "1065927640650891284"
    const channel2 = "1120791058025029742"
    const salon = bot.channels.cache.get(`${message.channel.id}`)
    if(channels == message.channel.id) return message.delete() && salon.send(` <:elexyr22:1067501213085597806> ${message.author}, tu n'a pas droit **d'envoyé messages,** tu peux seulement __utilisé__ : \`\/bump\`\. <a:nop1:1068106487358038126> `).then(async mess => setTimeout(async () => {mess.delete()}, 5000)) 
    if(channel2 == message.channel.id) return message.delete() && salon.send(` <:elexyr22:1067501213085597806> ${message.author}, tu n'a pas droit **d'envoyé messages,** tu peux seulement __utilisé__ : \`\/bump\`\. <a:nop1:1068106487358038126> `).then(async mess => setTimeout(async () => {mess.delete()}, 5000)) 
})