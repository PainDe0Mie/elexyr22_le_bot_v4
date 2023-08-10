const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const moment = require("moment");
const chalk = require("chalk")

module.exports = new Command({

    name: "userinfo",
    description: "Permet d'avoir des informations sur un utilisateur",
    utilisation: "",
    alias: ["userinfo", "user-info", "ui"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, member) {
        
        let db = bot.db

      let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
       
        const guildMember = await message.guild.members.fetch({ user, force: true }).catch(() => null);
        const joinedDate = guildMember ? guildMember.joinedAt : null;
        const formattedDate = joinedDate ? `<t:${Math.floor(joinedDate.getTime() / 1000)}>` : '*Aucune donnée*';

        db.query(`SELECT * FROM gban WHERE userID = ${user.id}`, async (err, req) => {
            let sql = req.length >= 1;
            let bl = sql ? `Utilisateur **Blacklist** pour la raison :\n\n \`${req[0].reason}\`\ `: `*L'utilisateur n'est pas Blacklist.*`;
        
            const guildsInCommon = message.client.guilds.cache.filter(guild => guild.members.cache.some(member => member.id === user.id));
            const guildsInCommonCount = guildsInCommon.size;
        
            let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("User-Info :")
                .setThumbnail(user.displayAvatarURL({dynamic: true}))
                .setDescription(`**Informations principales :** \n :grinning: Tag d'utilisateur : \`\`${user.username}\`\` \n :id: ID : \`\`${user.id}\`\` \n :robot: Est un bot : \`\`${user.bot ? "Oui" : "Non"}\`\` \n\n Autres informations : \n:clock: Compte créé le : <t:${Math.floor(user.createdAt / 1000)}:F>  \n:busts_in_silhouette: Serveur(s) en commun :  \`\`${guildsInCommonCount}\`\` serveur(s)\n\n Informations liées au serveur :\n :clock10: A rejoint le serveur : ${formattedDate} \n\n **Informations Blacklist :** \n${bl}`)
                .setImage(await (await bot.users.fetch(user.id, {force: true})).bannerURL({dynamic: true, size: 4096}))
                .setTimestamp()
                .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
            
            await message.reply({embeds: [embed]});
             console.log(chalk.yellow(`[CMD] "${message.author.username}" à utilisé la commande e!user-info sûr '${message.guild.name}'`))
        });
    }
});
