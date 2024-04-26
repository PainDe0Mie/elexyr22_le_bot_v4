const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("ready", async (bot) => {
  const db = bot.db;

    db.query(`SELECT * FROM rmd`, async (err, req) => {
      if (err) {
        console.error(err);
        process.exit(0);
        return;
      }
    });
  }, 10000);
