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
          "Uniquement les **Admins** peuvent utiliser cette commande!"
        );

      if (req[0].statut === "OFF")
        return message.reply(
          "**Elexyr22 👑#0022** peut utiliser cette commande !"
        );
      if (req[0].statut === "ACTIF") {
        let targetUser;
        if (message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
          targetUser = message.user
            ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null)
            : message.mentions.users.first() || (await bot.users.fetch(args[0]).catch(() => null));
          if (!targetUser)
            return message.reply(
              "Cet utilisateur n'existe pas..."
            );
        } else {
          targetUser = message.user ? message.user : message.author;
        }
        if (!targetUser)
          return message.reply(
            "Cet utilisateur n'existe pas..."
          );

        db.query(`SELECT * FROM gban WHERE userID = ${targetUser.id}`, async (err, req) => {
          if (req.length < 1)
            return message.reply(
              `*${targetUser} n'est pas blacklist...* `
            );

          db.query(`DELETE FROM gban WHERE userID = ${targetUser.id}`, (err, result) => {
            if (err) throw err;
          });

          try {
            await message.reply(
              `${targetUser} a bien été **unblacklisté !** `
            );
            await targetUser.send(
              "Vous êtes **unblacklist** du bot ! <a:ftnl:933837014145589298>"
            );
            await message.guild.members.unban(
              message.user ? args._hoistedOptions[0].value : args[0]
            ).catch(console.error);
          } catch (error) {
              return message.channel.send(
                `_Je n'ai pas réussi à DM ${targetUser.username} pour son **UNGBAN !**_`
              );
          }
        });
      }
    });
  },
});
