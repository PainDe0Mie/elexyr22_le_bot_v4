const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

  name: "",
  description: "",
  utilisation: "",
  alias: ["intent", "int"],
  permission: "",
  category: "",
  cooldown: 5,

  async run(bot, message, args, db) {
        message.delete()
      
		message.channel.send("https://cdn.discordapp.com/attachments/1032065555303235674/1061303627823722536/unknown.png")
     

  }
})