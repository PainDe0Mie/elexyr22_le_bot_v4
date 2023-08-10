const Command = require("../../Structure/Command")
const paginate = require('@eugabrielsilva/djs-paginate');
const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const chalk = require("chalk")

module.exports = new Command({

    name: "help",
    description: "Permet de connaître toutes les commandes du bot",
    utilisation: "",
    alias: ["help", "h", "aide"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {
    let page1 = new MessageEmbed({
    title: '1) Modération',
    description: `${bot.commands.filter(cmd => cmd.category === "1) Modération").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});

let page2 = new MessageEmbed({
    title: '2) Information',
    description: `${bot.commands.filter(cmd => cmd.category === "2) Information").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});

let page3 = new MessageEmbed({
    title: '3) Utile',
    description: `${bot.commands.filter(cmd => cmd.category === "3) Utile").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});

let page4 = new MessageEmbed({
    title: '4) Fun',
    description: `${bot.commands.filter(cmd => cmd.category === "4) Fun").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});

let page5 = new MessageEmbed({
    title: '5) Mini-Jeux',
    description: `${bot.commands.filter(cmd => cmd.category === "5) Mini-Jeux").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
   color: "#ffe700"
});

let page6 = new MessageEmbed({
    title: '6) NSFW',
    description: `${bot.commands.filter(cmd => cmd.category === "6) NSFW").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});

let page7 = new MessageEmbed({
    title: '7) Même',
    description: `${bot.commands.filter(cmd => cmd.category === "7) Même").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});

console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!help sûr '${message.guild.name}'`))
let pages = [page1, page2, page3, page4, page5, page6, page7]; 
            

paginate(message, pages); // PAS TOUCHE
    });

 /*   const row1 = new Discord.MessageActionRow().addComponents(
        new MessageButton()
        .setURL(`https://discord.com/oauth2/authorize?client_id=1013135812545753119&permissions=2146958591&scope=bot&redirect_uri=https://discord.com/invite/elexyr22&response_type=code`)
        .setLabel('> Ajouter Elexyr22 Le Bot : <')
        .setEmoji("👑")
        .setStyle('LINK'),)
    
        const embed2 = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setDescription("<:elexyr22:1067501213085597806> **Drop Elexyr22 Le Bot** \n\n <:warn:929838977874296883> **Conditions :** Votre Serveur doit au minimum avoir **10 membres** pour participer a la loterie ! \n\n ``e!claim`` : permet de participer, \n``e!winner`` : permet de voir le gagnant du mois dernier. \n\n **Tirage le 05 Février.** \n\n <a:argent1:1066477696055517295> Bonne Chance a Tous !")
        message.channel.send({embeds: [embed2], components: [row1]}) */

},



})