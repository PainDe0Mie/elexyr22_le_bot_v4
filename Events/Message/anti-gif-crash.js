const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message, channel) => {

    if(message.content !== "https://gfycat.com/hopefulimpossiblebuzzard") return

    message.delete()
 })