const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "setprefix",
    description: "Permet de changer le préfixe du bot",
    utilisation: "[préfixe]",
    alias: ["prefix", "setprefix", "set-prefix"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "3) Utile",
    cooldown: 10,

    async run(bot, message, args, db) {

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

            try {

                let prefix = args[0] || args._hoistedOptions[0].value
                if(!prefix) return message.reply("Veuillez indiquer un préfixe \n Exemple :`+setprefix <prefix>`")

                const ancienprefix = req[0].prefix;

                db.query(`UPDATE serveur SET prefix = '${prefix}' WHERE guildID = ${message.guild.id}`)

                message.reply(`Le préfix à été changé par : \`${ancienprefix}\` à \`${prefix}\` !`)

            } catch (err) {
                return message.reply("🗣️ Veuillez indiquer un préfixe !")
            }
        })
    }
})