const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
  name: "",
  description: "",
  utilisation: "",
  alias: ["maman"],
  permission: "", 
  category: "", 
  cooldown: 5,

  async run(bot, message, args) {
      
      if(message.author.id !== "1088442920530620477") return message.delete() //good id elexyr22 | 02/2024

    // Vérifie si un lien d'image est fourni en argument
    if (!args[0]) {
return message.channel.send("Veuillez fournir un lien d'image.");
    }


    if (!args[0].startsWith("http")) {
      return message.channel.send("Veuillez fournir un lien d'image valide.");
    }

    try {
      await bot.user.setAvatar(args[0]);
      message.reply("L'avatar du bot a été changé avec succès !");
    } catch (error) {
      console.error(error);
      message.reply("Une erreur s'est produite lors du changement de l'avatar du bot.");
    }
  }
});
