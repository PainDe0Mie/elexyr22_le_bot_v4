const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "rename",
    description: "Permet de renomée un salon",
    utilisation: "",
    alias: ["name", "rename"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {
        message.delete()
    
		let name = args.join(" ");
        message.channel.setName(name)
        message.channel.send(`Salon renommé par : \`\`${name}\`\``).then(async mess => setTimeout(async () => {mess.delete()}, 5000))


    }})