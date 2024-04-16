const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
const Command = require("../../Structure/Command");
const chalk = require("chalk")

module.exports = new Command({
  name: "mass-role-remove",
  description: "Permet de retirer un rôle à tout le monde",
  utilisation: "",
  alias: ["mass-roll-remove", "roll"],
  permission: Discord.Permissions.FLAGS.MANAGE_GUILD,
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
    const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    if (!role) {
      return message.reply("Veuillez mentionner un rôle à retirer ? ");
    }

    // Créer les boutons pour sélectionner le type de membres
    const humansButton = new MessageButton()
      .setCustomId("humans")
      .setLabel("👥")
      .setStyle("SUCCESS");
    const botsButton = new MessageButton()
      .setCustomId("bots")
      .setLabel("🤖")
      .setStyle("PRIMARY");
    const allButton = new MessageButton()
      .setCustomId("all")
      .setLabel("♾️")
      .setStyle("SECONDARY");

    // Créer une rangée de boutons
    const row = new MessageActionRow()
      .addComponents(humansButton, botsButton, allButton);

    // Filtrer les interactions pour les boutons spécifiés
    const filter = (interaction) => {
      return (
        interaction.isButton() &&
        ["humans", "bots", "all"].includes(interaction.customId)
      );
    };

    // Créer l'embed pour la confirmation
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Retrait en masse d'un rôle")
      .setDescription(`Vous vous apprétez à retirer le rôle "${role}" à ${message.guild.memberCount} membres du serveur.\n\n **Que souhaitez-vous faire ?**\n👥・Retirer le rôle uniquement aux **humains.**\n🤖・Retirer le rôle uniquement aux **robots.**\n :infinity: ・Retirer le rôle à **tous les membres.**`)
      .setFooter(`Demandé par : ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));

    // Envoyer le message avec l"embed et les boutons
    const replyMessage = await message.reply({
      embeds: [embed],
      components: [row],
    });

    try {
      const collectedInteraction = await replyMessage.awaitMessageComponent({ filter, time: 60000 });

      if (!collectedInteraction) {
        replyMessage.edit({
          content: "*Temps écoulé, la commande a été annulée...*",
          components: [],
        });
        return;
      }

      let membersToProcess;
      // Sélectionner les membres en fonction de l"interaction
      if (collectedInteraction.customId === "humans") {
        const allMembers = await message.guild.members.fetch();
        membersToProcess = allMembers.filter(member => !member.user.bot);
      } else if (collectedInteraction.customId === "all") {
        membersToProcess = message.guild.members.cache;
      } else if (collectedInteraction.customId === "bots") {
        membersToProcess = message.guild.members.cache.filter(member => member.user.bot);
      }

      // Mettre à jour l"interaction
      collectedInteraction.deferUpdate().catch(console.error);
      
      // Retirer le rôle des membres sélectionnés
      await Promise.all(membersToProcess.map(member => member.roles.remove(role)));

      // Message de confirmation
      replyMessage.edit({
        content: `Le rôle ${role} a été retiré à ${
          collectedInteraction.customId === "all"
            ? "tous les membres du serveur"
            : collectedInteraction.customId === "humans"
            ? "les humains"
            : "les bots"
        }.`,
        components: [],
      });

      // Envoyer le message de confirmation
      await message.reply(`Le retrait du \`\`${role.name}\`\` est terminé !`);
      console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!role-all-remove sûr '${message.guild.name}'`))
    } catch (error) {
      console.error("*Erreur lors du retrait du rôle...*", error);
      replyMessage.edit({
        content: `*Une erreur s'est produite lors du retrait du rôle \`\`${role.name}.\`\` Veuillez réessayer plus tard...*`,
        components: [],
      });
    }
  },
});
