const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "clear",
    description: "Permet de supprimer un nombre de messages",
    utilisation: "[nombre de messages]",
    alias: ["clear", "delete"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

        try {

            let number = args[0] || args._hoistedOptions[0].value
            if(isNaN(number)) return message.reply("Veuillez indiquer un nombre entre `0` et `100` !").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            if(parseInt(number) <= 0 || parseInt(number) > 100) return message.reply("Veuillez indiquer un nombre entre `0` et `100` !").then(async mess => setTimeout(async () => {mess.delete()}, 5000))

            message.channel.bulkDelete(number).catch(async err => {
                console.log(err)
                if(err) return message.reply("*Je peux pas supprimé, les messages datent de plus de 14 jours...* **[Loi Discord]**")

            }).then(async msg => {

                try {
                    await message.reply(`<:Elexyr22:754441336849170543> J'ai bien supprimé \`${msg.size}\` messages ! <a:Covid:754441324953993448>`)
                } catch (err) {
                    await message.channel.send(`<:Elexyr22:754441336849170543> J'ai bien supprimé \`${msg.size}\` messages ! <a:Covid:754441324953993448>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                try {await message.delete()} catch (err) {}
                }
            })

        } catch (err) {

            return message.reply("Veuillez indiquer un nombre entre `0` et `100` !").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            
            
        }
    }
})