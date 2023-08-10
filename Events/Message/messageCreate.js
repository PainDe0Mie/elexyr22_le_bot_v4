const Discord = require("discord.js")
const Event = require("../../Structure/Event")
const chalk = require("chalk")

module.exports = new Event("messageCreate", async (bot, message, guild) => {
if(message.author.bot) return;

const db = bot.db;
    
let member = message.author
    
 console.log(chalk.cyan(`[NEW MESSAGE :] ${member.username}  à envoyé le message "${message.content}" dans le channel : < ${message.channel.name} > sûr le serveur '${message.guild.name}' (${message.guildId})`))  

db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {
    if(req.length < 1) {
        
 let sql = `INSERT INTO serveur (guildID, prefix, raid, welcome, welcomeID, logID)VALUES (${message.guild.id}, 'e!', 'off', 'off', '0', '0')`
        db.query(sql, function(err) {
            if(err) throw err;
        })

      return message.reply(" <:elexyr22:1067501213085597806> Le bot a bien **enregistrez** votre serveur, vous pouvez profiter du bot ! Prefix : `e!` <a:valide_or:1067501018906108024> ").then(async mess => setTimeout(async () => {mess.delete()}, 20000))
    }


        let prefix = req[0].prefix

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

		if(message.content.includes(`<@${bot.user.id}>`) || message.content.includes(`<@!${bot.user.id}>`)) return message.reply(`<:elexyr22:1067501213085597806> Mon prefix est \`\`${prefix}\`\` `)
    
        let commandFile = bot.alias.get(command.slice(prefix.length))

        if(!message.content.startsWith(prefix)) return;
        if(!commandFile) return message.react("❓") && message.reply(" <:elexyr22:1067501213085597806> Cette commande **existe pas,** essaye `e!help` ! <a:mmhh:1067175530509639791> ").then(async mess => setTimeout(async () => {mess.delete()}, 20000))

        if(!bot.cooldown.has(commandFile.name)) {
            bot.cooldown.set(commandFile.name, new Discord.Collection())
        }

const time = Date.now();
        const cooldown = bot.cooldown.get(commandFile.name);
        const timeCooldown = (commandFile.cooldown || 5) * 1000;

        if(cooldown.has(message.author.id)) {

            const timeRestant = cooldown.get(message.author.id) + timeCooldown;

            if(time < timeRestant) {

                const timeLeft = (timeRestant - time);

                return message.react("⏳") && message.reply(" <:elexyr22:1067501213085597806> Vous devez **attendre** pour utilisé cette commandes ! <a:fox_work:1065710430980411482> ").then(async mess => setTimeout(async () => {mess.delete()}, 20000))
            }
        }

        cooldown.set(message.author.id, time);
        setTimeout(() => cooldown.delete(message.author.id), timeCooldown);

        /* if(commandFile.permission === "Développeur" && message.author.id !== conf.owner) return message.reply("<:Elexyr22:754441336849170543> Vous n'avez pas la __permission requise__ pour exécuter **cette commande !** <a:Nop1:768183643020853298>").then(async mess => setTimeout(async () => {mess.delete()}, 5000)) */
        //if(message.author.id.commandFile.permission === "998210063506354236"
        
    
        if(commandFile.permission !== "Aucune" && message.author.id !== "1088442920530620477" && message.author.id !== "1071541431350603886" && message.author.id !== "1000825879221514302" && message.author.id !== "956183732841250946" && !message.member.permissions.has(new Discord.Permissions(commandFile.permission))) return message.reply(" <:elexyr22:1067501213085597806> Vous n'avez pas la __permission requise__ pour exécuter **cette commande !** <a:nop1:1077625741275050034> ")
    
            commandFile.run(bot, message, args, db)

       /* db.query(`SELECT * FROM salon WHERE guildID = ${message.guild.id}`, async (err, req) => {

            if(req.length < 1) {
    
            let sql = `INSERT INTO salon (guildID, statut, channelID) VALUES (${message.guild.id}, 'off', '0')`
            db.query(sql, function(err) {
                if(err) throw err;
            }}) */


          })})
