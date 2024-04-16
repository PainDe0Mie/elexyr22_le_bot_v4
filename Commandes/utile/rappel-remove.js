const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");
const ms = require("ms");

module.exports = new Command({
  name: "unrappel",
  description: "Supprimer un rappel par raison",
  utilisation: "",
  alias: ["unrappel", "unrmd", "rappel-remove", "rmd-remove"],
  permission: "",
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    const db = bot.db;

    const reasonToFind = args.join(" ");
    if (!reasonToFind) {
      return message.reply(" Veuillez indiquer la raison pour supprimer le rmd !");
    } else {
      // Supprimer le rappel par raison
      let deleteSql = `DELETE FROM rmd WHERE userID='${message.author.id}' AND reason='${reasonToFind}'`;
      db.query(deleteSql, function (err, results) {
        if (err) {
          console.error(err);
          return message.reply("*Une erreur s'est produite lors de la suppression du rappel...*");
        }

        if (results.affectedRows === 0) {
          return message.reply("*Aucun rappel trouvé avec la raison spécifiée...*");
        }

        message.reply(" Le **RMD** à été __supprimé avec succès !__ ");
      });
    }
  },
});
