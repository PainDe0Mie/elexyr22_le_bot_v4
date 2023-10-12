const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "vocal",
  description: "Nombre de personnes en vocal, cam, stream et mute",
  utilisation: "",
  alias: ["vocal", "vc"],
  permission: "",
  category: "2) Information",
  cooldown: 5,

  async run(bot, message, args, db) {
    try {
      const guild = await message.guild.fetch();
      const members = guild.memberCount;
      const onlineMembers = guild.presences.cache.filter((presence) => presence.status !== 'offline').size;
      const voiceMembers = guild.channels.cache
        .filter((channel) => channel.type === 'GUILD_VOICE' || channel.type === 'GUILD_STAGE_VOICE')
        .reduce((acc, channel) => acc + channel.members.size, 0);
      const boost = guild.premiumSubscriptionCount;

      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setTitle(`${guild.name}〃Statistiques`)
        .setURL("https://discord.gg/elexyr22")
        .setDescription(`Membres: **${members}** <:member1:1099984803937402990>\nEn ligne: **${onlineMembers}** <:online2:1099984887987048510>\nEn vocal: **${voiceMembers}** <:vocals3:1099984979666145350> \nBoost: **${boost}**<a:boost4:1099985023530172416>`)
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
      console.log(chalk.yellow(`[CMD] "${message.author.username}" a utilisé la commande e!vocal sur '${guild.name}'`));  
    
      await message.reply({embeds: [embed]});
    } catch (error) {
      console.error(error);
      // Gérer les erreurs ici
    }
  }
});
