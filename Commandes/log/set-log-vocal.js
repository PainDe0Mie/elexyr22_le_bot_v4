const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "set-log-vocal",
    description: "Permet d'activé les logs du bot",
    utilisation: "",
    alias: ["set-log-vocal", "voc",],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "1) Modération",
    cooldown: 5,
    
    async run(bot, message, args, db) {

     try{
      let channelID = message.mentions.channels.first()
      if(!args[0]){
        return message.reply("Veuillez m'indiquer un salon \n\n Exemple : `e!set-log-vocal <#salon>` <a:mmhh:1067175530509639791>")

    } else {
        sql = `UPDATE serveur SET vocID = '${channelID.id}' WHERE guildID = ${message.guild.id}`
        db.query(sql, function (err){
          if(err) throw err;

        })

        message.reply({content: `Les logs Vocal on bien été activé !<a:valide_or:1067501018906108024>`})

        }

    } catch (err) {console.log(err)}

}}) 
