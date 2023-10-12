const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");
const ms = require("ms");

module.exports = new Command({
  name: "rappel",
  description: "Définir un rappel",
  utilisation: "",
  alias: ["rappel", "rmd", "reminder", "rp"],
  permission: "",
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    const db = bot.db;

    let time = args[0];
    if (!time) return message.reply("<:elexyr22:1067501213085597806> *Veuillez indiquer une durée...*, exemple: `e!rappel <durée> <raison>` <a:mmhh:1067175530509639791>");
    
    let parsedTime = ms(time);
    if (!parsedTime) return message.reply("<:elexyr22:1067501213085597806> *Le temps indiqué est invalide...*, exemple: `e!rappel <durée> <raison>` <a:non:1069328732554281080>");
    
    let reason = args.slice(1).join(" ");
    if(!reason) return message.reply("<:elexyr22:1067501213085597806> Merci de donné un raison, exemple: `e!rappel <durée> <raison>`")

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

      message.reply(`<:elexyr22:1067501213085597806> Rappel ajouté ! | <t:${timestampInSeconds}:R> <a:valide_or:1067501018906108024>`);
      //Code: \`\`${timestampInSeconds}\`\`
    });
  },
});
