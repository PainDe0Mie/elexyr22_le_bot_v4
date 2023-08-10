const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {
    
    const db = bot.db
    if(interaction.isButton()) {
    if(interaction.customId === "level") {

          db.query(`SELECT userID, level FROM user ORDER BY level DESC LIMIT 10`,
            async (err, results) => {
              if (err) throw err;
      
              const embed1 = new Discord.MessageEmbed()
                .setColor(bot.color)
                .setTitle("Top 10 | LEVEL :");
                
              for (let i = 0; i < results.length; i++) {
                const user = await bot.users.fetch(results[i].userID);
                embed1.addField(
                  `Rang ${i + 1}: ${user.username}`,
                  `Niveau: \`\`${results[i].level}\`\``)}
                  interaction.update({ embeds: [embed1]});
            })}

if(interaction.customId === "vocal") {
  db.query(`SELECT userID, voiceTime FROM user ORDER BY voiceTime DESC LIMIT 10`,
  async (err, results) => {
    if (err) throw err;

    const embed1 = new Discord.MessageEmbed()
      .setColor(bot.color)
      .setTitle("Top 10 | VOCAL :");
    for (let i = 0; i < results.length; i++) {
      const user = await bot.users.fetch(results[i].userID);
      embed1.addField(
        `Rang ${i + 1}: ${user.username}`,
        `Niveau: \`\`${results[i].voiceTime}\`\``)}
        interaction.update({ embeds: [embed1]});
 })}

          if(interaction.customId === "bump") {
            db.query(`SELECT userID, bump FROM user ORDER BY bump DESC LIMIT 10`,
              async (err, results) => {
                if (err) throw err;
        
                const embed1 = new Discord.MessageEmbed()
                  .setColor(bot.color)
                  .setTitle("Top 10 | BUMP :");
                for (let i = 0; i < results.length; i++) {
                  const user = await bot.users.fetch(results[i].userID);
                  embed1.addField(
                    `Rang ${i + 1}: ${user.username}`,
                    `Niveau: \`\`${results[i].bump}\`\``)}
                    interaction.update({ embeds: [embed1]});
              })}

              if(interaction.customId === "event") {
                db.query(`SELECT userID, event FROM user ORDER BY event DESC LIMIT 10`,
                  async (err, results) => {
                    if (err) throw err;
            
                    const embed1 = new Discord.MessageEmbed()
                      .setColor(bot.color)
                      .setTitle("Top 10 | EVENT :");
                    for (let i = 0; i < results.length; i++) {
                      const user = await bot.users.fetch(results[i].userID);
                      embed1.addField(
                        `Rang ${i + 1}: ${user.username}`,
                        `Niveau: \`\`${results[i].event}\`\``)}
                      interaction.update({ embeds: [embed1]});
})}}})
