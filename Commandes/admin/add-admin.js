const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["up1"],
    permission: "",
    category: "",
    cooldown: 10,

    async run(bot, message, args, db) {
        
         if(message.author.id !== "1088442920530620477") return message.delete()

      let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply(" Cet utilisateur n'existe pas... ");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply(" Cet utilisateur n'existe pas... ");

       db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {
        if(req.length < 1) {
            
     let sql = `INSERT INTO admin (userID, username, statut)VALUES ('${user.id}', '${user.username}', 'ACTIF')`
            db.query(sql, function(err) {
                if(err) throw err;
            })

           return message.reply(` ${user.username} a bien été ajouté au **Admin !** `);

          } else {

            return message.reply(` ${user.username} est déjà ajouté au **Admin !** `);
}})}})
