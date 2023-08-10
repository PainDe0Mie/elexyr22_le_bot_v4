const Discord = require("discord.js")
const ms = require("ms")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "mute",
    description: "Permet de rendre temporairement muet un utilisateur",
    utilisation: "[membre] (raison)",
    alias: ["mute", "tempmute"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

 let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
           if(!user) return message.reply("`e!mute <mention / id> <durée> <raison>`, *durée : 1h = 1 heures, 1d = 1 jours, c'est en anglais*")
       } else user = message.user ? message.user : message.author;
        if(user == undefined) return message.reply("*Veuillez mentionner un utilisateur ou fournir un ID valide...*");
        
         if(user.id === "1088442920530620477") return message.reply("<:elexyr22:1067501213085597806> Je peux pas mute mon **maître**... <a:sad:1082769321413070949>") //elexyr bg

        let time = message.user ? args._hoistedOptions[1].value : args[1]
        if(!time) return message.reply("`e!mute <mention / id> <durée> <raison>`, *durée : 1h = 1 heures, 1d = 1 jours, c'est en anglais*")
        if(!parseInt(ms(time))) return message.reply("`e!mute <mention / id> <durée> <raison>`, *durée : 1h = 1 heures, 1d = 1 jours, c'est en anglais*")
        if(ms(time) > 2419200000) return message.reply("`e!mute <mention / id> <durée> <raison>`, *durée : 1h = 1 heures, 1d = 1 jours, c'est en anglais / le temps ne doit pas être supérieur à 28 jours...*")

        let reason = message.user ? (args._hoistedOptions.length > 2 ? args._hoistedOptions[2].value : undefined) : args.slice(2).join(" ");
        if(!reason) reason = "Aucune raison donnée";

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous rendre muet vous-même...*")
        if(user.id === message.guild.ownerId) return message.reply("*Vous ne pouvez pas rendre muet cette personne...*")
       // if(message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(user.id).roles.highest) <= 0) return message.reply("❌ Vous ne pouvez pas rendre muet cette personne !")
        //if(message.guild.members.cache.get(user.id).isCommunicationDisabled()) return message.reply("*Cette personne est déjà muette...*")

        try {
            await user.send(`<:elexyr22:1067501213085597806> Vous êtes __mute__ du serveur dû serveur : \`\`${message.guild.name}\`\` pendant : __${time}__ pour :  __**${reason}**__ <a:mute1:1071799900246913134>`)
            await user.send("https://cdn.discordapp.com/attachments/767361889990344715/836396049618042930/Mute_22.gif")
        } catch (err) {}

        const ID = await bot.function.createID("MUTE")

        let sql = `INSERT INTO mutes (userID, authorID, muteID, guildID, reason, date, time) VALUES (${user.id}, '${message.user === undefined ? message.author.id : message.user.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}', '${time}')`
        db.query(sql, function(err) {
            if(err) throw err;
        })

        await message.guild.members.cache.get(user.id).timeout(ms(time), reason)

        await message.reply({content: `<:elexyr22:1067501213085597806> ${user} a été __mute__ pour \`\`${reason}\`\` <a:mute1:1071799900246913134>`})
        
            console.log(chalk.yellow(`[CMD] "${message.author.tag}"" à utilisé la commande: e!mute ${user} pendant ${time} pour ${reason} sûr '${message.guild.name}'`))
            if(message.guild.id !== "1040701512298541106") return;
            const salon = bot.channels.cache.get("1084195196583018536")
            salon.send(` ${message.author.tag} à utilisé la commande **e!mute ${user} pendant ${time} pour ${reason}.** `) 
    }
})