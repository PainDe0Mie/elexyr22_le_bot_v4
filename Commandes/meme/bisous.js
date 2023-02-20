const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "bisous",
    description: "Fait un bisous ?",
    utilisation: "",
    alias: ["bisous", "kiss"],
    permission: "",
    category: "7) Même",
    cooldown: 5,
    async run(bot, message, args, db) {

        let user = message.user === undefined ? (message.mentions.users.first() || bot.users.cache.get(args[0])) : bot.users.cache.get(args._hoistedOptions[0].value)
        if(!user) return message.reply("*Aucune personne trouvée...*")



let replies = ['https://cdn.weeb.sh/images/rymvn6_wW.gif','https://cdn.weeb.sh/images/H1a42auvb.gif','https://cdn.weeb.sh/images/H1Gx2aOvb.gif','https://cdn.weeb.sh/images/rJrCj6_w-.gif','https://cdn.weeb.sh/images/B13D2aOwW.gif','https://cdn.weeb.sh/images/BJLP3a_Pb.gif','https://cdn.weeb.sh/images/Hy-oQl91z.gif','https://cdn.weeb.sh/images/SJINn6OPW.gif','https://cdn.weeb.sh/images/ByiMna_vb.gif','https://cdn.weeb.sh/images/rymvn6_wW.gif','https://cdn.weeb.sh/images/BJSdQRtFZ.gif','https://cdn.weeb.sh/images/S1PCJWASf.gif','https://cdn.weeb.sh/images/SJ3dXCKtW.gif','https://cdn.weeb.sh/images/HJlWhpdw-.gif','https://cdn.weeb.sh/images/rkde2aODb.gif','https://cdn.weeb.sh/images/SybPhp_wZ.gif','https://cdn.weeb.sh/images/rkFSiEedf.gif','https://cdn.weeb.sh/images/r1cB3aOwW.gif','https://cdn.weeb.sh/images/BJv0o6uDZ.gif','https://cdn.weeb.sh/images/B13D2aOwW.gif','https://cdn.weeb.sh/images/Skv72TuPW.gif','https://cdn.weeb.sh/images/S1qZksSXG.gif','https://cdn.weeb.sh/images/Sk1k3TdPW.gif','https://cdn.weeb.sh/images/S1-KXsh0b.gif','https://cdn.weeb.sh/images/B1yv36_PZ.gif','https://cdn.weeb.sh/images/BJx2l0ttW.gif']

let res = Math.floor(Math.random() * replies.length);

let loveEmbed = new Discord.MessageEmbed()
        .setColor('#cb05e2')
        .setDescription(`${message.author} fait un bisous à ${user} ! <a:Bisous2:756978408159969281>`)
        .setImage(replies[res])
        .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`)
   message.reply({embeds : [loveEmbed]})


}})