const Command = require("../../Structure/Command")
const paginate = require('@eugabrielsilva/djs-paginate');
const Discord = require("discord.js")
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')

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


let page7 = new MessageEmbed({
    title: '7) Même',
    description: `${bot.commands.filter(cmd => cmd.category === "7) Même").map(cmd => "> `" + req[0].prefix + cmd.name + "` ➔ " + cmd.description).join("\n")}`,
    color: "#ffe700"
});


let pages = [page1, page2, page3, page4, page5, page7]; 

paginate(message, pages); // PAS TOUCHE
    });


},



})
