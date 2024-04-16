const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");
const ms = require("ms");

module.exports = new Command({
  name: "rappel",
  description: "Définir un rappel",
  utilisation: "",
  alias: ["rappel", "rmd", "reminder", "rp", "rmd-add"],
  permission: "",
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    const db = bot.db;

    let time = args[0];
    if (!time) return message.reply(" *Veuillez indiquer une durée...*, exemple: `e!rappel <durée> <raison>` ");
    
    let parsedTime = ms(time);
    if (!parsedTime) return message.reply(" *Le temps indiqué est invalide...*, exemple: `e!rappel <durée> <raison>` ");
    
    let reason = args.slice(1).join(" ");
    if(!reason) return message.reply(" Merci de donné un raison, exemple: `e!rappel <durée> <raison>`")

    let triggerTime = Date.now() + parsedTime;

    // Insérer les informations du minuteur dans la table "timers"
    let sql = `INSERT INTO rmd (userID, timer, reason) VALUES ('${message.author.id}', '${triggerTime}', '${reason}')`;
    db.query(sql, function (err) {
      if (err) {
        console.error("Erreur lors de l'insertion du minuteur :", err);
        return message.reply("*Une erreur s'est produite lors de la définition du minuteur...*");
      }

      const timestampInMilliseconds = triggerTime
      const timestampInSeconds = Math.floor(timestampInMilliseconds / 1000); 

      message.reply(` Rappel ajouté ! | <t:${timestampInSeconds}:R> |\`\` <t:${timestampInSeconds}:R>\`\` `);
      //Code: \`\`${timestampInSeconds}\`\`
    });
  },
});
