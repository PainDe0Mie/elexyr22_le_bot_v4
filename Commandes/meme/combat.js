const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "combat",
    description: "Fait un calin ?",
    utilisation: "",
    alias: ["combat", "fight"],
    permission: "",
    category: "7) Même",
    cooldown: 5,
    async run(bot, message, args, db) {

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
        if(!user) return message.reply("*Aucune personne trouvée...*")



let replies =['https://cdn.weeb.sh/images/HkJ6-e91z.gif','https://cdn.weeb.sh/images/Hy7KZUmDb.gif','https://cdn.weeb.sh/images/SkFub87DW.gif','https://cdn.weeb.sh/images/HJKiX1tPW.gif','https://cdn.weeb.sh/images/HyV5mJtDb.gif','https://cdn.weeb.sh/images/S1-RQVFjZ.gif','https://cdn.weeb.sh/images/ryqfNEtj-.gif','https://cdn.weeb.sh/images/rkpAXa5bG.gif']

let res = Math.floor(Math.random() * replies.length);

let loveEmbed = new Discord.MessageEmbed()
        .setColor('#cb05e2')
        .setDescription(`${message.author} fait un combat avec ${user} ! <a:Bagare2:754441347888578711>`)
        .setImage(replies[res])
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`)
   message.reply({embeds : [loveEmbed]})


}})