const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const Command = require('../../Structure/Command');

module.exports = new Command({
  name: "",
  description: "",
  utilisation: '',
  alias: ["nous"],
  permission: '',
  category: '',
  cooldown: 1,

    async run(bot, message, args) {
        
        const db = bot.db;

    let user;
    if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
        user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
        if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
    } else {
        user = message.user ? message.user : message.author;
    }
    if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
 
    db.query(`SELECT * FROM user WHERE userID = ${user.id}`, async (err, req) => {
      if (req.length < 1) return message.reply("<:elexyr22:1067501213085597806> *Cette personne n'est pas enregistrée dans le bot...* <a:snif:1069970251279769641> \n\n envoye un message dans <#1085672913778253894> pour commencé le gain xp !")
        
      const time = req[0].voiceTime;
      const minutes = Math.round(time / 60);
      const hours = minutes ? Math.floor(minutes / 60) : '0';

const embed = new MessageEmbed()
    .setColor(bot.color)
      .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .setTitle("Niveau 1")
    .setDescription(` **XP:** ${req[0].xp} / 15, **Vocal:** ${minutes} / 60 minutes`)
        .setTimestamp()
message.reply({ embeds: [embed]})

    })}})