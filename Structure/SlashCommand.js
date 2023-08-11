const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const Builders = require("@discordjs/builders")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../config")

module.exports = async(bot) => {

    const commands = []
      
    const rest = new REST({ version: "9" }).setToken(token)

    bot.guilds.cache.forEach(async guild => {
        
        await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands });
    })

    console.log("Les slashs commandes ont été créées avec succès !")
}
