const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
  name: "allbooster",
  description: "Affiche la liste des membres qui ont boosté le serveur et depuis quand.",
  utilisation: "",
  alias: ["booster", "boost", "allbooster", "boosters"],
  permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
  category: "2) Information",
  cooldown: 5,

  async run(bot, message, args, db) {
    const guild = message.guild;

    if (guild.premiumSubscriptionCount === 0) {
      message.reply("<:elexyr22:1067501213085597806> *Le serveur n'a pas de Boost...* <a:sad:1082769321413070949>");
      return;
    }

    const boosters = await guild.members.fetch();

    const boostersWithPremium = boosters.filter(
      (member) => member.premiumSince !== null && member.premiumSince !== undefined
    );

    if (boostersWithPremium.size === 0) {
      message.reply("<:elexyr22:1067501213085597806> *Personne n'a encore boosté le serveur...* <a:sad:1082769321413070949>");
      return;
    }

    const boosterList = boostersWithPremium.map((member) => {
      const boostDuration = Date.now() - member.premiumSince.getTime();
      const boostDays = Math.floor(boostDuration / (1000 * 60 * 60 * 24));
      const boostHours = Math.floor((boostDuration / (1000 * 60 * 60)) % 24);
      const boostMins = Math.floor((boostDuration / (1000 * 60)) % 60);
      const boostSecs = Math.floor((boostDuration / 1000) % 60);
      const boostTime = `${boostDays}j ${boostHours}h ${boostMins}m ${boostSecs}s`;
      return `- ${member.user} - *(${member.user.username})* : Booster depuis \`\`${boostTime}\`\``;
    }).join("\n");

    const embed = new Discord.MessageEmbed()
      .setTitle(`Liste des Boosters pour ${guild.name}:`)
      .setDescription(boosterList)
      .setColor("#f47fff")
      .setTimestamp()
      .setFooter(`Demandé par : ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));

    message.reply({ embeds: [embed] });
  },
});
