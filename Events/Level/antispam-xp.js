const Event = require("../../Structure/Event");

const UserMap = new Map();

module.exports = new Event("messageCreate", async (bot, message) => {
/*if(message.guild.id !== "1040701512298541106") return; // id de la commu
if(message.channel.id !== "1085672913778253894") return; //ceulement la discution

    const uwu = message.author;
    if(uwu.id === message.guild.ownerId) return
    if(uwu.bot) return;
    
  if(UserMap.get(uwu.id)) {
    const UserData = UserMap.get(uwu.id);
    const { lastMessage, timer } = UserData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = UserData.msgCount;
    const db = bot.db;

    if (difference > 3000) {
      clearTimeout(timer);
      UserData.msgCount = 1;
      UserData.lastMessage = message;

      UserData.timer = setTimeout(() => {
        UserMap.delete(uwu.id);
      }, 10000);

      UserMap.set(uwu.id, UserData);
    } else {
      msgCount++;

      if (msgCount >= 3) {
        const member = message.guild.members.cache.get(uwu.id);
        await message.channel.send(`<:elexyr22:1067501213085597806> ${member}, j'ai détecté votre **Flood,** je viens de vous retirer __10 xp !__ <a:alerte2:1067594465344225322>`);
        db.query(`SELECT * FROM user WHERE userID = ${uwu.id}`, async (err, req) => {
          if (req.length < 1) return;
          db.query(`UPDATE user SET xp = '${parseInt(req[0].xp)-13}' WHERE userID = ${uwu.id}`);
        });

        const messages = [
          ...(await message.channel.messages.fetch({
            limit: 5,
            before: message.id,
          }))
            .filter((msg) => msg.author.id === message.author.id)
            .values(),
        ];

      } else {
        UserData.msgCount = msgCount;
        UserMap.set(uwu.id, UserData);
      }
    }
  } else {
    let fn = setTimeout(() => {
      UserMap.delete(uwu.id);
    }, 10000);

    UserMap.set(uwu.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn,
    });
  } */
}); 
