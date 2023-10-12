const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({
  name: "",
  description: "",
  utilisation: "",
  alias: ["gban"],
  permission: "",
  category: "",
  cooldown: 1,

  async run(bot, message, args) {
    const db = bot.db;
    const user = message.author;

    db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {
      if (req.length < 1)
        return message.reply(
          "<:elexyr22:1067501213085597806> Uniquement les **Admins** peuvent utiliser cette commande! <a:nop1:1068106487358038126>"
        );

      if (req[0].statut === "OFF")
        return message.reply(
          "<:elexyr22:1067501213085597806> **Elexyr22 👑#0022** peut utiliser cette commande ! <a:nop1:1068106487358038126>"
        );
      if (req[0].statut === "ACTIF") {
        let targetUser;
        if (message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
          targetUser = message.user
            ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null)
            : message.mentions.users.first() || (await bot.users.fetch(args[0]).catch(() => null));
          if (!targetUser)
            return message.reply(
              "<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>"
            );
        } else {
          targetUser = message.user ? message.user : message.author;
        }
        if (!targetUser)
          return message.reply(
            "<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>"
          );
          if(message.user === undefined ? (targetUser.id === message.author.id) : (targetUser.id === message.user.id)) return message.reply("*Vous ne pouvez pas vous bannir vous-même...*")

        let reason = message.user
          ? args._hoistedOptions.length > 1
            ? args._hoistedOptions[1].value
            : undefined
          : args.slice(1).join(" ");
        if (!reason) reason = "Aucune raison donnée";

        db.query(`SELECT * FROM gban WHERE userID = ${targetUser.id}`, async (err, req) => {
          if (req.length < 1) {
            let sql = `INSERT INTO gban (user, userID, reason, authorID, date) VALUES ('${targetUser.username}', '${targetUser.id}', '${reason}', '${message.author.id}', '${Date.now()}')`;
            db.query(sql, function (err) {
              if (err) throw err;
            });

            try {
             await targetUser.send(
                `<:elexyr22:1067501213085597806> Vous êtes **Blacklist** pour **${reason},** vous ne pouvez plus __rejoindre__ de serveurs où le bot est __présent...__ \n\n > **Actuellement :** \`\`${bot.guilds.cache.size}\`\` serveurs et leur \`\`${bot.guilds.cache.reduce(
                  (a, g) => a + g.memberCount,
                  0
                )} \`\`membres ! <a:ftnl:933837014145589298>`
              );
              await targetUser.send("https://tenor.com/view/train-seum-ta-le-cheh-gif-20542776"); 
              await message.guild.bans.create(targetUser.id, {
                reason: `Ban pour : ${reason}, par : ${
                  message.user === undefined ? message.author.tag : message.user.tag
                })`,
              });
              return message.reply(
                `<:elexyr22:1067501213085597806> ${targetUser} a bien été ajouté à la **blacklist** ! <a:ban1:1066476261024727090>`
              );
            } catch (error) {
              message.reply(
                `<:elexyr22:1067501213085597806> ${targetUser} a bien été ajouté à la **blacklist** ! <a:ban1:1066476261024727090>`
              );
              return message.channel.send(
                `<:elexyr22:1067501213085597806> _Je n'ai pas réussi à DM_ ${targetUser.username} _pour son **GBAN !**_ <a:sad:1082769321413070949>`
              );
            }
          } else {
            return message.reply(
              `<:elexyr22:1067501213085597806> ${targetUser} est déjà ajouté à la blacklist, pour la raison : **${
                req[0].reason
              }** ! <a:alerte2:1067594465344225322>`
            );
          }
        });
      }
    });
  },
});
