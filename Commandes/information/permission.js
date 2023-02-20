const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "permission",
    description: "Donne t'es permissions d'un serveur",
    utilisation: "",
    alias: ["permission","perm"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

const yes = '<a:Valide_Or:756978408159707136>'
const no = '<a:Non_3:756978403776921640>'

const x = ""
const s = '<a:Valide_Or:756978408159707136>'
const c = '<a:Non_3:756978403776921640>'

const permissions = [
  'CREATE_INSTANT_INVITE',
  'KICK_MEMBERS',
  'BAN_MEMBERS',
  'ADMINISTRATOR',
  'MANAGE_CHANNELS',
  'MANAGE_GUILD', 
  'ADD_REACTIONS',
  'VIEW_AUDIT_LOG',
  'PRIORITY_SPEAKER',
  'STREAM',
  'VIEW_CHANNEL',
  'SEND_MESSAGES',
  'SEND_TTS_MESSAGES',
  'MANAGE_MESSAGES',
  'EMBED_LINKS',
  'ATTACH_FILES',
  'READ_MESSAGE_HISTORY',
  'MENTION_EVERYONE',
  'USE_EXTERNAL_EMOJIS',
  'VIEW_GUILD_INSIGHTS',
  'CONNECT',
  'SPEAK',
  'MUTE_MEMBERS',
  'DEAFEN_MEMBERS',
  'MOVE_MEMBERS',
  'USE_VAD',
  'CHANGE_NICKNAME',
  'MANAGE_NICKNAMES',
  'MANAGE_ROLES',
  'MANAGE_WEBHOOKS',
  'MANAGE_EMOJIS_AND_STICKERS',
]
 let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value) : (message.mentions.users.first() || await bot.users.fetch(args[0]))
           if(!user) return message.reply("Aucune personne trouvée !")
       } else user = message.user ? message.user : message.author;
        if(user == undefined) return message.reply("Veuillez mentionner un utilisateur ou fournir un ID valide !");

let description = `Perm sûr le serveur : ${s}\n Perm dans le salon :  ${c}\n\n${s} | ${c}\n`

let embed = new Discord.MessageEmbed()
.setTitle(`Permissions de :${message.username}`)
.setColor(user.displayColor)
permissions.forEach(perm => { 
description += `${user.permissions.has(perm) ? yes : no} | ${message.channel.permissionsFor(userId).has(perm) ? yes : no} - ${perm.replace('CREATE_INSTANT_INVITE', 'Créé une invite,').replace('KICK_MEMBERS', 'Kick des membres').replace('BAN_MEMBERS', 'Ban des membres').replace('ADMINISTRATOR', 'Administrateur').replace('MANAGE_CHANNELS', 'Gestion des salons').replace('MANAGE_GUILD', 'Gestion du serveur').replace('ADD_REACTIONS', 'Ajout d\'\émote').replace('VIEW_AUDIT_LOG', 'Voir les logs').replace('PRIORITY_SPEAKER', 'Voie Prioritaire').replace( 'STREAM', 'Stream en vocal').replace('VIEW_CHANNEL', 'Voir les salons').replace('SEND_MESSAGES', 'Envoyé un message').replace('SEND_TTS_MESSAGES', 'Envoyé un message TTS').replace('MANAGE_MESSAGES', 'Géré les messages').replace('EMBED_LINKS', 'Envoyé des liens').replace('ATTACH_FILES', 'Envoyé des fichiers').replace('READ_MESSAGE_HISTORY', 'Voir l\'\historique').replace('MENTION_EVERYONE', 'Mention Everyone / here').replace('USE_EXTERNAL_EMOJIS', 'Utilisé des émojis externe').replace('VIEW_GUILD_INSIGHTS', 'Voir info du serveur').replace('CONNECT', 'Connectez à des salons vocaux').replace('SPEAK', 'Parler vocalement').replace('MUTE_MEMBERS', 'Mutes les membres').replace('DEAFEN_MEMBERS', 'Defean Members').replace('MOVE_MEMBERS','Moove les membres').replace('USE_VAD', 'Use VAD').replace('CHANGE_NICKNAME', 'Changé les pseudo').replace('MANAGE_NICKNAMES', 'Géré les pseudos').replace('MANAGE_ROLES', 'Géré les rôles').replace('MANAGE_WEBHOOKS', 'Géré les Webhooks').replace('MANAGE_EMOJIS_AND_STICKERS', 'Géré les émotes / Stickers')}\n` 
})
embed.setDescription(x + description + x)

message.reply({embeds : [embed]})
    }
})