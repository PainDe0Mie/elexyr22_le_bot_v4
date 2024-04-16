const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({
  name: "remove-emoji",
  description: "Supprime un emoji de ton serveur.",
  utilisation: "",
  alias: ["remove-emoji", "delete-emoji", "remoji"],
  permission: Discord.Permissions.FLAGS.MANAGE_GUILD, 
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    // Vérifie si l'utilisateur a fourni le nom de l'emoji
    if (args.length !== 1) {
      return message.reply("Utilisation incorrecte. **Exemple : `e!remove-emoji emoji_nom`");
    }

    const [emojiName] = args;

    try {
      // Récupère l'emoji du serveur
      const emoji = message.guild.emojis.cache.find(emoji => emoji.name === emojiName);
      if (!emoji) {
        return message.reply("*Cet emoji n'existe pas sur ce serveur...*");
      }

      // Supprime l'emoji
      await emoji.delete();
      message.reply(`**L'Emoji** ${emoji.name} a été __supprimé !__`);
    } catch (error) {
      console.error(error);
      message.reply("*Yo mec, y'a eu un bug quand j'ai tenté de supprimer l'emoji. Ça partait en vrille, tu vois ?*");
    }
  }
});
