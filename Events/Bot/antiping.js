const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const ms = require("ms");

const forbiddenUsers = ["ID1", "ID2", "ID3"]; //List des personne à pas ping

const allowedChannels = ["ID1", "ID2", "ID3"]; // Liste des salons autorisés


module.exports = new Event("messageCreate", async (bot, message, guild, args) => {
if(message.guild.id !== "1040701512298541106") return

    const db = bot.db;
    const user = message.author;
    if(message.author.bot || message.system) return;

    let robot = "1013135812545753119" //ID de ton Bot
    
    if (allowedChannels.includes(message.channel.id)) {
        return; // Ignorer les messages dans les salons autorisés
    }

    db.query(`SELECT * FROM wl WHERE userID = ${user.id}`, async (err, req) => {
        if (req.length < 1) {

            const mentions = message.mentions.users;
            const ID = await bot.function.createID("WARN");

            if (mentions.some(mention => forbiddenUsers.includes(mention.id)) && !message.reference) {
                db.query(`SELECT * FROM ping WHERE userID = ${message.author.id}`, async (err, pingResult) => {
                    const pingCount = pingResult.length > 0 ? parseInt(pingResult[0].nombre) + 1 : 1;
                    const muteDuration = ms(`${pingCount * 2}m`); // Calculer la durée du mute en fonction du nombre de pings

                    const muteDurationMinutes = muteDuration / 60000; // Convertir la durée du mute en minutes
                    message.reply(`Il est interdit de **ping** un staff. Vous avez été muté pendant \`${muteDurationMinutes} minutes\` `);

                    let sql = `INSERT INTO warns (userID, authorID, warnID, guildID, reason, date) VALUES (${message.author.id}, '${robot}', '${ID}', '${message.guildId}', 'Ping Elexyr22 [Automod]', '${Date.now()}')`
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })

                    await message.guild.members.cache.get(message.author.id).timeout(muteDuration, "Ping Admin");

                    if (pingResult.length < 1) {
                        sql = `INSERT INTO ping (userID, nombre) VALUES (${message.author.id}, '1')`
                    } else {
                        sql = `UPDATE ping SET nombre = '${pingCount}' WHERE userID = ${message.author.id}`;
                    }
                    
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })
                });
            }
        }
    });
});
