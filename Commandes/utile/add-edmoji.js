const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({
  name: "add-emoji",
  description: "Ajoute un emoji à ton serveur.",
  utilisation: "<nom de l'emoji> <lien de l'image>",
  alias: ["emoji", "add-emoji"],
  permission: Discord.Permissions.FLAGS.MANAGE_GUILD, 
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    // Vérifie si l'utilisateur a fourni le nom de l'emoji et le lien de l'image
    if (args.length !== 2) {
      return message.reply("Utilisation incorrecte. **Exemple:** `e!add-emoji emoji_nom https://lien_de_l_image`");
    }

    const [emojiName, emojiURL] = args;

    try {
      // Ajoute l'emoji au serveur
      const emoji = await message.guild.emojis.create(emojiURL, emojiName);
      message.reply(` **L'Emoji** ${emoji} à bien été __ajouté !__`);
    } catch (error) {
      console.error(error);
      message.reply("*Yo mec, y'a eu un bug quand j'ai tenté d'ajouter l'emoji. Ça partait en vrille, tu vois ?*");
    }
  }
});
