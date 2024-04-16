const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const ms = require("ms");

module.exports = new Event("interactionCreate", async (bot, interaction) => {

    const db = bot.db;

    if(interaction.isCommand()) {

        const command = bot.commands.get(interaction.commandName)
               ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /*if(!bot.cooldown.has(command.name)) {
            bot.cooldown.set(command.name, new Discord.Collection())
        } 

        const time = Date.now();
        const cooldown = bot.cooldown.get(command.name);
        const timeCooldown = (command.cooldown || 5) * 1000;

        if(cooldown.has(interaction.user.id)) {

            const timeRestant = cooldown.get(interaction.user.id) + timeCooldown;

            if(time < timeRestant) {

                const timeLeft = (timeRestant - time);

                return
            }
        } 

        cooldown.set(interaction.user.id, time);
        setTimeout(() => cooldown.delete(interaction.user.id), timeCooldown); 

        if(command.permission === "Développeur" && interaction.user.id !== conf.owner) return interaction.reply("Vous n'avez pas la permission requise pour exécuter cette commande !")
        if(command.permission !== "Aucune" && command.permission !== "Développeur" && !interaction.member.permissions.has(new Discord.Permissions(command.permission))) return interaction.reply("Vous n'avez pas la permission requise pour exécuter cette commande !") 

        command.run(bot, interaction, interaction.options, bot.db)
    }

      if(interaction.isUserContextMenu()) {

        const command = bot.commands.get(interaction.commandName)

        command.run(bot, interaction, interaction.options, bot.db)*/
    }    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//claim bump commu
    
if(interaction.isButton()) {

    if(interaction.customId === "bumps") {
      const bumper = "ON"

      db.query(`SELECT * FROM bump WHERE guildID = '${interaction.guild.id}'`, async (err, req) => {
        if(req.length < 1) return
        if(req[0].statut === "OFF") return interaction.reply({content: ` __Le bump__ a déjà été **réclamé** par <@${req[0].userID}>, s'il l'a __volé__, fais un: Ticket. `, ephemeral: true})

 
      await interaction.reply({content: `Tu a bien **réclamé** __le bump__ ! `, ephemeral: true})
      db.query(`UPDATE bump SET statut = 'OFF' WHERE guildID = '${interaction.guild.id}'`)
      db.query(`UPDATE bump SET userID = ${interaction.user.id} WHERE guildID = '${interaction.guild.id}'`)

     db.query(`SELECT * FROM user WHERE userID = ${interaction.user.id}`, async (err, req) => {
     if(req.length < 1) return
     db.query(`UPDATE user SET bump = ${req[0].bump} + 1 WHERE userID = ${interaction.user.id}`)
      })

      let time = "2h"
      let parsedTime = ms(time);
      let triggerTime = Date.now() + parsedTime;

  let reason = " ``/bump`` avec <@302050872383242240> !"

  // Insérer les informations du minuteur dans la table "timers"
  let sql = `INSERT INTO rmd (userID, timer, reason) VALUES ('${interaction.user.id}', '${triggerTime}', '${reason}')`;
  db.query(sql, function (err) {
    if (err) {
      console.error("Erreur lors de l'insertion du minuteur :", err);
      return interaction.channel.send("*Une erreur s'est produite lors de la définition du minuteur...*");
    }
    const timestampInMilliseconds = triggerTime
    const timestampInSeconds = Math.floor(timestampInMilliseconds / 1000);  

    })})}}})
          
/*if(interaction.isButton()) {
    if (interaction.customId === "verif") {
     db.query(`SELECT * FROM verif WHERE guild = ${interaction.guild.id}`, async (err, req) => {

         interaction.member.roles.add(req[0].role)

     })
 interaction.reply({content: `<:elexyr22:1067501213085597806> **Tu a désormais accès au serveur !** <a:valide_or:1067501018906108024>`, ephemeral: true}) */
