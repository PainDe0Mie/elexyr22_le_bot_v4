const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["serv-inv", "inviteme", "im"],
    permission: "",
    category: "",
    cooldown: 1,

    async run(bot, message, args) {
        
    const db = bot.db;
      
    const user = message.author

    db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {

	if(req.length < 1) return message.reply("**Elexyr22 👑#0022** peut utilisé cette commande !") 

  if(req[0].statut === "OFF") return message.reply("**Elexyr22 👑#0022** peut utilisé cette commande !") 
  if(req[0].statut === "ACTIF") {

var guildID = bot.guilds.cache.get(args[0])
if(!guildID) return message.reply("*Je suis pas dessus bébé...*")      
        
let serveur = guildID.channels.cache.find(channel => channel.type === "GUILD_TEXT" && channel.permissionsFor(bot.user.id).has("CREATE_INSTANT_INVITE"))
if(!serveur) return message.reply("*Pas la perm...*")

let invite = await serveur.createInvite({ maxAge: 0, maxUses: 0 })
message.reply(`${invite}`)

}})
}})