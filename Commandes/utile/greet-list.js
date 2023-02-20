const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "greet-list",
    description: "Liste des salons ou le greet est activé !",
    utilisation: "",
    alias: ["list-greet", "greet-list"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args) {
        const { QuickDB } = require('quick.db');
        const db = new QuickDB();

        //get mentionned user or id provided
        const greet = db.table(`greet`);
        let fetched = await greet.get(message.guild.id);

        if(!fetched) return message.reply("Aucun salon on un Greet !");
        if(fetched == undefined) return message.reply("Aucun salon on un Greet !");
        if(fetched.length == 0) return message.reply("Aucun salon on un Greet !");

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Salons des greet :")
        .setDescription(fetched.map(channel => `<#${channel}>`).join("\n"))
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))

        message.reply({
            embeds: [embed]
        })


    }
})