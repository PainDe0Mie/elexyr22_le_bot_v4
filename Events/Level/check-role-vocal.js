const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("ready", async (bot) => {
  const db = bot.db;
  /*const guild = bot.guilds.cache.get("942897714956472401");
  const role = guild.roles.cache.find((r) => r.name === "🔊・Vocal"); // Nom du rôle vocal

  // Vérifier si l'utilisateur a déjà le rôle vocal et ajouter les points en conséquence
  setInterval(async () => {
    guild.members.cache.forEach(async (member) => {
      if (member.roles.cache.has(role.id)) {
        const userId = member.user.id;
        db.query(`SELECT * FROM user WHERE userID = ${userId}`, async (err, req) => {
          if (req.length < 1) return;
          try {
            db.query(`UPDATE user SET voiceTime = ${parseInt(req[0].voiceTime) + 10} WHERE userID = ${userId}`);
          } catch (error) {
            console.error(error);
          }
        });
      }
    });
  }, 10000); */
});
