const Discord = require("discord.js")
const Command = require("../../Structure/Command")

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
      let channelID = message.mentions.channels.first()
      if(!args[0]){
        return message.reply("<:Elexyr22:754441336849170543> Veuillez m'indiquer 'on ou off' \n\n Exemple : `e!bvn <off/on> <#salon>` <a:mmhh2:768183641930334209>")
      }
        if(args[0]=== 'on'){
          if(!channelID){
            return message.reply("<:Elexyr22:754441336849170543> Veuillez m'indiquer un **salon** \n\n Exemple : `e!bvn <off/on> <#salon>` <a:mmhh2:768183641930334209>");
            } else {
            sql = `UPDATE serveur SET welcome = 'on' WHERE guildID = ${message.guild.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })
            sql = `UPDATE serveur SET welcomeID = '${channelID.id}' WHERE guildID = ${message.guild.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })
            await message.reply({content: `<:Elexyr22:754441336849170543> Votre message de **bienvenue**, est bien __activé__ dans le salon ${channelID} ! <a:Valide_Or:756978408159707136>`})
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
           message.reply({content: `<:Elexyr22:754441336849170543> Votre message de **bienvenue** à bien été __éteint !__ <a:Valide_Or:756978408159707136>`})
        }
    } catch (err) {console.log(err)}
     } 
})