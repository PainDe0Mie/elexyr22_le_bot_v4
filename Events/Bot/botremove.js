const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("guildDelete", async (bot, guild) => {
    console.log(`Serveur supprimé : ${guild.name}. Je suis maintenant sur ${bot.guilds.cache.size} serveurs.`);

    // Code pour envoyer des informations sur le serveur supprimé à un canal spécifique
    const channel = bot.channels.cache.get("id");
    if (!channel) return;

    let removeEmbed = new Discord.MessageEmbed()
        .setTitle(`Départ de : ${guild.name} *(${guild.id})*`)
        .setThumbnail(guild.iconURL())
        .addField(`👑 Propriétaire:`, `<@${guild.ownerId}> - *(${guild.ownerId})*`)
        .addField(`Nombre de membres:`, `${guild.memberCount}`)
        .setColor("ff0000")
        .setTimestamp()
        .setFooter(`Nous sommes maintenant sur ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL());

    channel.send({ embeds: [removeEmbed] });
});
