const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["uwu"],
    permission: "",
    category: "",
    cooldown: 1,
    async run(bot, message, args) {
        
        const db = bot.db;
      
        const user = message.author
    
        db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {
    
        if(req.length < 1) return message.reply("<:elexyr22:1067501213085597806> Uniquement les **Admins** peut utilisé cette commande ! <a:nop1:1068106487358038126>") 
    
      if(req[0].statut === "OFF") return message.reply("<:elexyr22:1067501213085597806> Uniquement les **Admins** peut utilisé cette commande ! <a:nop1:1068106487358038126>") 
      if(req[0].statut === "ACTIF") {
        
        let salon = message.mentions.channels.first() || await bot.channels.fetch(args[0])
        let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");

        salon.send(reason)
   	//salon.send(reason).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

}})}})

