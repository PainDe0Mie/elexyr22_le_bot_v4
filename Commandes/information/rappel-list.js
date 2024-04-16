const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");
const ms = require("ms");

module.exports = new Command({
  name: "rappel-list",
  description: "Liste des rappels",
  utilisation: "",
  alias: ["rappel-list", "rmd-list", "reminder-list", "rp-list", "rmdlist"],
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
        return message.reply("*Vous n'avez aucun rappel enregistré...* ");
      }

      const rappels = results.map((row, index) => {
        const triggerTime = new Date(row.timer).toLocaleString();
        const timestampInSeconds = Math.floor(row.timer / 1000);
        const timeRemaining = `<t:${timestampInSeconds}:R>`;
        return `${index + 1} - \`\`${row.reason}\`\` | ${timeRemaining}`;
      });

      let embed = new Discord.MessageEmbed()
      .setColor("#ffe700")
      .setTitle("Liste des Rappels:")
      .setDescription(`${rappels.join(",\n\n")}`)
      .setTimestamp()
      .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({ dynamic: true }) : message.author.displayAvatarURL({ dynamic: true }));
      message.reply({embeds: [embed]})

      console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!rmd-list sûr '${message.guild.name}'`))

    })}})
