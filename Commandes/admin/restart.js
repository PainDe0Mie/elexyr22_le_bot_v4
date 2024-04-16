const Discord = require("discord.js");
const Command = require("../../Structure/Command");

module.exports = new Command({
    name: "",
    description: "",
    utilisation: "",
    alias: ["restart", "reboot"],
    permission: "",
    category: "",
    cooldown: 1,

  async run(bot, message, args) {

    const db = bot.db;
      
    const user = message.author

    db.query(`SELECT * FROM admin WHERE userID = ${user.id}`, async (err, req) => {

	if(req.length < 1) return message.reply("Uniquement les **Admins** peut utilisé cette commande ! ") 

  if(req[0].statut === "OFF") return message.reply("Uniquement les **Admins** peut utilisé cette commande ! ") 
  if(req[0].statut === "ACTIF") {     

    try {
      await message.reply("Ça y est, le bot est en train de se refaire une beauté !");
      await bot.destroy();
      process.exit(0);
    } catch (error) {
      console.error(error);
      await message.reply("*Y'a un beugue là, le bot a planté quand j'ai essayé de le restart.*");
    }}})}})
