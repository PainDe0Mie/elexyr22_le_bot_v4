const Discord = require("discord.js")
const Command = require("../../Structure/Command")                                                                          

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["set-xp"],
    permission: "",
    category: "",
    cooldown: 1,

    async run(bot, message, args) {
        
   if(message.author.id !== "1046761650675519499") return;
        
         const db = bot.db

      let user;
       if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
           user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
           if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
       } else {
           user = message.user ? message.user : message.author;
       }
       if(!user) return message.reply("<:elexyr22:1067501213085597806> Cet utilisateur n'existe pas... <a:nop1:1068106487358038126>");
        
        let reason = message.user ? (args._hoistedOptions.length > 1 ? args._hoistedOptions[1].value : undefined) : args.slice(1).join(" ");  
        db.query(`SELECT * FROM user WHERE userID = ${user.id}`, async (err, req) => {

       if(req.length < 1) return message.reply("<:elexyr22:1067501213085597806> *Cette personne n'est pas enregistrée dans le bot...* <a:snif:1069970251279769641>")

       db.query(`UPDATE user SET xp = '${reason}' WHERE userID = ${user.id}`)
                     
       message.reply(`${user} à été changé !`)
              
            })}})
