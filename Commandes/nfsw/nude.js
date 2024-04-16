const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "nude",
    description: "|| Image d'une meuf nue ||",
    utilisation: "",
    alias: ["nude"],
    permission: "",
    category: "6) NSFW",
    cooldown: 10,

    async run(message) {

        var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! :underage:";
        if (!message.channel.nsfw) {
            return message.reply(errMessage)}

            const image = await nsfw.ass();
            const embed = new Discord.MessageEmbed()
                .setTitle(`Voici une Nude Random:`)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
                .setImage(image);
                message.reply({embeds : [embed]})
    
    }});
