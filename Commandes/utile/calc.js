const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
    name: "calc",
    description: "Calcule la valeur d'une expression mathématique",
    usage: "<expression>",
  alias: ["calc", "ca", "cl"],
  permission: "",
  category: "3) Utile",
  cooldown: 5,

    async run(bot, message, args, db) {
        if (!args[0]) {
            return message.reply("Veuillez fournir une expression mathématique à calculer.");
        }

        let result;
        try {
            result = eval(args.join(" "));
        } catch (e) {
            return message.reply("*Une erreur s'est produite lors de l'évaluation de l'expression...* ");
        }

        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Résultat de du calcul :")
            .setDescription(`${args.join(" ")} = **${result}**`)
            .setTimestamp();
			message.reply({ embeds: [embed] });
    },
});
