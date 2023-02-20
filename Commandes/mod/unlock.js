const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "unlock",
    description: "Permet de unlocker un salon",
    utilisation: "[channel] (reason)",
    alias: ["unlock"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
	let channel = message.channel
    
message.delete()
        if(channel.permissionOverwrites.cache.get(message.guild.roles.everyone.id)?.allow.toArray(false).includes("SEND_MESSAGES")) return message.reply("❌ Ce salon est déjà unlocké !").then(async mess => setTimeout(async () => {mess.delete()}, 5000))

        await channel.permissionOverwrites.edit(message.guild.roles.everyone.id, {
            SEND_MESSAGES: true
        })
		
        await message.reply(`Le salon à bien été **ré-Ouvert !**`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
    }
})