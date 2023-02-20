const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "discord-gg-elexyr22",
    description: "serveur support",
    utilisation: "",
    alias: ["discord", "dis", "d"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {

        const row1 = new Discord.MessageActionRow().addComponents(
        new MessageButton()
        .setURL("https://discord.com/invite/Elexyr22")
        .setLabel('Discord Support')
        .setEmoji("🤖")
        .setStyle('LINK'),
)

      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("Serveur Support !")
      .setDescription("Merci à toi ! <a:ECoeur1:754441320759820288>")
      message.reply({embeds: [embed], components: [row1]})
    }
})