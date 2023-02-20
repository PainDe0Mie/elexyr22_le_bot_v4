const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "leck",
    description: "Permet de caché un salon",
    utilisation: "[channel] (reason)",
    alias: ["leck"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 1,

    async run(bot, message, args, db) {
	          let channel = message.guild.channels.cache.get(args) || message.mentions.channels.first()
        //let channel = message.channel
          if(!channel) return message.reply(`*Merci de me donner un salon qui existe...*`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

     message.delete()
        if(channel.permissionOverwrites.cache.get(message.guild.roles.everyone.id)?.deny.toArray(false).includes("VIEW_CHANNEL")) return message.reply("*Ce salon est déjà locke...*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))

        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
            VIEW_CHANNEL: false
        })

        
        await message.reply(`<:Elexyr22:754441336849170543> Le salon à bien été **Fermé !** <a:Valide_Or:756978408159707136>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

    }
})