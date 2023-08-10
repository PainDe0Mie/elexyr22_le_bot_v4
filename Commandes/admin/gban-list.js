const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({
    name: "getusers",
    description: "Récupère et affiche la liste de tous les utilisateurs dans la base de données",
    utilisation: "",
    alias: ["gu", "gban-list"],
    permission: "ADMINISTRATOR",
    category: "",
    cooldown: 5,

    async run(bot, message, args) {
        const db = bot.db;

        db.query("SELECT * FROM gban", (err, rows) => {
            if (err) {
                console.error(chalk.red("Erreur lors de la récupération des utilisateurs depuis la base de données :"), err);
                return message.channel.send("Une erreur s'est produite lors de la récupération des utilisateurs depuis la base de données.");
            }

            if (rows.length === 0) {
                return message.channel.send("Il n'y a aucun utilisateur dans la base de données.");
            }

            const users = rows.map((row) => {
                return {
                    userID: row.userID,
                    username: row.user,
                    reason: row.reason,
                };
            });

            const usersPerPage = 10;
            const totalPages = Math.ceil(users.length / usersPerPage);
            let pageNumber = args[0] ? parseInt(args[0]) : 1;

            if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > totalPages) {
                return message.channel.send(`Le numéro de page doit être compris entre 1 et ${totalPages}.`);
            }

            const startIdx = (pageNumber - 1) * usersPerPage;
            const endIdx = startIdx + usersPerPage;
            const usersToShow = users.slice(startIdx, endIdx);

            const userList = usersToShow.map((user) => `User: ${user.username}\n ID: ${user.userID}\n Raison: ${user.reason}`).join("\n\n");

            const embed = new Discord.MessageEmbed()
                .setColor("#ff0000") // Changement de la couleur à rouge (#ff0000)
                .setTitle(`Liste des GBANS (Page ${pageNumber}/${totalPages}):`)
                .setDescription(userList);

            message.reply({ embeds: [embed] }).then((sentMessage) => {
                if (totalPages > 1) {
                    if (pageNumber > 1) {
                        sentMessage.react("⬅️"); // Flèche pour revenir en arrière
                    }

                    if (pageNumber < totalPages) {
                        sentMessage.react("➡️");
                    }

                    const collector = sentMessage.createReactionCollector({
                        filter: (reaction, user) => ["⬅️", "➡️"].includes(reaction.emoji.name) && !user.bot,
                        time: 30000,
                        dispose: true,
                    });

                    collector.on("collect", (reaction, user) => {
                        reaction.users.remove(user).catch(console.error);
                        if (reaction.emoji.name === "⬅️") {
                            pageNumber--;
                        } else if (reaction.emoji.name === "➡️") {
                            pageNumber++;
                        }

                        const startIdx = (pageNumber - 1) * usersPerPage;
                        const endIdx = startIdx + usersPerPage;
                        const usersToShow = users.slice(startIdx, endIdx);

                        const userList = usersToShow.map((user) => `User: ${user.username}\n ID: ${user.userID}\n Raison: ${user.reason}`).join("\n\n");

                        embed.setDescription(userList).setTitle(`Liste des GBANS (Page ${pageNumber}/${totalPages}):`);
                        sentMessage.edit({ embeds: [embed] }).catch(console.error);
                    });

                    collector.on("end", () => {
                        sentMessage.reactions.removeAll().catch(console.error);
                    });
                }
            });
        });
    },
});
