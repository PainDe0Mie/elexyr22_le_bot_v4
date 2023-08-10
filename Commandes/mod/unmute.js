const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "unmute",
    description: "Permet de rendre la parole à un utilisateur",
    utilisation: "[membre] (raison)",
    alias: ["unmute"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
        
       let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply(" Cet utilisateur n'existe pas... ");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply(" Cet utilisateur n'existe pas... ");

      if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous unmute...*")
      if(user.id === message.guild.ownerId) return message.reply("*Vous ne pouvez pas unmute le owner..*")
      if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("*Vous ne pouvez pas unmute cette personne...*")
      if(!message.guild.members.cache.get(user.id).isCommunicationDisabled()) return message.reply("*Cette personne n'est pas mute...*")

      try {
          await user.send(` Vous avez été **unmute** sûr : \`\` ${message.guild.name} \`\` !`)
      } catch (err) {}

      await message.reply(` ${user} a bien été **unmute !**`)

      message.guild.members.cache.get(user.id).timeout(null, `${reason} (Parole rendu par ${message.user === undefined ? message.author.tag : message.user.tag})`)
        
            console.log(chalk.yellow(`[CMD] "${message.author.tag}"" à utilisé la commande e!unmute ${user} sûr '${message.guild.name}'`))
            if(message.guild.id !== "1040701512298541106") return;
            const salon = bot.channels.cache.get("1084195196583018536")
            salon.send(` ${message.author.tag} à utilisé la commande **e!unmute ${user}.** `) 
    }
})