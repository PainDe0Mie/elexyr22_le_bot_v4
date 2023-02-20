
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "love",
    description: "Permet de voir le niveau d'amour",
    utilisation: "",
    alias: ["love", "lc"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {
        const block = "⬛";
        const heart = "<:Coeurcpps:754441319027572826>";

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
        if(!user) return message.reply("*Aucune personne trouvée...*")

    let loveEmbed = new Discord.MessageEmbed()
        .setColor('#f47fff')
        .setDescription(`Niveau de d'amour entre __**${message.author}**__ et __**${user} !**__ <a:ECoeur1:754441320759820288>`)
        .addField(`Amoureux à :`, ship())
        .setFooter(`Réalisé par un Algorithme sûr puissant ("1% de taux d'erreur")`)
        message.reply({embeds : [loveEmbed]})

    function ship() {
        const hearts = Math.floor(Math.random() * 10) + 0; 
        const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}% !`;
        return str;
    }
    }
    
})