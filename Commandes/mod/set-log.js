const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "set-log",
    description: "Permet d'activé les logs du bot",
    utilisation: "",
    alias: ["set-log", "log",],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "1) Modération",
    cooldown: 5,
    
    async run(bot, message, args, db) {

     try{
      let channelID = message.mentions.channels.first()
      if(!args[0]){
        return message.reply("<:Elexyr22:754441336849170543> Veuillez m'indiquer un salon \n\n Exemple : `e!set-log <#salon>` <a:mmhh2:768183641930334209>")

    } else {
        sql = `UPDATE serveur SET logID = '${channelID.id}' WHERE guildID = ${message.guild.id}`
        db.query(sql, function (err){
          if(err) throw err;

        })

        message.reply({content: `<:Elexyr22:754441336849170543> Les logs on bien été activé ! <a:Valide_Or:756978408159707136>`})

        }

    } catch (err) {console.log(err)}

}}) 