const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "say",
    description: "Parle avec le bot",
    utilisation: "",
    alias: ["say"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
    message.delete()

    let str = args.join(" ");
    if(!str) return message.reply("Vous devez spécifier le message que je dois envoyer !").catch(console.error);

    message.channel.send(args.join(" "));
    }
})