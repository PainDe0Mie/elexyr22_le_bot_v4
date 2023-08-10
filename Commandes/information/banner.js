const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "banner",
    description: "Donne la Bannière d'une personne",
    utilisation: "",
    alias: ["banner"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

      let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");


    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`Bannière de : ${user.tag}`)
    .setImage(await (await bot.users.fetch(user.id, {force: true})).bannerURL({dynamic: true, size: 4096}))
    .setTimestamp()
 .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
    message.reply({embeds : [embed]})
    console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!banner sûr '${message.guild.name}'`))
}}
)