
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "snipe",
    description: "Permet de connaître le dernier message supprimé du salon",
    utilisation: "",
    alias: ["snipe"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

        let msg = await bot.snipe.get(message.channel.id)
        if(!msg) return message.reply("*Aucun message supprimé récemment...*")
        if(msg.author.bot) return message.reply("*Aucun message supprimé récemment...*")

        let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setDescription(msg.content)
        .setImage(msg.attachments?.first()?.proxyURL)
        .setTimestamp()
        await message.channel.send({embeds: [Embed]})
    }
})