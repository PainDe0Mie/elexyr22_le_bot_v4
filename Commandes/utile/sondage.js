const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")        

module.exports = new Command({

    name: "sondage",
    description: "Sondage avec le bot",
    utilisation: "",
    alias: ["sondage", "son", "sondages", "sdg"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        let lien = args[0];
        if(!lien) return message.reply("Veuillez fournir une question ! Exemple `e!sdg <question>` \n\n Exemple : `e!sdg <votre question>` *(A la suite*)");
      const embed = new Discord.MessageEmbed()
      .setAuthor(`Par : ${message.author.username}`, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setTitle(args.join(" "))
      .addField("=", `
     **Oui =** <a:valide_or:1067501018906108024> 
     **Non =** <a:nop1:1068106487358038126>
      `)
      .setTimestamp()
            message.delete()
      const sondage = await message.channel.send({embeds : [embed]});
      await sondage.react("<a:valide_or:1067501018906108024>");
      await sondage.react("<a:nop1:1068106487358038126>");
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!sondage sûr '${message.guild.name}'`))
    }
})