const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "",
    description: "",
    utilisation: "",
    alias: ["claim"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "",
    cooldown: 10,

    async run(bot, message, guild, member, memberCount) {

      const db = bot.db;

      db.query(`SELECT * FROM nitro WHERE guildID = ${message.guild.id}`, async (err, req) => {

        const serveur = message.guild.memberCount
        let nombre = ["30"]
        
        if(serveur < nombre) {
        const final = (nombre - serveur);
        return message.reply("Tu n'a pas assez de __membres__ sûr ton serveur... *(30 membres minimium)*")}

        if(req.length < 1) return

        db.query(`UPDATE user SET robot = 'ON' WHERE userID = ${message.author.id}`)
        message.reply("<:Elexyr22:754441336849170543> Ton serveur à bien été __enregistré__ pour le **drop-nitro**, ne kick pas le bot. <a:valide_or:1067501018906108024> \n\n Le résulat sera sûr le serveur : discord.gg/elexyr22")}
      )}})
        
    
