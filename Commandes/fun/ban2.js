const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "ban",
    description: "Fake Ban !",
    utilisation: "",
    alias: ["ban2"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,

    async run(bot, message, args, db) {

      let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
      if(!user) return message.reply("Aucune personne trouvée !")
      if(user.id == "954310680255803432") return message.channel.send("_Je ne peux pas **ban perm** mon maître, désolé..._")

      let reason = message.user === undefined ? args.slice(1).join(" ") : args._hoistedOptions[1]
      if(!reason) reason = "Aucune raison donnée";
        
    message.reply({content : `${user} à été ban, pour ${reason} !`})


    }})