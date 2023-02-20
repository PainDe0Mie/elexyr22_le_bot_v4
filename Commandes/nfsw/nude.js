const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const fs = require("fs");
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "nude",
    description: "|| Image d'une meuf nue ||",
    utilisation: "",
    alias: ["nude",],
    permission: "",
    category: "6) NSFW",
    cooldown: 15,

    async run(bot, message, args, db) {

        var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! <:18:767648849035526165>";
        if (!message.channel.nsfw) {
            return message.reply(errMessage)}

            const image = await nsfw.ass();
            const embed = new Discord.MessageEmbed()
                .setTitle(`Voici une Nude Random =`)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
                .setImage(image);
            message.channel.send({embeds : [embed]})
    
    }
        
    });