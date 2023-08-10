const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "set-welcome",
    description: "Permet de définir le channel de bienvenue",
    utilisation: "",
    alias: ["set-welcome", "set-bienvenue", "bvn"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
     try{
         console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!welcome sûr '${message.guild.name}'`))
      let channelID = message.mentions.channels.first()
      if(!args[0]){
        return message.reply(" Veuillez m'indiquer 'on ou off' \n\n Exemple : `e!bvn <off/on> <#salon>` >")
      }
        if(args[0]=== 'on'){
          if(!channelID){
            return message.reply(" Veuillez m'indiquer un **salon** \n\n Exemple : `e!bvn <off/on> <#salon>`");
            } else {
            sql = `UPDATE serveur SET welcome = 'on' WHERE guildID = ${message.guild.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })
            sql = `UPDATE serveur SET welcomeID = '${channelID.id}' WHERE guildID = ${message.guild.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })
            await message.reply({content: ` Votre message de **bienvenue**, est bien __activé__ dans le salon ${channelID} ! `})
            }
          }
        if(args[0] === 'off'){
          sql = `UPDATE serveur SET welcome = 'off' WHERE guildID = ${message.guild.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })
            sql = `UPDATE serveur SET welcomeID = 'off' WHERE guildID = ${message.guild.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })
           message.reply({content: ` Votre message de **bienvenue** à bien été __éteint !__  `})
        }
    } catch (err) {console.log(err)}
     } 
})