const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event")
const ms = require("ms");

module.exports = new Event("guildMemberAdd", async (bot, member, user) => {
    
    const db = bot.db;
    console.log(chalk.blue(`[JOIN SERVEUR :] ${member.user.username} viens de rejoindre ${member.guild.name} (${member.guild.id}) !`))

    db.query(`SELECT * FROM joins WHERE userID = ${member.user.id}`, async (err, req) => {
        if(member.guild.id !== "1040701512298541106") return;
        if(req.length < 1) {

            let sql = `INSERT INTO joins (userID, number)VALUES (${member.user.id}, '1')`
            db.query(sql, function(err) {
                if(err) throw err;

        })} else {
		let xp = 1
            sql = `UPDATE joins SET number = '${parseInt(req[0].number) + xp}' WHERE userID = ${member.user.id}`
            db.query(sql, function (err){
              if(err) throw err;
            })}
    
      let triggerTime = Date.now()
      let timestampInMilliseconds = triggerTime
      let timestampInSeconds = Math.floor(timestampInMilliseconds / 1000); 

      db.query(`SELECT * FROM joins WHERE userID = ${member.user.id}`, async (err, req) => {

    let Embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setTitle("New Join :")
    .setDescription(`**User:** ${member} | **_(${member.user.username})_** \n\n **ID:** \`\`${member.id}\`\`\n\n **A Rejoint:** <t:${timestampInSeconds}:R> \n\n **Compte Créé le:** <t:${Math.floor(member.user.createdAt / 1000)}:F>\n\n **A rejoint:** \`\`${req[0].number}\`\` __/ fois__`) //\n\n Join: \`\`${member.guild.name}\`\`**
     .setImage(await (await bot.users.fetch(member.user, {force: true})).bannerURL({dynamic: true, size: 4096}))
     .setTimestamp()

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {
	if(req.length < 1) return

   let channel = member.guild.channels.cache.get(`${req[0].logID}`)
    if(!channel) return;
    await channel.send({embeds: [Embed]})

})})})})
