const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message, member, guild) => {
    
    const db = bot.db;
   let user = message.author
    db.query(`SELECT * FROM gban WHERE userID = ${user.id}`, async (err, req) => {
	if(req.length < 1) return
        
   message.reply(` Vous êtes **blacklist** pour :: \`\`${req[0].reason}"\`\`, vous allez être banni dans __5 secondes !__`)
   user.send(` Vous êtes **Blacklist** pour :: **"${req[0].reason}"**, vous pouvez plus __rejoindre__ de serveurs ou le bot est __présent...__ \n > **Actuellement :** \`\`${bot.guilds.cache.size}\`\` serveurs et leur \`\`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`\` \`\`membres ! <a:ftnl:933837014145589298>`).catch(console.error);
user.send("https://tenor.com/view/train-seum-ta-le-cheh-gif-20542776").catch(console.error)
await message.guild.bans.create(user.id, {reason: `Blacklist pour: ${req[0].reason}`}).catch(console.error);
const channel = bot.channels.cache.get("1125391799716954152")  
channel.send(`<@${req[0].userID}> *(${req[0].user})* ||${req[0].userID}|| à été banni après avoir **envoyé un message** sûr ${message.guild.name} *(${message.guildId})* pour  ${req[0].reason}`)
})})

        