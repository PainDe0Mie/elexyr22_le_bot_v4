const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "auto-role",
    description: "Permet d'avoir un auto-rôle de join",
    utilisation: "",
    alias: ["auto-role", "role", "set-role"],
    permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
    category: "3) Utile",
    cooldown: 5,
    
    async run(bot, message, args, db) {
        try {
            let roleID = args[0];
            if (!roleID || isNaN(roleID)) {
                return message.reply("<:elexyr22:1067501213085597806> Veuillez m'indiquer l'ID d'un rôle valide.");
            } else {
                const role = message.guild.roles.cache.get(roleID);
                if (!role) {
                    return message.reply("<:elexyr22:1067501213085597806> Le rôle avec cet ID n'existe pas dans ce serveur.");
                }

                // Mise à jour de la base de données avec l'ID du rôle
                sql = `UPDATE serveur SET roleID = '${roleID}' WHERE guildID = ${message.guild.id}`;
                db.query(sql, function (err) {
                    if (err) throw err;
                });

                message.reply(`<:elexyr22:1067501213085597806> **L'auto-Rôle** est bien __activé__ sûr ${role} !`);
            }
        } catch (err) {
            console.log(err);
        }
    }
});
