const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "seins",
    description: "|| Image d'un seins ||",
    utilisation: "",
    alias: ["seins"],
    permission: "",
    category: "6) NSFW",
    cooldown: 10,

    async run(message) {

        var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! :underage:";
        if (!message.channel.nsfw) {
            return message.reply(errMessage)}

            const image = await nsfw.boobs();
            const embed = new Discord.MessageEmbed()
                .setTitle(`Image de seins: `)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
                .setImage(image);
                message.reply({embeds : [embed]})
    }});
