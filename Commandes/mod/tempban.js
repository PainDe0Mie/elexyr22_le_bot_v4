const Discord = require("discord.js")
const Command = require("../../Structure/Command")

const parseDuration = require('parse-duration'),
  humanizeDuration = require('humanize-duration')
module.exports = new Command({

  name: "tempban",
  description: "Permet de bannir temporairement un utilisateur",
  utilisation: "[membre] [temps] [raison]",
  alias: ["tempban", "temp-ban"],
  permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
  category: "1) Modération",
  cooldown: 5,

  async run(bot, message, args, db) {
    let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)

    if (!user) return message.reply('Veuillez mentionner le membre à bannir.')
    if (user.id === message.guild.ownerID) return message.reply('Vous ne pouvez pas bannir le propriétaire du serveur.')
    if (message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("Vous ne pouvez pas bannir cette personne !")
    if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("Vous ne pouvez pas vous bannir vous-même !")


    const duration = parseDuration(message.user === undefined ? args.slice(1).join(" ") :args._hoistedOptions[1].value)
   
    if (!duration) return message.reply(' Veuillez indiquer une durée valide.\nLes durée sont : `s = seconde | h = heures | d = jours`.')

    let reason = message.user === undefined ? args.slice(2).join(" ") : args._hoistedOptions[2].value;
    if(!reason) reason = "Aucune raison donnée";
    try {
      await user.send(`Vous êtes banni temporairement du serveur: ${message.guild.name} par  ${message.user === undefined ? message.author.tag : message.user.tag}  pendant  ${humanizeDuration(duration, {language: 'fr'})} pour:  ${reason} ! \n\n https://cdn.discordapp.com/attachments/767361889990344715/836393401573965854/Ban_22.gif`)
  } catch (err) {}

    await message.guild.members.cache.get(user.id).ban({
      reason: `${reason} (Banni par ${message.user === undefined ? message.author.tag : message.user.tag})`
    })
    setTimeout(() => {
      message.guild.members.unban(user)
      
    }, duration)

    message.reply(`${user} a été banni temporairement pendant ${humanizeDuration(duration, {language: 'fr'})}, pour: ${reason} !`)

  }
})