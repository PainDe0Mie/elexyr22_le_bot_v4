const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand")
const chalk = require("chalk")

module.exports = new Event("ready", async bot => {

    await SlashCommand(bot);

    let statuses = [
        "Powerred by LWS",
        "swiperight.fr",
        `${bot.guilds.cache.size} serveurs`,
    ];
    setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {
           type: "STREAMING",
           url: "https://www.twitch.tv/elexyr22_",
       });
   }, 5000);


    console.log(chalk.bgGreen(`${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveurs, surveille ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} membres, son ping : ${bot.ws.ping} ms !`))
   
    const channel = bot.channels.cache.get("1125390156468326480")  
    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle("Bot démarré !")
    .setDescription(`Bot sur \`\`${bot.guilds.cache.size}\`\` **serveurs,** surveille \`\`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`\` **membres !**`)
    .setTimestamp()
    .setFooter(`Le Ping : ${bot.ws.ping} ms...`)
     channel.send({ embeds: [embed]})
})