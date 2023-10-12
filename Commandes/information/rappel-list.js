const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");
const ms = require("ms");

module.exports = new Command({
  name: "rappel-list",
  description: "Liste des rappels",
  utilisation: "",
  alias: ["rappel-list", "rmd-list", "reminder-list", "rp-list"],
  permission: "",
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    const db = bot.db;

    let sql = `SELECT * FROM rmd WHERE userID = '${message.author.id}'`;
    db.query(sql, function (err, results) {
      if (err) {
        console.error("Erreur lors de la récupération des rappels :", err);
        return message.reply("*Une erreur s'est produite lors de la récupération des rappels...*");
      }

      if (results.length === 0) {
        return message.reply("<:elexyr22:1067501213085597806> *Vous n'avez aucun rappel enregistré...* <a:nop1:1068106487358038126>");
      }

      const rappels = results.map((row, index) => {
        const triggerTime = new Date(row.timer).toLocaleString();
        const timestampInSeconds = Math.floor(row.timer / 1000);
        const timeRemaining = `<t:${timestampInSeconds}:R>`;
        return `${index + 1} - \`\`${row.reason}\`\` | ${timeRemaining}`;
      });

      message.reply(`<a:10:1077280299798495262> **Liste des rappels:**\n${rappels.join("\n")}`);
    });
  },
});
