const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const { MessageButton } = require("discord.js"); // On importe seulement MessageButton ici
const chalk = require("chalk");

module.exports = new Command({
  name: "ban",
  description: "Permet de bannir définitivement un utilisateur",
  utilisation: "[membre] (raison)",
  alias: ["ban"],
  permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
  category: "1) Modération",
  cooldown: 10,

  async run(bot, message, args, db) {
    let user;
    if(message.mentions.users.size > 0) {user = message.mentions.users.first()} else if (args.length >= 1) {user = await bot.users.fetch(args[0]).catch(() => null)}

    if(!user) {
   return message.reply("Cet utilisateur n'existe pas... ");
    }

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "Aucune raison donnée";

    if (user.id === message.author.id) {
      return message.reply("*Vous ne pouvez pas vous bannir vous-même...*");
    }

   if(user.id === "1088442920530620477") {
    return message.reply("Je ne peux pas bannir mon **maître**... "); //elexyr bg
    } 

    if(user.id === message.guild.ownerId) {
     return message.reply("*Vous ne pouvez pas bannir le owner du serveur...*");
    }

    const ID = await bot.function.createID("BAN");
    const row1 = new Discord.MessageActionRow().addComponents(
      new MessageButton()
        .setStyle("DANGER")
        .setLabel(`Unban ${user.username}`)
        .setCustomId("unban")
        .setEmoji("🛑")
    );

    try {
      await user.send(`Vous êtes __banni__ du serveur : \`\`${message.guild.name}\`\` pour: __**${reason} !**__ `);
                  await user.send("https://cdn.discordapp.com/attachments/767361889990344715/836393401573965854/Ban_22.gif");
                } catch (err) {
                  message.reply(`_Je n'ai pas réussi à envoyer un dm à_ ${user.username} _pour son **ban !**_ `)
                }
                

    await message.reply({
      content: `${user} a été __banni__ pour \`\`${reason}\`\` ! `,
      components: [row1],
    }).then(async (msg) => {
      await message.guild.bans
        .create(user.id, { reason: `${reason} par ${message.author.username}` })
        .catch(console.error);
      if (reason.includes("'")) reason = reason.replace(/'/g, "\\'");

	let sql = `INSERT INTO bans (userID, authorID, banID, guildID, reason, date, time) VALUES (${user.id}, '${message.author.id}', '${ID}', '${message.guildId}', '${reason}', '${Date.now()}', 'Définitif')`;

      db.query(sql, function (err) {
        if (err) throw err;
      });

      db.query(`SELECT * FROM ban WHERE guildID = ${message.guild.id}`, async (err, req) => {
        if (req.length < 1) {
          let sql = `INSERT INTO ban (guildID, userID) VALUES (${message.guild.id}, '0')`;
          db.query(sql, function (err) {
            if (err) throw err;
          });
        } else {
          db.query(`UPDATE ban SET userID = '${user.id}' WHERE guildID = ${message.guild.id}`);

        }

        if(message.guild.id === "ID") {
          const salon = bot.channels.cache.get("ID");
          salon.send(` ${message.author.username} a utilisé la commande **e!ban ${user.username} ${reason}.**`);
        }
        
      });
    });
  },
});
