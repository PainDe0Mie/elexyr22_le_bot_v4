const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "warn",
    description: "Permet d'avertir un utilisateur",
    utilisation: "",
    alias: ["warn", "warning"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

  			let user;
            if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
                user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
                if(!user) return message.reply("Aucune personne trouvée !")
            } else user = message.user ? message.user : message.author;


         let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");
        if(!reason) reason = "Aucune raison donnée";

        if(message.user === undefined ? (user.id === message.author.id) : (user.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous warn vous-même...*")
        
        message.delete()

        await message.channel.send(`<:Elexyr22:754441336849170543> ${user} a été __warn__ pour \`\`${reason}\`\` ! <a:Alerte1:754441316905123994>`)
        try {
            message.delete()
            await user.send(`<:Elexyr22:754441336849170543> Vous avez été __warn__ sûr \`\`${message.guild.name}\`\` pour **"${reason}" !** <a:Alerte1:754441316905123994>`)
        } catch (err) {}
        
}})