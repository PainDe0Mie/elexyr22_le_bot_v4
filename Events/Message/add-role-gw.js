const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("messageCreate", async (bot, message, guild) => {
if(message.author.bot) return;
if(message.guild === null) return;

    const channelId = "1227524825270980628"; // ID du salon où vous voulez gérer les rôles
    const roleId = "123"; // Remplacez "ROLE_ID" par l'ID du rôle que vous souhaitez ajouter ou retirer

    if (message.channel.id === channelId) {
        const member = message.guild.members.cache.get(message.author.id);
        await message.react("<a:etoile:1227524842161704980>")

        if (member.roles.cache.has(roleId)) {
            try {
                await member.roles.remove(roleId);
                console.log(`Retrait du rôle avec succès à ${message.author.tag}`);
            } catch (error) {
                console.error(`Erreur lors du retrait du rôle : ${error}`);
            }
        } else {
            try {
                await member.roles.add(roleId);
                console.log(`Ajout du rôle avec succès à ${message.author.tag}`);
            } catch (error) {
                //console.error(`Erreur lors de l'ajout du rôle : ${error}`);
            }
        }
    }
});
