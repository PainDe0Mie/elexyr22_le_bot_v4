const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js')

module.exports = new Command({

    name: "bot-invite",
    description: "Invite un bot avec un Ping",
    utilisation: "",
    alias: ["bot-inv", "bot-invite", "bots", "b", "ii"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

      let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("Cet utilisateur n'existe pas...");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("Cet utilisateur n'existe pas...");
        
        if(!user.bot) return message.reply(`${user.username} n'est pas un bot, tu peux pas l'ajouté.`)

const row1 = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setURL(`https://discord.com/oauth2/authorize?client_id=${user.id}&permissions=2146958591&scope=bot%20applications.commands`)
    .setLabel('Invite du Bot All Perm')
    .setEmoji("👑")
    .setStyle('LINK'),

    new MessageButton()
    .setURL(`https://discord.com/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
    .setLabel('Invite du Bot Admin Perm')
    .setEmoji("🤖")
    .setStyle('LINK'),

    new MessageButton()
    .setURL(`https://discord.com/oauth2/authorize?client_id=${user.id}&permissions=0&scope=bot%20applications.commands`)
    .setLabel('Invite du Bot 0 Perm')
    .setEmoji("💀")
    .setStyle('LINK'),


);

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Lien d'invite de ${user} (${user.username}) =`)
        .setTimestamp()
        .setFooter(`Demandé par : ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        
  message.reply({ embeds: [embed], components : [row1]

  })}})