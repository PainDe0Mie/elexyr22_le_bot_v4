const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "unmute",
    description: "Permet de rendre la parole à un utilisateur",
    utilisation: "[membre] (raison)",
    alias: ["unmute"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
      let user = message.user ? bot.users.cache.get(args._hoistedOptions[0].value) : (message.mentions.users.first() || bot.users.cache.get(args[0].value));
      if(!user) return message.reply("*Aucune personne trouvée...*")

      let reason = message.user ? args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined : args.slice(1).join(" ")
      if(!reason) reason = "Aucune raison donnée";

      if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous unmute...*")
      if(user.id === message.guild.ownerId) return message.reply("*Vous ne pouvez pas unmute le owner..*")
      if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("*Vous ne pouvez pas unmute cette personne...*")
      if(!message.guild.members.cache.get(user.id).isCommunicationDisabled()) return message.reply("*Cette personne n'est pas mute...*")

      try {
          await user.send(`<:Elexyr22:754441336849170543> Vous avez été **unmute** sûr : \`\` ${message.guild.name} \`\` ! <a:Ha_ha1:756978403625926806>`)
      } catch (err) {}

      await message.reply(`${user} a bien été **unmute !** <a:Ha_ha1:756978403625926806>`)

      message.guild.members.cache.get(user.id).timeout(null, `${reason} (Parole rendu par ${message.user === undefined ? message.author.tag : message.user.tag})`)
    }
})