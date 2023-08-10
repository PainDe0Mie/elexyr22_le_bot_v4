const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "pp",
    description: "Donne l'avatar d'une personne",
    utilisation: "",
    alias: ["pp", "pic","avatar",],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

            let user;
            if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
                user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
                if(!user) return message.reply("Aucune personne trouvée !")
            } else user = message.user ? message.user : message.author;

    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Voici la pp de : ${user.username}`)
    .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setTimestamp()
 .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds : [embed]})
}
})
