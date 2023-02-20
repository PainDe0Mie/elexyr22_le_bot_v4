const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "politique",
    description: "Pour qui tu vote !",
    utilisation: "",
    alias: ["politique","poli",],
    permission: "",
    category: "4) Fun",
    cooldown: 1,
    async run(bot, message, args, db) {

        let user;
        if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
            user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
            if(!user) return message.reply("Aucune personne trouvée !")
        } else user = message.user ? message.user : message.author;
        
    let replies = ["Mélenchon", "Macron", "Zemmour", "Le Pen", "Fabien Roussel", "Anne Hidalgo","Valérie Pécresse", "Poutine", "Biden","Trump", "Elexyr22", "FTNL",] 

    let res = Math.floor(Math.random() * replies.length);

    let loveEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${user} vote pour : **${replies[res]} !**`)
     	.setFooter(`Réalisé par un Algorithme sûr puissant ("1% de taux d'erreur")`)
   message.reply({embeds : [loveEmbed]});

}});