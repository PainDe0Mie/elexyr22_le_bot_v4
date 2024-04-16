const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["serv"],
    permission: "",
    category: "",
    cooldown: 5,

    async run(bot, message, args) {
        
        const db = bot.db;
        const user = message.author
    
        db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {
        if(req.length < 1) return message.reply(" Uniquement les **Admins** peut utilisé cette commande ! ") 
    
      if(req[0].statut === "OFF") return message.reply(" Uniquement les **Admins** peut utilisé cette commande ! ") 
      if(req[0].statut === "ACTIF") {
          
        let bgdecyber = bot.guilds.cache.map((guild, i) => `\n\n ${guild.name} : (${guild.id}) : ${guild.memberCount}`)
        //message.reply("Liste des serveurs envoyé dans la console !")

        const cyberbg = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Liste des serveurs du bot :")
        .setDescription(`${bgdecyber}`)
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
        message.reply({embeds: [cyberbg]}) 
        console.log(`${bgdecyber}`)
    }})}})
