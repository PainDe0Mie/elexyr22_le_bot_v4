const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "embed",
    description: "Fait un embed avec le bot",
    utilisation: "",
    alias: ["embed"],
    permission: "MANAGE_MESSAGES",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
     /* if (!message.guild.member(bot.user).setPermissions([Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.MANAGE_CHANNELS])) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer l\'*embed* le salon ! <a:Victime:754441345623654514>")*/
      let str = args.join(" ");
      if(!str) return message.channel.send("Veuillez fournir du contenu. Exemple : `e!embed <message>`");
      const embed = new Discord.MessageEmbed()
      .setDescription(`${str}`)
        .setColor('BLUE')
           message.channel.send({embeds : [embed]})
        message.delete()
    
    }
})