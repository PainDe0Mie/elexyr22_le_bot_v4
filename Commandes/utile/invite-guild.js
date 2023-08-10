const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk");

module.exports = new Command({

    name: "invite-guild",
    description: "Lien d'invite du serveur",
    utilisation: "",
    alias: ["invite-guild", "invites",],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
        const serv = message.guild.name
        const member = message.author
    
        let invite = await message.channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(console.error);
     	message.reply(`Invite de __**${serv} :**__ \n\n ${invite}`).catch(console.error);
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!invites sûr '${message.guild.name}'`))
    }
})