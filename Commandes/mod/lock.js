const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "lock",
    description: "Permet de locker un salon",
    utilisation: "[channel] (reason)",
    alias: ["lock"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 0,

    async run(bot, message, args, db) {
	 let channel = message.channel

     message.delete()
        if(channel.permissionOverwrites.cache.get(message.guild.roles.everyone.id)?.deny.toArray(false).includes("SEND_MESSAGES")) return message.reply("*Ce salon est déjà locke...*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))

        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
            SEND_MESSAGES: false
        })

        
        await message.reply(`<:Elexyr22:754441336849170543> Le salon à bien été **Fermé !** <a:Valide_Or:756978408159707136>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

    }
})