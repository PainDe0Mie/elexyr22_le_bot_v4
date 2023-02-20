const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "serveurinfo",
    description: "Permet d'avoir des informations sur le serveur",
    utilisation: "",
    alias: ["serveurinfo","serverinfo", "si"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

        const members = message.guild.members.cache;

        let Embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle(`Informations sur le serveur :`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`:spy: Nom : ${message.guild.name} \n :id: ID : \`\`${message.guild.id}\`\`\n :tophat: Propriétaire : ${(await message.guild.fetchOwner())} \n\n :newspaper: Description :\n ${message.guild.description ? message.guild.description : "*Aucune*"}\n\n :clock1: Date de création: \n <t:${Math.floor(message.guild.createdAt / 1000)}:F> \n\n  :mens: Membres : ${message.guild.memberCount}\n :robot: Robot : ${members.filter(member => member.user.bot).size} \n :newspaper: Salons : ${message.guild.channels.cache.size}\n :postbox: Rôle : ${message.guild.roles.cache.size}\n :sunny: Emojis : ${message.guild.emojis.cache.size} \n\n :notebook_with_decorative_cover:  Règlement : ${message.guild.rulesChannel ? message.guild.rulesChannel : "*Aucun*"}\n :zzz: AFK : ${message.guild.afkChannel ? message.guild.rulesChannel : "*Aucun*"} \n🧠 Vanity : https://discord.gg/${message.guild.vanityURLCode ? message.guild.vanityURLCode: 'elexyr22'}`)
        .setImage(message.guild.bannerURL({ format: 'png', dynamic: true, size: 4096}))
        .setTimestamp()
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))

        await message.reply({ embeds: [Embed] })
    }
})