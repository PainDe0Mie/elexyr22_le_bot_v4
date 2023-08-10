const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
    name: "unban",
    description: "Permet de de-bannir un utilisateur",
    utilisation: "",
    alias: ["unban"],
    permission: Discord.Permissions.FLAGS.BAN_MEMBERS,
    category: "1) Modération",
    cooldown: 5,
    async run(bot, message, args, db) {
        let user;
        if (message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
            user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
            if (!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
        } else {
            user = message.user ? message.user : message.author;
        }
        if (!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");

        try {
            const banInfo = await message.guild.bans.fetch(message.user ? args._hoistedOptions[0].value : args[0]);
            if (banInfo.size === 0) return message.reply(`<:elexyr22:1067501213085597806> ${user} n'est pas banni du serveur. <a:happy:1067494990240034917>`);
            await message.reply(`<:elexyr22:1067501213085597806> ${(await bot.users.fetch(message.user ? args._hoistedOptions[0].value : args[0]))} a été __unban__ du serveur ! <a:valide_or:1067501018906108024>`);
            await message.guild.members.unban(message.user ? args._hoistedOptions[0].value : args[0]);
        } catch (error) {
            message.reply(`<:elexyr22:1067501213085597806> ${user} n'est pas banni du serveur. <a:happy:1067494990240034917>`);
        }
    }
});
