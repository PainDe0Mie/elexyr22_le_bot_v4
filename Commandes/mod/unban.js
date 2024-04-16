const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
    name: "unban",
    description: "Permet de de-bannir un utilisateur",
    utilisation: "",
    alias: ["unban", "u", "un"],
    permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
    category: "1) Modération",
    cooldown: 5,
    async run(bot, message, args) {

        let user;
        if (message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
            user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
            if (!user) return message.reply(" Cet utilisateur n'existe pas... ");
        } else {
            user = message.user ? message.user : message.author;
        }
        if (!user) return message.reply(" Cet utilisateur n'existe pas... ");

        try {
            const banInfo = await message.guild.bans.fetch(message.user ? args._hoistedOptions[0].value : args[0]);
            if (banInfo.size === 0) return message.reply(` ${user} n'est pas banni du serveur. `);
            await message.reply(` ${(await bot.users.fetch(message.user ? args._hoistedOptions[0].value : args[0]))} a été __unban__ du serveur ! `);
            await message.guild.members.unban(message.user ? args._hoistedOptions[0].value : args[0]);
        } catch (error) {
            message.reply(` ${user} n'est pas banni du serveur. `);
        }

        if(message.guild.id === "ID") { //id du serv
          const salon = bot.channels.cache.get("ID");
          salon.send(` ${message.author.username} a utilisé la commande **e!unban**`);
        }
    }});
