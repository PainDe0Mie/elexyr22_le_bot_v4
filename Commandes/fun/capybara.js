const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "capybara",
    description: "Permet de voir à combien de % tu es un capybara",
    utilisation: "",
    alias: ["capybara", "capy"],
    permission: "",
    category: "4) Fun",
    cooldown: 5,
    async run(bot, message, args, db) {
        const block = "⬛";
        const heart = "<:capybara:1082368956771344404>";

      let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("Cet utilisateur n'existe pas...");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("Cet utilisateur n'existe pas...");

    let loveEmbed = new Discord.MessageEmbed()
        .setColor('#FF1493')
        .setDescription(`Niveau de **capybara** de __**${user} !**__`)
        .addField(`Capybara à :`, ship())
 		.setFooter(`Réalisé par un Algorithme sûr puissant ("1% de taux d'erreur")`)
   message.reply({embeds : [loveEmbed]})
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!capybara sûr '${message.guild.name}'`))

    function ship() {
        const hearts = Math.floor(Math.random() * 10) + 0; 
        const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}% !`;
        return str;
    }}})
