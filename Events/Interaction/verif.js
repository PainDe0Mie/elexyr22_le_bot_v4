const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {

    const db = bot.db;

          if(interaction.isButton()) {
           if (interaction.customId === "verif") {
            db.query(`SELECT * FROM verif WHERE guild = ${interaction.guild.id}`, async (err, req) => {

                interaction.member.roles.add(req[0].role)

            })
        interaction.reply({content: `<:elexyr22:1067501213085597806> **Tu a désormais accès au serveur !** <a:valide_or:1067501018906108024>`, ephemeral: true})


        let Embed = new Discord.MessageEmbed()
        .setColor("#45ff00")
        .setTitle("New Membre Vérifié")
        .setDescription(`${interaction.user} - ${interaction.user.username} *(${interaction.id})* viens de validé la **vérification !**`)
         .setTimestamp()
    
        db.query(`SELECT * FROM serveur WHERE guildID = ${interaction.guildId}`, async (err, req) => {
    
            if(req.length < 1) return;
    
       let channel = interaction.guild.channels.cache.get(`${req[0].logID}`)
        if(!channel) return;
        await channel.send({embeds: [Embed]})
    })}}})