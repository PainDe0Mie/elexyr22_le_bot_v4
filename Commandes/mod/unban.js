const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "unban",
    description: "Permet de de-bannir un utilisateur",
    utilisation: "",
    alias: ["unban"],
    permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {


            let user = message.user ? args._hoistedOptions[0].value : args[0]
            if(!user) return message.reply("*Aucune personne trouvée !*")
        
            if((await message.guild.bans.fetch(message.user ? args._hoistedOptions[0].value : args[0])).size === 0) return message.reply("*Cette personne n'est pas ban...*")

            await message.reply(`<:Elexyr22:754441336849170543> ${(await bot.users.fetch(message.user ? args._hoistedOptions[0].value : args[0]))} a été __unban__ du serveur ! <a:Ha_ha1:756978403625926806>`)
            
            message.guild.members.unban(message.user ? args._hoistedOptions[0].value : args[0])
        }
    })
 