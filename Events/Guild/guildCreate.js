const Event = require("../../Structure/Event");
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { token } = require("../../config")

module.exports = new Event("guildCreate", async (bot, guild) => {
    
    const commands = [
        new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Permet de connaître la latence du bot"),

        new SlashCommandBuilder()
        .setName("setprefix")
        .setDescription("Permet de changer le préfixe du bot")
        .addStringOption(option => option.setName("préfixe").setDescription("Le préfixe que le bot doit avoir").setRequired(true)),

        new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Permet de supprimer un nombre de messages")
        .addStringOption(option => option.setName("nombre").setDescription("Le nombre de messages a effacer").setRequired(true)),

        new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Permet de bannir définitivement un utilisateur")
        .addUserOption(option => option.setName("membre").setDescription("Le membre à bannir").setRequired(true))
        .addStringOption(option => option.setName("raison").setDescription("La raison du bannissement").setRequired(false)),

        new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Permet d'expulser un utilisateur")
        .addUserOption(option => option.setName("membre").setDescription("Le membre à expulser").setRequired(true))
        .addStringOption(option => option.setName("raison").setDescription("La raison de l'expulsion").setRequired(false)),

        new SlashCommandBuilder()
        .setName("help")
        .setDescription("Permet de connaître toutes les commandes du bot")
        .addStringOption(option => option.setName("commande").setDescription("La commande où vous voulez les informations").setRequired(false)),

        new SlashCommandBuilder()
        .setName("warn")
        .setDescription("Permet d'avertir un utilisateur")
        .addUserOption(option => option.setName("membre").setDescription("Le membre à avertir").setRequired(true))
        .addStringOption(option => option.setName("raison").setDescription("La raison de l'avertissement").setRequired(false)),

        new SlashCommandBuilder()
        .setName("antiraid")
        .setDescription("Permet d'activer ou de désactiver l'anti-raid")
        .addStringOption(option => option.setName("état").setDescription("L'état de l'anti-raid").setRequired(true)),

        new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Permet de débannir un utilisateur")
        .addUserOption(option => option.setName("membre").setDescription("Le membre à débannir").setRequired(true))
        .addStringOption(option => option.setName("raison").setDescription("La raison du débannissement").setRequired(false)),
        
        new SlashCommandBuilder()
        .setName("banner")
        .setDescription("Donne la bannière d'une personne")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("pp")
        .setDescription("Donne l'avatar d'une personne")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("pp-serveur")
        .setDescription("Donne l'avatar d'une personne"),

        new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("Donne les infos d'une personne")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("serveurinfo")
        .setDescription("Donne les infos d'un serveur"),
        
        new SlashCommandBuilder()
        .setName("gay")
        .setDescription("Permet de voir à combien de % tu es gay !")
        .addUserOption(option => option.setName("membre").setDescription("Le membre").setRequired(false)),

        new SlashCommandBuilder()
        .setName("vc")
        .setDescription("Nom de personne en vocal"),

        new SlashCommandBuilder()
        .setName("member")
        .setDescription("Nombre de membre sûr le serveur"),
        
        new SlashCommandBuilder()
        .setName("youtube")
        .setDescription("Permet de regardé Youtube"),
        
       new SlashCommandBuilder()
        .setName("poker")
        .setDescription("Permet de jouer au poker"),
        
    ]
      
    const rest = new REST({ version: "9" }).setToken(token)

    await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands }).catch(err => {if(err.code == "50001") return});
})