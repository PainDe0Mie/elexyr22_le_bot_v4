const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("guildMemberAdd", async (bot, user, guild) => {
    
    const db = bot.db;
    db.query(`SELECT * FROM gban WHERE userID = ${user.id}`, async (err, req) => {
	if(req.length < 1) return

user.send(` Vous êtes **Blacklist** pour :: **"${req[0].reason}"**, vous pouvez plus __rejoindre__ de serveurs ou le bot est __présent...__ \n > **Actuellement :** \`\`${bot.guilds.cache.size}\`\` serveurs et leur \`\`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`\` \`\`membres !`).catch(console.error);
user.send("https://tenor.com/view/train-seum-ta-le-cheh-gif-20542776").catch(console.error)
user.ban({reason: `Blacklist pour: ${req[0].reason}`}).catch(console.error);
const channel = bot.channels.cache.get("1125391799716954152")  
channel.send(`${req[0].user} à été banni après **avoir join** ${user.guild.name} *(${user.guild.id})* pour  ${req[0].reason}`)
})})

        