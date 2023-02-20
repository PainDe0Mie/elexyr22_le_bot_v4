const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "calin",
    description: "Fait un calin ?",
    utilisation: "",
    alias: ["calin", "hug"],
    permission: "",
    category: "7) Même",
    cooldown: 5,
    async run(bot, message, args, db) {

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
        if(!user) return message.reply("*Aucune personne trouvée...*")



let replies = ['https://cdn.weeb.sh/images/rk6PsvOUM.gif','https://cdn.weeb.sh/images/S1qhfy2cz.gif','https://cdn.weeb.sh/images/Hyec_OmDW.gif','https://cdn.weeb.sh/images/BkHA_O7v-.gif','https://cdn.weeb.sh/images/HkQs_dXPZ.gif','https://cdn.weeb.sh/images/HytoudXwW.gif','https://cdn.weeb.sh/images/BysjuO7D-.gif']

let res = Math.floor(Math.random() * replies.length);

let loveEmbed = new Discord.MessageEmbed()
        .setColor('#cb05e2')
        .setDescription(`${message.author} fait un calin à ${user} ! <a:coeur_chat:807926836285014046>`)
        .setImage(replies[res])
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`)
   message.reply({embeds : [loveEmbed]})


}})