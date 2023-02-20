const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const fs = require("fs");
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "sodomie",
    description: "|| Fait sodomie à une personne ||",
    utilisation: "",
    alias: ["sodomie",],
    permission: "",
    category: "6) NSFW",
    cooldown: 15,

    async run(bot, message, args, db) {

        var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! <:18:767648849035526165>";
        if (!message.channel.nsfw) {
            return message.reply(errMessage)}

            user = message.mentions.members.first()
            if(!user) return message.channel.send("Veuillez mentionner un **Membre** *(ID marche pas)* !");
            if(user.id == "624117399557373962") return message.channel.send("Tu peux pas le faire à Clemax bb !")
            const image = await nsfw.anal();
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} fait une sodomie à ${user.user.username} !`)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
                .setImage(image);
            message.channel.send({embeds : [embed]})
    
    }
        
    });