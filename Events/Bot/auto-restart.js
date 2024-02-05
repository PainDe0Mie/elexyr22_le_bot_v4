const Discord = require("discord.js");
const Event = require("../../Structure/Event");


module.exports = new Event("messageCreate", async (bot, message) => {
    
    const db = bot.db

  db.query(`SELECT * FROM serveur WHERE guildID = ${message.guildId}`, async (err, req) => {
    if (err) {
      console.error(err);
      process.exit(0);
       const channel = bot.channels.cache.get("1107619027452428288")  
       channel.send("La base de données à crach, j'ai bien restart")
      return;
    }
    if (req.length < 1) {
    }
  });

});
