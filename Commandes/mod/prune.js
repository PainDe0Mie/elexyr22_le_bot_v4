const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "clear-user",
    description: "Permet de supprimer un nombre de messages d'un utilisateur",
    utilisation: "[membre] [nombre de messages]",
    alias: ["clear-user","prune","cu"],
    permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
    category: "1) Modération",
    cooldown: 5,

    async run(bot, message, args, db) {

       try {

            let user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
             if(!user) return message.reply("`e!cu <mention / id>").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            // if(!user) return message.reply("`e!prune <mention / id> <nombre de message>`, *max 100 messages*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))

            // let number = message.user ? args._hoistedOptions[1].value : args[1];
           let number = ["100"]
           /* if(!number) return message.reply("`e!prune <mention / id> <nombre de message>`, *max 100 messages*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            if(isNaN(number)) return message.reply("`e!prune <mention / id> <nombre de message>`, *max 100 messages*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            if(parseInt(number) < 1 || parseInt(number) > 100) return message.reply("`e!prune <mention / id> <nombre de message>`, *max 100 messages*").then(async mess => setTimeout(async () => {mess.delete()}, 5000)) */

            await message.delete()

            try {

                let messages = [...(await message.channel.messages.fetch()).values()].filter(m => m.author.id === user.id).slice(0, parseInt(number));
                if(messages.length <= 0) return message.channel.send(` <:Elexyr22:754441336849170543> ${user} *n'a envoyé aucun message dans ce salon...*`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

                let msg = await message.channel.bulkDelete(messages)

                await message.channel.send(`<:Elexyr22:754441336849170543> J'ai supprimé \`${msg.size}\` message(s) de ${user} avec succès ! <a:Covid:754441324953993448>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

            } catch (err) {

                let messages = [...(await message.channel.messages.fetch()).values()].filter(m => m.author.id === user.id && m.createdAt > (Date.now() - 1209600000)).slice(0, parseInt(number));
                if(messages.length <= 0) return message.channel.send(`<:Elexyr22:754441336849170543> ${user} *n'a envoyé aucun message dans ce salon les 14 derniers jours...*`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

                let msg = await message.channel.bulkDelete(messages)

                await message.channel.send(`<:Elexyr22:754441336849170543> J'ai supprimé \`${msg.size}\` message(s) de \`${user.tag}\` car les autres dataient de plus de 14 jours avec succès ! <a:Covid:754441324953993448>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            }
        
        } catch (err) {

            return message.reply("*Aucune personne trouvée...*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
        }
    }
})