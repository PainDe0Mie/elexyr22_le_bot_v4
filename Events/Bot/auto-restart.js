const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("ready", async (bot) => {

  const db = bot.db;
  const executeQuery = async () => {
    try {
      const result = await new Promise((resolve, reject) => {
        db.query("SELECT * FROM rmd", (err, req) => {
          if (err) {
            reject(err);
          } else {
            resolve(req);
          }
        });
      });

      console.log("Connexion à la base de données réussie");

    } catch (error) {
      console.error("Erreur lors de la connexion à la base de données :", error);
      process.exit(1); 
    }}
    
  await executeQuery();
  setInterval(executeQuery, 10000);
});
