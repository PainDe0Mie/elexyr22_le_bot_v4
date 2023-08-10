const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "serveurinfo",
    description: "Permet d'avoir des informations sur le serveur",
    utilisation: "",
    alias: ["serveurinfo","serverinfo", "si"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        await message.guild.members.fetch();
        const members = message.guild.members.cache;
        const humanMembers = members.filter(member => !member.user.bot);
        const robotMembers = members.filter(member => member.user.bot);
    
        let Embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setTitle(`Informations sur le serveur :`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`:spy: Nom : ${message.guild.name} \n :id: ID : \`\`${message.guild.id}\`\`\n :tophat: Propriétaire : ${(await message.guild.fetchOwner())}  ${(await message.guild.fetchOwner().user)} \n\n :newspaper: Description :\n ${message.guild.description ? message.guild.description : "*Aucune description*"}\n\n :clock1: Date de création: \n <t:${Math.floor(message.guild.createdAt / 1000)}:F> \n\n  :mens: Membres : ${message.guild.memberCount}\n :robot: Robot : ${robotMembers.size} \n :adult: Humains : ${humanMembers.size} \n :newspaper: Salons : ${message.guild.channels.cache.size}\n :postbox: Rôle : ${message.guild.roles.cache.size}\n :sunny: Emojis : ${message.guild.emojis.cache.size} \n\n :notebook_with_decorative_cover:  Règlement : ${message.guild.rulesChannel ? message.guild.rulesChannel : "*Aucun salon de règlement*"}\n :zzz: AFK : ${message.guild.afkChannel ? message.guild.rulesChannel : "*Aucun salon d'AFK*"} \n🧠 Vanity : https://discord.gg/${message.guild.vanityURLCode ? message.guild.vanityURLCode : ''}`)
            .setImage(message.guild.bannerURL({ format: 'png', dynamic: true, size: 4096}))
            .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
        console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!serveurinfo sûr '${message.guild.name}'`))
    
        await message.reply({ embeds: [Embed] })
    }
    
})