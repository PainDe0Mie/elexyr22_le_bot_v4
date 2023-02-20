const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "kick",
    description: "Permet d'expulser un utilisateur",
    utilisation: "[membre] (raison)",
    alias: ["kick"],
    permission: "KICK_MEMBERS",
    category: "1) Modération",
    cooldown: 0,

    async run(bot, message, args, db) {

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
        if(!user) message.reply("Aucune personne trouvée !")

        let reason = message.user === undefined ? args.slice(1).join(" ") : args._hoistedOptions[1].value;
        if(!reason) reason = "Aucune raison donnée";

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous kick vous-même...*")
        if(user.id === message.guild.ownerId) return message.reply("*Vous ne pouvez pas kick le owner du serveur...*")
        // if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("*Vous ne pouvez pas kick cette personne...*")

        const ID = await bot.function.createID("KICK")

        try {
            await user.send(`<:Elexyr22:754441336849170543> Vous avez été __kick,__ du serveur \`\`${message.guild.name}\`\` pour la raison: **${reason} !** <a:Gun1:768183639544299580>`)
        } catch (err) {}

        await message.reply(`<:Elexyr22:754441336849170543> ${user} a été __kick__, pour : **${reason}** ! <a:Gun1:768183639544299580>`)

        await message.guild.members.cache.get(user.id).kick(`${reason} (kick par ${message.user === undefined ? message.author.tag : message.user.tag})`)

        if(reason.includes("'")) reason = reason.replace(/'/g, "\\'")

        let sql = `INSERT INTO kicks (userID, authorID, kickID, guildID, reason, date) VALUES(${user.id}, '${message.user === undefined ? message.author.id : message.user.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}')`
        db.query(sql, function(err) {
            if(err) throw err;
        })
    }
})