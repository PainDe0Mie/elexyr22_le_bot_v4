const Discord = require("discord.js")
const Event = require("../../Structure/Event")
const chalk = require("chalk")

module.exports = new Event("messageCreate", async (bot, message, guild) => {
if(message.author.bot) return;
if(message.guild === null) return;

const db = bot.db;
let member = message.author
    
 console.log(chalk.cyan(`[NEW MESSAGE :] ${member.username}  à envoyé le message "${message.content}" dans le channel : < ${message.channel.name} > sûr le serveur '${message.guild.name}' (${message.guildId})`))

db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {
    if(req.length < 1) {
        
 let sql = `INSERT INTO serveur (guildID, prefix, raid, welcome, welcomeID, logID, vocID, ticketID, roleID, roleBOT, antilien, spam, mention)VALUES (${message.guild.id}, '+', 'off', 'off', '0', '0', '0','0', '0', '0', 'off', 'off', 'off')`
        db.query(sql, function(err) {
            if(err) throw err;
        })


      message.reply("Le bot a bien **enregistrez** votre serveur, vous pouvez profiter du bot ! Prefix : `+`").then(async mess => setTimeout(async () => {mess.delete()}, 3000))
    return console.log(chalk.bgGreen(`[NEW DB] "${message.author.username}" à enregistré son serveur sûr: '${message.guild.name}'`))
    }
  
        let prefix = req[0].prefix
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

		if(message.content.includes(`<@${bot.user.id}>`) || message.content.includes(`<@!${bot.user.id}>`)) return message.reply(`<:elexyr22:1067501213085597806> Mon prefix est \`\`${prefix}\`\` `)
    
        let commandFile = bot.alias.get(command.slice(prefix.length))
        if(!message.content.startsWith(prefix)) return;
        if(!commandFile) return message.react("❓") && message.reply(`Cette commande **existe pas,** essaye \`${prefix}help\` !`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))

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
                return message.react("⏳") && message.reply("_Vous devez **attendre** pour utilisé cette commandes !_").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            }
        }

        cooldown.set(message.author.id, time);
        setTimeout(() => cooldown.delete(message.author.id), timeCooldown);
    
        if(commandFile.permission !== "Aucune" && message.author.id !== "1088442920530620477" && message.author.id !== "1071541431350603886" && message.author.id !== "1000825879221514302" && message.author.id !== "956183732841250946" && !message.member.permissions.has(new Discord.Permissions(commandFile.permission))) return message.reply("Vous n'avez pas la __permission requise__ pour exécuter **cette commande !**")
    
            commandFile.run(bot, message, args, db)

          })})
