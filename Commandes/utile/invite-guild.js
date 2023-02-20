const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "invite-guild",
    description: "Lien d'invite du serveur",
    utilisation: "",
    alias: ["invite-guild", "invites",],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
        message.delete()
        const serv = message.guild.name
        const member = message.author
    
        let invite = await message.channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(console.error);
       member.send(`Invite de __**${serv} :**__ \n\n ${invite} !`).catch(console.error);
    }
})