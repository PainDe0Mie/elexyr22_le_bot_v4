const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "4k",
    description: "|| Image en meuf en 4k ||",
    utilisation: "",
    alias: ["4k"],
    permission: "",
    category: "6) NSFW",
    cooldown: 10,

    async run(message) {

        var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! :underage:";
        if (!message.channel.nsfw) {
            return message.reply(errMessage)}
        
        const image = await nsfw.fourk();
        const embed = new Discord.MessageEmbed()
            .setTitle(`Image 4k:`)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
            .setImage(image);
            message.reply({embeds : [embed]})
    }});
