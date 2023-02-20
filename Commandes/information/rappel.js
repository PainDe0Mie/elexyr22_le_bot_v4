const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const ms = require('ms')

module.exports = new Command({

    name: "rappel",
    description: "Programme un rappel auto ",
    utilisation: "",
    alias: ["rappel", "rmd", "r"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        const member = message.author

        // Variables
        let reason = args.slice(1).join(" ")
        let time = args[0];
    
            // Input Checking
            const tempMuteFormatErr = new Discord.MessageEmbed()
              .setDescription('Error! Vous devez indiquer une durée pour votre rappel !.  \`[e!rappel [Durée] [Raison]\`')
              .setColor('RED')
            if (!time) return message.reply({embeds : [tempMuteFormatErr]})
    
            const noReasonInput = new Discord.MessageEmbed()
              .setDescription('Error! Veuillez indiquer votre raison de rappel ! \`[e!rappel [Durée] [Raison]\`')
              .setColor('RED')
            if (!reason) return message.reply({embeds : [noReasonInput]})
    
            // Executing
            const muteEmbedServer = new Discord.MessageEmbed()
          message.reply(`**Je vais vous __rappelez__ de : \`${reason}\`, dans : \`${time}\` !**`)  
            setTimeout(async function () {
              
              member.send(`**Voici votre rappel: \`${reason}\` !** `).catch(err => console.log(err))
    
            }, ms(time));
    }
})