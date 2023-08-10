const Discord = require("discord.js");
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const Command = require("../../Structure/Command");

module.exports = new Command({
  name: "imagine",
  description: "Permet d'utilisé l'API de Midjourney",
  utilisation: "",
  alias: ["imagine", "midjourney", "ima"],
  permission: "",
  category: "4) Fun",
  cooldown: 5,
  
  async run(bot, message, args) {
    message.channel.sendTyping(); // Ajout du message de chargement

    const prompt = args.join(' ');

    if (!prompt) {
      return message.reply('Veuillez fournir une suggestion !');
    }

    const { default: midjourney } = await import('midjourney-client');

    midjourney(prompt).then(response => {
      if (response.length < 1) {
        return message.reply('Impossible de générer des images.');
      }

      const imageURLs = response.join('\n');

      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setLabel('Télécharger')
          .setStyle('LINK')
          .setURL(imageURLs)
      );

      const embed = new MessageEmbed()
      .setColor('#000fff')
        .setTitle('By Midjourney :')
        .setDescription(`Votre question : \`\`${prompt}\`\` `)
        .setImage(imageURLs)
        .setTimestamp()
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))

      message.reply({ embeds: [embed], components: [row] });
    });
  }
});
