const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "ping",
    description: "Permet de connaître la latence du bot",
    utilisation: "",
    alias: ["ping", "p"],
    permission: "",
    category: "3) Utile",
    cooldown: 1,

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

                

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`🏓 Mon ping est de : **${bot.ws.ping}ms !**`)
.setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
message.reply({embeds : [embed]})

        })}})