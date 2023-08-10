const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk");

module.exports = new Command({

    name: "admin2",
    description: "",
    utilisation: "",
    alias: ["admin2"],
    permission: "",
    category: "",
    cooldown: 1,

    async run(bot, message, guild) {
        
    const db = bot.db;
      
    const user = message.author

    db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {

	if(req.length < 1) return message.reply(" Uniquement les **Admins** peut utilisé cette commande !") 

   if(req[0].statut === "OFF") return message.reply(" Uniquement les **Admins** peut utilisé cette commande !") 
  if(req[0].statut === "ACTIF") {
        

    message.guild.roles.cache.find(role => role.name === '👑・PERMISSION ANTI-RAID').delete()
    message.reply(" **Mode Admin** désactivé !")
 	console.log(chalk.bgBlue(`[Staff Retiré] pour ${message.author.username}  | sûr ${message.guild.name}`))
        
    }})}})