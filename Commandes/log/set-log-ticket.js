const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "set-log-ticket",
    description: "Permet d'activé les logs du bot",
    utilisation: "",
    alias: ["set-log-ticket", "set-ticket",],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "1) Modération",
    cooldown: 5,
    
    async run(bot, message, args, db) {

      let channelID = message.mentions.channels.first()
      if(!args[0]) return message.reply("Veuillez m'indiquer un salon \n\n Exemple : `e!set-log-ticket <#salon>` <a:mmhh:1067175530509639791>")

      db.query(`SELECT * FROM serveur WHERE guildID = ${message.guildId}`, async (err, req) => {

        if (!req.length < 1) {

            db.query(`UPDATE serveur SET ticketID = '${channelID}' WHERE guildID = ${message.guild.id}`.replace("<#", "").replace(">", ""))
            }
            
            if (req.length < 1) {

             let sql = `INSERT INTO serveur (ticketID) VALUES ('${channelID.id}')`.replace("<@&", "").replace(">", "")
            db.query(sql, function (err) {
                if (err) throw err;
            })
          }

        message.reply({content: `Les logs Ticket on bien été activé !`})

        })}})
