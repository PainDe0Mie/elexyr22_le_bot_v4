const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const chalk = require("chalk");

module.exports = new Event("guildMemberAdd", async (bot, member) => {
    if(member.user.bot) return;

    let serv = member.guild.name;
    let db = bot.db;

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {

        if (req.length < 1) return;

        if (req[0].raid === "off") { 

            let roleToAdd = member.guild.roles.cache.get(req[0].roleID);
            if (!roleToAdd) return
            
            try {
                await member.roles.add(roleToAdd, "Auto-Rôle de Bienvenue");
                console.log(chalk.green(`[AUTO-ROLE] "Le rôle "${roleToAdd.name}" a été ajouté à "${member.user.username}" sur le serveur '${serv}'`))
            } catch (error) {
              console.log(chalk.bgRed(`[AUTO-ROLE | ERROR]  Une erreur est survenue lors de l'ajout du rôle "${roleToAdd.name}" à ${member.user.username}:`, error))
            }
        }
    });
});
