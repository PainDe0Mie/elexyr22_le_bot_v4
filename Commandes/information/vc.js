const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "vc",
    description: "Nombre de personne en Vocal",
    utilisation: "",
    alias: ["vc"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        message.reply(`🎙️ | Membre en vocal: **${message.guild.members.cache.filter(m => m.voice.channel).size}** (**${message.guild.memberCount} membres**)`)
    }
})