const Discord = require("discord.js")
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "sodomie",
    description: "|| Fait sodomie à une personne ||",
    utilisation: "",
    alias: ["sodomie"],
    permission: "",
    category: "6) NSFW",
    cooldown: 10,

    async run(message) {

        var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! :underage:";
        if (!message.channel.nsfw) {
            return message.reply(errMessage)}

            let user;
            if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
                user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
                if(!user) return message.reply("Cet utilisateur n'existe pas...");
            } else {
                user = message.user ? message.user : message.author;
            }
            if(!user) return message.reply("Cet utilisateur n'existe pas...");

            const image = await nsfw.anal();
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} fait une sodomie à ${user.user.username} !`)
                .setColor('RANDOM')
                .setTimestamp()
                .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
                .setImage(image);
                message.reply({embeds : [embed]})
    }});
