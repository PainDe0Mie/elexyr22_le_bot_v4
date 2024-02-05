const Discord = require("discord.js")
const chalk = require("chalk")
const Event = require("../../Structure/Event")
const ms = require("ms");

module.exports = new Event("guildMemberRemove", async (bot, member, user) => {
    
    const db = bot.db;
    console.log(chalk.magenta(`[LEAVE SERVEUR]  : ${member.user.username} viens de quitté ${member.guild.name} (${member.guild.id}) !`))
    
    const guildMember = await member.guild.members.fetch({ user, force: true }).catch(() => null);
    const joinedDate = guildMember ? guildMember.joinedAt : null;
    const formattedDate = joinedDate ? `<t:${Math.floor(joinedDate.getTime() / 1000)}>` : '*Aucune donnée*';

      db.query(`SELECT * FROM joins WHERE userID = ${member.user.id}`, async (err, req) => {
        if(member.guild.id !== "1040701512298541106") return;

    let Embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
    .setTitle("New Leave :")
    .setDescription(`**User:** ${member} | **_(${member.user.username})_** \n\n **ID:** \`\`${member.id}\`\`\n\n **Avait Rejoint:** 
    ${formattedDate} \n\n **Compte Créé le:** <t:${Math.floor(member.user.createdAt / 1000)}:F>\n\n **A rejoint:** \`\`${req[0].number}\`\` / __fois__`) //\n\n Join: \`\`${member.guild.name}\`\`**
     .setImage(await (await bot.users.fetch(member.user, {force: true})).bannerURL({dynamic: true, size: 4096}))
     .setTimestamp()

    db.query(`SELECT * FROM serveur WHERE guildID = ${member.guild.id}`, async (err, req) => {
	if(req.length < 1) return

   let channel = member.guild.channels.cache.get(`${req[0].logID}`)
    if(!channel) return;
    await channel.send({embeds: [Embed]})

})})})
