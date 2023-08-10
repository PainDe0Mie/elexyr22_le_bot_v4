const Discord = require("discord.js");
const Event = require("../../Structure/Event");


module.exports = new Event("messageCreate", async (bot, message) => {
    
    const db = bot.db

  db.query(`SELECT * FROM serveur WHERE guildID = ${message.guildId}`, async (err, req) => {
    if (err) {
      console.error(err);
      process.exit(0);
    }
    if (req.length < 1) {
    }
  });

});
