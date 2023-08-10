const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const chalk = require("chalk")                                                                                   

module.exports = new Command({

    name: "ban",
    description: "Permet de bannir définitivement un utilisateur",
    utilisation: "[membre] (raison)",
    alias: ["ban"],
    permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

       let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply(" Cet utilisateur n'existe pas... ");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply(" Cet utilisateur n'existe pas... ");

        let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");
        if(!reason) reason = "Aucune raison donnée";

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous bannir vous-même...*")
        if(user.id === "1088442920530620477") return message.reply(" Je peux pas ban mon **maître**... <a:sad:1082769321413070949>") //elexyr bg
         //if(user.id === "1027614030426284043") return message.reply(" Je peux pas ban mon **maître**... <a:sad:1082769321413070949>") //my dc bb
        if(user.id === message.guild.ownerId) return message.reply("*Vous ne pouvez pas bannir le owner du serveur...*")

        try {
            await user.send(` Vous êtes __banni__ du serveur dû serveur : \`\`${message.guild.name}\`\` pour :  __**${reason} !**__ `)
             await user.send("https://cdn.discordapp.com/attachments/767361889990344715/836393401573965854/Ban_22.gif")
        } catch (err) {} 

        const ID = await bot.function.createID("BAN")

         const row1 = new Discord.MessageActionRow().addComponents(
         new MessageButton()
        .setStyle("DANGER")
        .setLabel(`Unban ${user.tag}`)
        .setCustomId("unban")
        .setEmoji("🛑"))

        await message.reply({content: ` ${user} a été __banni__ pour \`\`${reason}\`\` ! `, components: [row1]}).then(async msg => {

            await message.guild.bans.create(user.id, {reason: `${reason} par ${message.author.username}`}).catch(console.error);

            if(reason.includes("'")) reason = reason.replace(/'/g, "\\'")

            let sql = `INSERT INTO bans (userID, authorID, banID, guildID, reason, date, time) VALUES (${user.id}, '${message.user === undefined ? message.author.id : message.user.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}', 'Définitif')`
            db.query(sql, function(err) {
                if(err) throw err;
            })
            
                 db.query(`SELECT * FROM dev WHERE guildID = ${message.guild.id}`, async (err, req) => {

                    if(req.length < 1) {
            
                    let sql = `INSERT INTO dev (guildID, userID) VALUES (${message.guild.id}, '0')`
                    db.query(sql, function(err) {
                        if(err) throw err;
                    })
            } else {

                db.query(`UPDATE dev SET userID = '${user.id}' WHERE guildID = ${message.guild.id}`)
                
            if(message.guild.id !== "1040701512298541106") return;
            const salon = bot.channels.cache.get("1084195196583018536")
            salon.send(`${message.author.tag} à utilisé la commande: **e!ban ${user} ${reason}.**`) 

            }})})}})
