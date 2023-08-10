const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
  name: "leaderboard",
  description: "Permet de connaître les 10 utilisateurs avec le plus de niveaux",
  utilisation: "",
  alias: ["leaderboard", "ranking", "top"],
  permission: "Aucune",
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
      
    const db = bot.db;
    db.query(`SELECT userID, level FROM user ORDER BY level DESC LIMIT 10`,
      async (err, results) => {
        if (err) throw err;

        const embed = new Discord.MessageEmbed()
          .setColor(bot.color)
          .setTitle("Top 10 | LEVEL :");

        for (let i = 0; i < results.length; i++) {
          const user = await bot.users.fetch(results[i].userID);
          embed.addField(
            `Rang ${i + 1}: ${user.username}`,
            `Niveau: \`\`${results[i].level}\`\``
          );
        }

        const row = new Discord.MessageActionRow().addComponents(
          new Discord.MessageButton()
            .setCustomId("level")
            .setLabel("Top Level")
            .setEmoji("<a:wiggle:1068881030582390854>")
            .setStyle("PRIMARY"),
          new Discord.MessageButton()
            .setCustomId("vocal")
            .setLabel("Top Vocal")
            .setEmoji("<a:micro1:1066771100337455104>")
            .setStyle("PRIMARY"),
         new Discord.MessageButton()
            .setCustomId("bump")
            .setLabel("Top Bump")
            .setEmoji("<a:coeur1:1066770964370702406>")
            .setStyle("PRIMARY"),
        new Discord.MessageButton()
            .setCustomId("event")
            .setLabel("Top Event")
            .setEmoji("<a:minecraft1:1066771063054278696>")
            .setStyle("PRIMARY"),);
	message.reply({ embeds: [embed], components: [row] });
      }
    );
  },
});
