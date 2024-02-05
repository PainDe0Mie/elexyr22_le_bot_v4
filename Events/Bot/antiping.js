const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const ms = require("ms");

// Liste des utilisateurs interdits de ping: elexyr, sho, pain, magic, lodi et Adam
const forbiddenUsers = ["1088442920530620477", "902859548740698144", "625762406559121419", "700417479243071608", "449249368998936587", "1131737651423219762"];

const disabledCategoryID = "1065927424900071494"

module.exports = new Event("messageCreate", async (bot, message, guild, args) => {

    const db = bot.db;
    const user = message.author;
    if (message.author.bot || message.system) return;
    
    if (message.channel.parent && message.channel.parent.id === disabledCategoryID) {
        return; // Désactiver l'anti-ping dans cette catégorie
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
message.reply(`<:elexyr22:1067501213085597806> Il est interdit de **ping** un membre du staff. Vous avez été mute pendant \`${muteDurationMinutes} minutes\` <a:nop1:1068106487358038126>`);

                    
                    await message.guild.members.cache.get(message.author.id).timeout(muteDuration, "Ping Admin");

                    let sql = `INSERT INTO warns (userID, authorID, warnID, guildID, reason, date) VALUES (${message.author.id}, '1013135812545753119', '${ID}', '${message.guildId}', 'Ping Elexyr22 [Automod]', '${Date.now()}')`
                    db.query(sql, function (err) {
                        if (err) throw err;
                    })

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
