const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({

    name: "set-log",
    description: "Permet d'activer les logs du bot",
    utilisation: "",
    alias: ["set-log", "log"],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "1) Modération",
    cooldown: 5,
    
    async run(bot, message, args, db) {
        try {
            let channelID = message.mentions.channels.first();
            if (!channelID) {
                return message.reply("<:elexyr22:1067501213085597806> Veuillez mentionner un salon.\n\n Exemple : `e!set-log <#salon>` <a:mmhh:1067175530509639791>");
            } else {
                let sql = `UPDATE serveur SET logID = '${channelID.id}' WHERE guildID = ${message.guild.id}`;
                db.query(sql, function (err) {
                    if (err) throw err;
                    message.reply({ content: "<:elexyr22:1067501213085597806> Les logs ont bien été activés !<a:valide_or:1067501018906108024>" });
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
});
