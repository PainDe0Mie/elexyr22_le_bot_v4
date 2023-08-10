const Event = require("../../Structure/Event");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../../config")

module.exports = new Event("guildCreate", async (bot, guild) => {
/* var msg = guild.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(bot.user.id).has("SEND_MESSAGES"))
msg.send("e!invitex").then(sent => sent.delete({timeout: 5e3})) */
 const commands = [
        
    ]
      
    const rest = new REST({ version: "9" }).setToken(token)

    await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands }).catch(err => {if(err.code == "50001") return});
})