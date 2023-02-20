const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "gay",
    description: "Permet de voir à combien de % tu es gay !",
    utilisation: "",
    alias: ["gay", "pd"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {
        const block = "⬛";
        const heart = "🏳️‍🌈";


        let user;
        if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
            user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
            if(!user) return message.reply("Aucune personne trouvée !")
        } else user = message.user ? message.user : message.author;

    let loveEmbed = new Discord.MessageEmbed()
        .setColor('#FF1493')
        .setDescription(`Niveau de **Gay** de __**${user} !**__ <a:gay1:1018567960425668709>`)
        .addField(`Gay à :`, ship())
 		.setFooter(`Réalisé par un Algorithme sûr puissant ("1% de taux d'erreur")`)
   message.reply({embeds : [loveEmbed]})

    function ship() {
        const hearts = Math.floor(Math.random() * 10) + 0; // u can remove + 0
        const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}% !`;
        return str;
    }
    }
    
})