const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "verif",
    description: "Créer un panel de verif",
    utilisation: "",
    alias: ["verif"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM verif WHERE guild = ${message.guild.id}`, async (err, req) => {

        const btn = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
          .setStyle("SUCCESS")
          .setCustomId('verif')
          .setEmoji("🚧")
          .setLabel("Se Vérifier"), )

          let arg = message.user ? args._hoistedOptions[0].value : args[0]
          if(!arg) return message.reply("Veuillez écrire comme ça : `e!verif #salon @rôle` !")

          let channel = message.guild.channels.cache.get(args) || message.mentions.channels.first()
          if(!channel) return message.reply(`*Merci de me donner un salon qui existe...*`)

          let rôle = message.user ? args._hoistedOptions[1].value : args[1]
          if(!rôle) return message.reply("Veuillez écrire comme ça : `e!verif #salon @rôle` !")
          if(message.user ? !args._hoistedOptions[0].value : !message.mentions.channels.first()) return message.reply(`*Merci de me donner un rôle qui existe...*`)

          if (!req.length < 1) {

          db.query(`UPDATE verif SET channel = '${channel}' WHERE guild = ${message.guild.id}`.replace("<#", "").replace(">", ""))
          db.query(`UPDATE verif SET role = '${rôle}' WHERE guild = ${message.guild.id}`.replace("<@&", "").replace(">", "")) 
          }
          

          if (req.length < 1) {
                      let sql = `INSERT INTO verif (channel, role, guild, bot) VALUES ('${channel.id}', '${rôle}', '${message.guild.id}', '${bot.user.id}')`.replace("<@&", "").replace(">", "")
          db.query(sql, function (err) {
              if (err) throw err;
          })
        }

          const embed = new Discord.MessageEmbed()
          .setDescription(`**Clique ici** afin d’avoir accès à __l’intégralité du serveur !__

          N’hésite pas à envoyer __un message,__ à l’un des __fondateurs__ si tu as **un problème !**`)
         // .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setColor(bot.color)
          .setImage("https://cdn.discordapp.com/attachments/765158755905961984/1024367257293443163/captcha-google.gif")
          bot.channels.cache.get(channel.id).send({embeds: [embed], components: [btn]})

          message.reply({content: `La vérif a été envoyé dans ${channel} !`})
})}})