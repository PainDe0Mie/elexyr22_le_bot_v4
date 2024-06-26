const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const chalk = require("chalk")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["unwl", "un-wl"],
    permission: "",
    category: "",
    cooldown: 1,

    async run(bot, message, args, db) {
        
         if(message.author.id !== "1088442920530620477") return

      let user;
      if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
          user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
          if(!user) return message.reply("*Aucune personne trouvée...*")
      } else user = message.user ? message.user : message.author;
       if(user == undefined) return message.reply("*Veuillez mentionner un utilisateur ou fournir un ID valide...*");

       db.query(`SELECT * FROM wl WHERE userID = ${user.id}`, async (err, req) => {
        if(req.length < 1) return(`${user.username} est déjà retiré de la **Whitelist !**`);

        db.query(`DELETE FROM wl WHERE userID = ${user.id}`, (err, result) => {
          if (err) throw err;
        });

           return message.reply(`${user.username} a bien été retiré de la **Whitelist !**`);
})}})
