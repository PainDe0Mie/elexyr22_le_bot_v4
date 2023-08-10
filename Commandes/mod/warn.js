const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "warn",
    description: "Permet d'avertir un utilisateur",
    utilisation: "",
    alias: ["warn", "warning"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
        
        let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("Cet utilisateur n'existe pas...");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("Cet utilisateur n'existe pas...");

        let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");
        if(!reason) reason = "Aucune raison donnée";

        if(user.id === "1088442920530620477") return message.reply("Je peux pas warn mon **maître**... ")
        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("Vous ne pouvez pas vous avertir vous-même !")
        if(user.id === message.guild.ownerId) return message.reply("Vous ne pouvez pas avertir cette personne !")
        //if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("Vous ne pouvez pas avertir cette personne !")

        const ID = await bot.function.createID("WARN")

        await message.channel.send(`${user} a été __warn__ pour \`\`${reason}\`\` !`)
        try {
            message.delete()
             await user.send(`Vous avez été __warn__ sûr \`\`${message.guild.name}\`\` par ${message.author} pour **"${reason}" !**`)
        } catch (err) {}
        
        let sql = `INSERT INTO warns (userID, authorID, warnID, guildID, reason, date) VALUES (${user.id}, '${message.user ? message.user.id : message.author.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}')`
        db.query(sql, function(err) {
            if(err) throw err;
        })
    }
})