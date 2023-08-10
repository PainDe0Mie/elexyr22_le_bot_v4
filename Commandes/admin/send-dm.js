const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "mp",
    description: "",
    utilisation: "",
    alias: ["mp"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "",
    cooldown: 60,

    async run(bot, message, args, db) {
        
        let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("Cet utilisateur n'existe pas... ");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("Cet utilisateur n'existe pas... ");
      
        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("Vous ne pouvez pas vous avertir vous-même ! ")


        await message.reply(`${user} à bien reçu ton dm !`)
        try {
            let embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setDescription(`${reason}`)
            .setFooter(`Message envoyé par : ${message.author.username}`)
             await user.send({embeds: [embed]})
        } catch (err) {}

    }})