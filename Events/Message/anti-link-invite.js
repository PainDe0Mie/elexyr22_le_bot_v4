const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("messageCreate", async (bot, message) => {
  
    //                  salon1                  salon 2                 salon 3              
    const channelIds = ["1232099313950261339", "1227524827976437760", "1227524829503295509"];

    // Si le message n'est pas dans l'un des canaux spécifiés, on ignore
    if (!channelIds.includes(message.channel.id)) return;

    // Vérifie si l'utilisateur a la permission d'administrateur
    if (message.member.permissions.has("ADMINISTRATOR")) return;

    // Expressions régulières pour détecter les liens et les invitations Discord
    const urlRegex = /(https?:\/\/[^\s]+)/gi;
    const discordInviteRegex = /(discord\.gg\/[^\s]+)/gi;

    // Fonction pour extraire les liens d'un message
    const extractLinks = (text) => {
        return text.match(urlRegex) || [];
    };

    // Extraire tous les liens du message
    const links = extractLinks(message.content);

    // Filtrer les liens provenant de tenor.com et cdn.discordapp.com
    const nonAllowedLinks = links.filter(link => !link.includes('tenor.com') && !link.includes('cdn.discordapp.com'));

    // Détecte s'il y a une invitation Discord
    const hasDiscordInvite = discordInviteRegex.test(message.content);

    // Détermine le type de contenu non autorisé
    let warningMessage = null;
    if (hasDiscordInvite) {
        warningMessage = `Vous n'êtes pas **autorisé** à envoyer des __invitations__ dans le salon ${message.channel}`;
    } else if (nonAllowedLinks.length > 0) {
        warningMessage = `Vous n'êtes pas **autorisé** à envoyer des __liens__ dans le salon ${message.channel}`;
    }

    // Si le message contient un lien non autorisé ou une invitation Discord
    if (nonAllowedLinks.length > 0 || hasDiscordInvite) {
        try {
            // Supprime le message
            await message.delete();

            // Envoie un message privé à l'utilisateur si un message d'avertissement est défini
            if (warningMessage) {
                await message.author.send(warningMessage);
            }
        } catch (error) {
            console.error("Erreur lors de la suppression d'un message ou de l'envoi d'un DM :", error);
        }
    }
});
