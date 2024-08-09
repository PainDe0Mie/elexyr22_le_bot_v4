const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("guildDelete", async (bot, guild) => {
    console.log(`Serveur supprimé : ${guild.name}. Je suis maintenant sur ${bot.guilds.cache.size} serveurs.`);

    // Code pour envoyer des informations sur le serveur supprimé à un canal spécifique
    const channel = bot.channels.cache.get("ID CHANNEL");
    if (!channel) return; // Vérifie si le canal de log existe

    // Vérification des propriétés du serveur pour s'assurer qu'elles ne sont pas nulles ou indéfinies
    if (!guild.name || !guild.id || !guild.ownerId || !guild.memberCount) {
        console.log("Certaines informations du serveur sont manquantes ou invalides. Aucune information ne sera envoyée.");
        return;
    }

    let removeEmbed = new Discord.MessageEmbed()
        .setTitle(`Départ de : ${guild.name} *(${guild.id})*`)
        .setThumbnail(guild.iconURL() || "default_thumbnail_url") // Vous pouvez fournir une URL de vignette par défaut ici
        .addField(`👑 Propriétaire:`, `<@${guild.ownerId}> - *(${guild.ownerId})*`)
        .addField(`Nombre de membres:`, `${guild.memberCount}`)
        .setColor("ff0000")
        .setTimestamp()
        .setFooter(`Nous sommes maintenant sur ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL());

    channel.send({ embeds: [removeEmbed] });
});
