const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand")

module.exports = new Event("ready", async bot => {

    await SlashCommand(bot);

    let statuses = [
        "powered by Axial-host!",
        "powered by Axial-host!",
        "discord.gg/elexyr22",
        `${bot.guilds.cache.size} serveurs`
    ];
    setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {
           type: "STREAMING",
           url: "https://www.twitch.tv/elexyr22_",
       });
   }, 5000);


    console.log(`${bot.user.username} (${bot.user.id}) : En ligne sur ${bot.guilds.cache.size} serveur(s) !`)
})