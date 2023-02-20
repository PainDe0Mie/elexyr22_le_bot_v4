const Discord = require("discord.js")
const Command = require("../../Structure/Command")

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
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
           if(!user) return message.reply("Aucune personne trouvée !")
       } else user = message.user ? message.user : message.author;
        if(user == undefined) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !");

        let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");
        if(!reason) reason = "Aucune raison donnée";

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous bannir vous-même...*")
        if(user.id === message.guild.ownerId) return message.reply("*Vous ne pouvez pas bannir le owner du serveur...*")

        try {
            await user.send(`<:Elexyr22:754441336849170543> Vous êtes __banni__ du serveur dû serveur : \`\`${message.guild.name}\`\` pour :  __**${reason} !**__ <a:EBan1:754441325579075734>`)
             await user.send("https://cdn.discordapp.com/attachments/767361889990344715/836393401573965854/Ban_22.gif")
        } catch (err) {}

        const btn = new Discord.MessageActionRow().addComponents(new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel(`Unban ${user.tag}`)
        .setCustomId("unban")
        .setEmoji("⚠️"))

        await message.reply({content: `<:Elexyr22:754441336849170543> ${user} a été __banni__ pour \`\`${reason}\`\` ! <a:EBan1:754441325579075734>`, components: [btn]}).then(async msg => {

            await message.guild.bans.create(user.id, {reason: `Ban pour : ${reason}, par : ${message.user === undefined ? message.author.tag : message.user.tag})`}).catch(console.error);

             const filter = async() => true;
            const collector = message.createMessageComponentCollector({filter}) 

            collector.on("collect", async button => {

                if(!button.member.permissions.has(new Discord.Permissions(Discord.Permissions.FLAGS.BAN_MEMBERS))) return button.reply({content: "Vous n'avez pas la permission requise pour cliquer sur ce bouton ! <a:Nop1:768183643020853298>", ephemeral: true})

                if(button.customId === "unban") {

                    await button.guild.members.unban(user.id)

                    await button.reply(`<:Elexyr22:754441336849170543> ${user} viens d'être unban du serveur ! <a:Ha_ha1:756978403625926806>`)

                    await collector.stop()
                }
            })
        })
    }
})

          /*  if(reason.includes("'")) reason = reason.replace(/'/g, "\\'")

            let sql = `INSERT INTO bans (userID, authorID, banID, guildID, reason, date, time) VALUES (${user.id}, '${message.user === undefined ? message.author.id : message.user.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}', 'Définitif')`
            db.query(sql, function(err) {
                if(err) throw err;
            }) */