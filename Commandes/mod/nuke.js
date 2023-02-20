const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "nuke",
  description: "Permet de dupliquer un salon et de supprimez l'ancien !",
  utilisation: "",
  alias: ["nuke"],
  permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
  category: "1) Modération",
  cooldown: 5,

  async run(bot, message, args, db) {
    if(!message.guild) return;

    message.channel.clone({reason: `Channel nuked`}).then(c => c.setPosition(bot.channels.position) && c.send(`__**Le Channel à été Nuke !**__`)).then(sent => sent.delete({timeout: 60}))

    message.channel.delete() 
  }
})