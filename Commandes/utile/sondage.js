const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "sondage",
    description: "Sondage avec le bot",
    utilisation: "",
    alias: ["sondage"],
    permission: "MANAGE_MESSAGES",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        message.delete()
        let lien = args[0];
        if(!lien) return message.channel.send("*Veuillez fournir une question !*");
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setTitle(args.join(" "))
      .addField("=", `
     **Oui =** :white_check_mark:
     **Non =** :x:
      `)
      .setTimestamp()
    
      const sondage = await message.channel.send({embeds : [embed]});
      await sondage.react("✅");
      await sondage.react("❌");
    }
})