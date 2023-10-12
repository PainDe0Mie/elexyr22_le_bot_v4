const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({
  name: "",
  description: "",
  utilisation: "",
  alias: ["gunban"],
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

        db.query(`SELECT * FROM gban WHERE userID = ${targetUser.id}`, async (err, req) => {
          if (req.length < 1)
            return message.reply(
              `<:elexyr22:1067501213085597806> *${targetUser} n'est pas blacklist...* <a:coeur1:1066770964370702406>`
            );

          db.query(`DELETE FROM gban WHERE userID = ${targetUser.id}`, (err, result) => {
            if (err) throw err;
          });

          try {
            await message.reply(
              `<:elexyr22:1067501213085597806> ${targetUser} a bien été **unblacklisté !** <a:coeur1:1066770964370702406>`
            );
            await targetUser.send(
              "<:elexyr22:1067501213085597806> Vous êtes **unblacklist** du bot ! <a:ftnl:933837014145589298>"
            );
            await message.guild.members.unban(
              message.user ? args._hoistedOptions[0].value : args[0]
            ).catch(console.error);
          } catch (error) {
              return message.channel.send(
                `<:elexyr22:1067501213085597806> _Je n'ai pas réussi à DM_ ${targetUser.username} _pour son **UNGBAN !**_ <a:sad:1082769321413070949>`
              );
          }
        });
      }
    });
  },
});
