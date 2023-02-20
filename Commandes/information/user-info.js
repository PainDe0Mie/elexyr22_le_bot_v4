
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "userinfo",
    description: "Permet d'avoir des informations sur un utilisateur",
    utilisation: "",
    alias: ["userinfo", "user-info", "ui"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, guild) {
        
        const { QuickDB } = require('quick.db');
        const db = new QuickDB();
        const blacklist = db.table(`blacklist`);

       // const user = message.mentions.users.first() || await bot.users.fetch(args[0]).catch(err => {console.log("Identifiant non valide fourni")})

       let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
           if(!user) return message.reply("Aucune personne trouvée !")
       } else user = message.user ? message.user : message.author;
        if(user == undefined) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !");

     let embed = new Discord.MessageEmbed()
     
     .setColor("RANDOM")
    .setTitle("User-Info :")
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .setDescription(`**Informations principales :** \n :grinning: Tag d'utilisateur : \`\`${user.tag}\`\` \n :id: ID : \`\`${user.id}\`\` \n :robot: Est un bot : \`\`${user.bot ? "Oui" : "Non"}\`\` \n\n Autres informations : \n:clock: Compte créé le : <t:${Math.floor(user.createdAt / 1000)}:F>   \n\n Informations liées au serveur :\n :clock10: A rejoint le serveur : ${user.joinedAt}`)
    .setImage(await (await bot.users.fetch(user.id, {force: true})).bannerURL({dynamic: true, size: 4096}))
    .setTimestamp()
    .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
    await message.reply({embeds: [embed]})

    }})
