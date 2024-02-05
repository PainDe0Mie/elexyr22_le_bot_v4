const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand");

module.exports = new Event("ready", async (bot) => {
  const db = bot.db;
  await SlashCommand(bot);

  let statuses = [
    "discord.gg/Elexyr22",
    `${bot.guilds.cache.size} serveurs ! 🚀`, 
    "Amour, foi, espérance, grâce, paix ✞"
  ];

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "STREAMING",
      url: "https://www.twitch.tv/elexyr22_",
    });
  }, 5000);

  console.log(
    `${bot.user.username} (${bot.user.id}) : En ligne sur ${bot.guilds.cache.size} serveur(s) !`
  );

  // Vérifiez les rappels toutes les secondes
  setInterval(async () => {
    const currentTime = Date.now();

    db.query(`SELECT * FROM rmd`, async (err, req) => {
      if (err) {
        console.error("Erreur lors de la récupération des rappels depuis la base de données :", err);
        return;
      }

      for (const row of req) {
        const timestamp = parseInt(row.timer);

        if (!isNaN(timestamp) && currentTime >= timestamp) {
          // Le timer est terminé, envoyez un message privé à l'utilisateur
          try {
            const user = await bot.users.fetch(row.userID);

            if (user) {
              await user.send(`<a:10:1077280299798495262> | Rappel: **${row.reason}**`);
            }

            // Supprimez l'entrée correspondante de la table "rmd" en fonction de la raison
            db.query(`DELETE FROM rmd WHERE userID = '${row.userID}' AND reason = '${row.reason}'`, (deleteErr) => {
              if (deleteErr) {
                console.error("Erreur lors de la suppression de l'entrée :", deleteErr);
              }
            });
          } catch (fetchErr) {
            console.error("Erreur lors de la récupération de l'utilisateur :", fetchErr);
          }
        }
      }
    });
  }, 1000);
});
