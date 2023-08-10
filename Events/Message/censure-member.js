const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message, guild) => {

    const db = bot.db;

    db.query(`SELECT * FROM cenure WHERE userID = ${message.author.id}`, async (err, req) => {

    if(req.length < 1) return

    if(req[0].statut === "ACTIF") {

        const user = req[0].userID
        if(user === message.author.id) return message.delete()

}})})
        