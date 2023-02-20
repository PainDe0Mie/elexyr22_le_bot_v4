const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message, guild) => {
 if(message.author.bot) return;
    
    const db = bot.db;

    db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

        
    if(req.length < 1) {

      let sql = `INSERT INTO serveur (guildID, prefix, raid, welcome, welcomeID, logID)VALUES (${message.guild.id}, '+', 'off', 'off', '0', '0')`
        db.query(sql, function(err) {
            if(err) throw err;
        })

      return message.reply("Le bot a bien **enregistrez** votre serveur, vous pouvez profiter du bot ! Prefix : `+`")
    }


        let prefix = req[0].prefix

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        let commandFile = bot.alias.get(command.slice(prefix.length))


        db.query(`SELECT * FROM user WHERE userID = ${message.author.id}`, async (err, req) => {

            if(req.length < 1) {

                let sql = `INSERT INTO user (userID, xp, level, afk) VALUES (${message.author.id}, '0', '0', 'off')`
                db.query(sql, function(err) {
                    if(err) throw err;
                })

            } else {

                if(!message.content.startsWith(prefix)) {

                    let xp = Math.floor(Math.random() * 24) + 1;
                    let need = (parseInt(req[0].level) + 1) * 1000;

                    db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) + xp}' WHERE userID = ${message.author.id}`)

                    if(parseInt(req[0].xp) >= need) {

                        db.query(`UPDATE user SET level = '${parseInt(req[0].level) + 1}' WHERE userID = ${message.author.id}`)
                        db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)

                        message.channel.send(`<:Elexyr22:754441336849170543> Bravo ${message.author}, tu es passé niveau \`${parseInt(req[0].level) + 1}\` !<a:Youpi3:783009990553239572>`)
                    }

                    if(parseInt(req[0].xp) < 0) {

                        db.query(`UPDATE user SET level = '${parseInt(req[0].level) - 1}' WHERE userID = ${message.author.id}`)
                        db.query(`UPDATE user SET xp = '${(parseInt(req[0].level) * 1000) + parseInt(req[0].xp)}' WHERE userID = ${message.author.id}`)

                        message.channel.send(`Dommage ${message.author}, tu es redescendu niveau \`${parseInt(req[0].level) - 1}\``)
                    }
                }
            }
        })

         if(!message.content.startsWith(prefix)) return;
        if(!commandFile) return message.react("❓")

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

                return message.react("⏳")
            }
        }

        cooldown.set(message.author.id, time);
        setTimeout(() => cooldown.delete(message.author.id), timeCooldown);

        /* if(commandFile.permission === "Développeur" && message.author.id !== conf.owner) return message.reply("<:Elexyr22:754441336849170543> Vous n'avez pas la __permission requise__ pour exécuter **cette commande !** <a:Nop1:768183643020853298>").then(async mess => setTimeout(async () => {mess.delete()}, 5000)) */
        //if(message.author.id.commandFile.permission === "998210063506354236"
        
        if(commandFile.permission !== "Aucune" && message.author.id !== "998210063506354236" && !message.member.permissions.has(new Discord.Permissions(commandFile.permission))) return message.reply("Vous n'avez pas la __permission requise__ pour exécuter **cette commande !**").then(async mess => setTimeout(async () => {mess.delete()}, 5000))

        commandFile.run(bot, message, args, db)


        
    })
})