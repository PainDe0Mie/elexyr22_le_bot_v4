const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const ms = require("ms");

module.exports = new Command({
  name: "",
  description: "",
  utilisation: "",
  alias: ["premuim-add", "prem"],
  permission: "",
  category: "",
  cooldown: 1,

  async run(bot, message, args) {

    const db = bot.db;
    const admins = message.author

    db.query(`SELECT * FROM admin WHERE userID = ${admins.id}`, async (err, req) => {
	if(req.length < 1) return message.reply("<:elexyr22:1067501213085597806> Uniquement les **Admins** peut utilisé cette commande ! <a:nop1:1068106487358038126>") 

  if(req[0].statut === "OFF") return message.reply("<:elexyr22:1067501213085597806> Uniquement les **Admins** peut utilisé cette commande ! <a:nop1:1068106487358038126>") 
  if(req[0].statut === "ACTIF") {

    let user;
    if (message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
        user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
        if (!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
    } else {
        user = message.user ? message.user : message.author;
    }
    if (!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
    
    let time = args[1];
    if (!time) return message.reply("Veuillez indiquer une durée !");
    
    let parsedTime = ms(time);
    if (!parsedTime) return message.reply("Le temps indiqué est invalide !");
    
    let triggerTime = Date.now() + parsedTime;

    let sql = `INSERT INTO premium (userID, timer) VALUES ('${user.id}', '${triggerTime}')`;
    db.query(sql, function (err) {
      if (err) {
        console.error("Erreur lors de l'insertion du minuteur :", err);
        return message.reply("Une erreur s'est produite lors de la définition du minuteur.");
      }

      const timestampInMilliseconds = triggerTime
      const timestampInSeconds = Math.floor(timestampInMilliseconds / 1000); 

      message.reply(`<:elexyr22:1067501213085597806> **Rôle Premium** bien ajouté à ${user}, pendant: <t:${timestampInSeconds}:R> ! <a:valide_or:1067501018906108024>`);

      if (message.guild) {
        const member = message.guild.members.cache.get(user.id);
        if (member) {
            member.roles.add("1065700494711984319").catch(err => {
                console.error("Erreur lors de l'ajout du rôle Premium :", err);
                return message.reply("Une erreur s'est produite lors de l'ajout du rôle Premium.");
            })
      //Code: \`\`${timestampInSeconds}\`\`

    }}})}})}})