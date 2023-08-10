const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "copy",
  description: "Permet de copié un salon !",
  utilisation: "",
  alias: ["copy"],
  permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args, db) {
        message.delete()
      
		let name = args.join(" ");
      if(!name) return message.channel.send("Merci de donner un nom au salon. Exemple : `e!copy <nom>`").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
        
      

    message.channel.clone({reason: `Channel Copy`}).then(c => c.setPosition(bot.channels.position) && c.setName(name) && c.send(`<:elexyr22:1067501213085597806> **Salon copié + renommée par ${name}** <a:valide_or:1067501018906108024>`)).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
     

  }
})