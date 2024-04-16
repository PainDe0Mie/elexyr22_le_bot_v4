const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({

    name: "admin2",
    description: "",
    utilisation: "",
    alias: ["admin2"],
    permission: "",
    category: "",
    cooldown: 1,

    async run(bot, message, guild) {
        
        const db = bot.db;
        const user = message.author;

        db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {

            if(req.length < 1) return message.reply(" Uniquement les **Admins** peuvent utiliser cette commande ! ");
            
            if(req[0].statut === "OFF") return message.reply(" Uniquement les **Admins** peuvent utiliser cette commande ! ");
            
            if(req[0].statut === "ACTIF") {
                try {
                    const role = message.guild.roles.cache.find(role => role.name === '👑・PERMISSION ANTI-RAID');
                    if (!role) throw new Error("Le rôle n'a pas été trouvé !");
                    
                    await role.delete();
                    message.reply(" **Mode Admin** désactivé !");
                    console.log(chalk.bgBlue(`[Staff Retiré] pour ${message.author.username}  | sur ${message.guild.name}`));
                } catch (error) {
                    console.error(error);
                    message.reply(" *Une erreur est survenue lors de la suppression du rôle...*");
                }
            }
        });
    }
});
