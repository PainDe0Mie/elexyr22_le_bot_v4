const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const {QuickDB} = require("quick.db")

module.exports = new Event("guildMemberAdd", async (bot, member) => {


    const serv = member.guild.name
    const db = bot.db

    const { QuickDB } = require('quick.db');
    const dbs = new QuickDB();
    const blacklist = dbs.table(`whitelist`);
    const fetched = await blacklist.get(member.id)
    if(fetched) return;

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {

        if(req.length < 1) return;
        //if(member.id === "998210063506354236") return

        if(req[0].raid === "on") {

            try {
                 const embed1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`ANTI-RAID INTELLIGENT 6.0 :`)
                .setDescription(`<a:ftnl:933837014145589298> ・Un **Raid Token** en cours sûr :  \`${serv}\`, \n réessaye dans __10 min,__ après que j'ai **banni** tout les **TOKEN !**`)
                .setTimestamp()
                .setFooter(`Anti-Raid intelligent 6.0 by Elexyr22👑 #0022`, `https://cdn.discordapp.com/attachments/765158755905961984/847433801013264404/PP_FR.gif`)

                await member.user.send({ embeds: [embed1] }) 
            } catch (err) {} 

            await member.kick(" L'anti-Raid est bien activé !")
        }


    })})
