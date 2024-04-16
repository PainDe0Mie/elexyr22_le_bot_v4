const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "anti-mass-mention",
    description: "Permet d'activer ou de désactiver le mode Anti Mass Mention",
    utilisation: "[on/off]",
    alias: ["anti-mass-mention", "mention"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "1) Modération",
    cooldown: 10,

    async run(bot, message, args, db) {

        let choix = message.user ? args._hoistedOptions[0].value : args[0]
        if(!choix) return message.reply("*Veuillez indiquer \`on\` ou \`off\` !* ")
        if(choix !== "on" && choix !== "off") return message.reply("*Veuillez indiquer \`on\` ou \`off\` !* ")

        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guildId}`, async (err, req) => {

            if(req.length < 1) return 
            if(req[0].mention === choix) return message.reply(`L'anti-Mass-Mention est déjà ${choix === "on" ? "activé" : "désactivé"} !`)

            db.query(`UPDATE serveur SET mention = '${choix}' WHERE guildID = ${message.guildId}`)

            message.reply(`L'anti-Mass-Mention est a été ${choix === "on" ? "activé" : "désactivé"} !`)
        })
    }
})