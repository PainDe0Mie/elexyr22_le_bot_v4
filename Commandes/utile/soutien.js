const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
  name: "set-statut",
  description: "Permet de définir le rôle à donner aux utilisateurs qui ont le statut",
  utilisation: "",
  alias: ["set-statut", "setstatut", "statut"],
  permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
  category: "3) Utile",
  cooldown: 5,

  async run(bot, message, args) {
      
      const db = bot.db

    //get mentionned user or id provided
    const statutrole = "statutrole";

    let fetched = {
      role: null,
      statut: null
    };

    if (args[0] === "off") {
      return message.reply("Le Statut-Rôle a bien été désactivé !");
    }

    let statuts = args[0];
    let role = message.mentions.roles.first();

    //vérifier si le bot peut interagir avec le role
    if (!role) return message.reply("Veuillez écrire comme ça : `+set-statut <statut> @rôle`");
    if (!role.editable) return message.reply("Je ne peux pas assigner ce rôle, car j'ai pas les permissions !");
    if (role === undefined) return message.reply("Veuillez écrire comme ça : `+set-statut <statut> @rôle`");

    fetched.role = role;
    fetched.statut = statuts;

    // On insère ou met à jour les informations de statut
    db.query(`SELECT * FROM soutien WHERE guildID = ${message.guildId}`, async (err, req) => {
      if(req.length < 1) {
        
        let sql = `INSERT INTO soutien (guildID, statut, role)VALUES (${message.guild.id}, '${statuts}', '${role.id}')`
               db.query(sql, function(err) {
                   if(err) throw err;
               })

      db.query(`UPDATE soutien SET statut = '${statuts}' WHERE guildID = ${message.guildId}`)
      db.query(`UPDATE soutien SET role = '${role.id}' WHERE guildID = ${message.guildId}`)
	  return message.reply(`Le **${role.name}** sera donné aux personnes qui ont le statut : \`\`${statuts} !\`\``);
      }})}})
