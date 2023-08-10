const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["cen", "censure"],
    permission: "",
    category: "",
    cooldown: 1,

    async run(bot, message, args) {
        
      const db = bot.db;
      const user = message.author
  
      db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {
    if(req.length < 1) return message.reply(" Uniquement les **Admins** peut utilisé cette commande !") 
  
    if(req[0].statut === "OFF") return message.reply(" Uniquement les **Admins** peut utilisé cette commande !") 
    if(req[0].statut === "ACTIF") {

         let user;
         if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
             user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
             if(!user) return message.reply(" Cet utilisateur n'existe pas...");
         } else {
             user = message.user ? message.user : message.author;
         }
         if(!user) return message.reply(" Cet utilisateur n'existe pas...");

       db.query(`SELECT * FROM cenure WHERE userID = ${user.id}`, async (err, req) => {
        if(req.length < 1) {
            
     let sql = `INSERT INTO cenure (userID, statut)VALUES ('${user.id}', 'ACTIF')`
            db.query(sql, function(err) {
                if(err) throw err;
            })

           return message.reply(` ${user.username} a bien été **censuré !**`);

          } else {

            return message.reply(` ${user.username} est déjà **censuré !**`);

          }})}})}})
