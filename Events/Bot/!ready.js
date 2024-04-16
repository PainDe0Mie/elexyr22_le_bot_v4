const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand");
const chalk = require("chalk");

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

  // bot.user.setStatus('invisible'); // Mettre le bot en invisible

  console.log(chalk.bgBlue(`${bot.user.username}: En ligne sur ${bot.guilds.cache.size} serveurs !`))

  // Obtenez le serveur souhaité
  let guild = bot.guilds.cache.get("ID");
  if (!guild) return console.error("Serveur introuvable.");

  // Obtenez le canal à partir du serveur
  let start = guild.channels.cache.get("ID");
  if (!start) return console.error("Canal introuvable dans le serveur.");

  let now = new Date();
  let Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Bot Restart:")
    .setDescription(`Le bot a été **start** le: "<t:${Math.floor(now.getTime() / 1000)}:F>"`)
    .setTimestamp();
  
  try {
    await start.send({embeds: [Embed]});
  } catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
  }

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
              await user.send(`Rappel: **${row.reason}**`);
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
