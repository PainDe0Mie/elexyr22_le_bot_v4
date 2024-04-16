const UserMap = new Map();

module.exports = async (message, db, bot) => {
  if (UserMap.get(message.author.id)) {
    const UserData = UserMap.get(message.author.id);
    const { lastMessage, timer } = UserData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = UserData.msgCount;

    if (difference > 3000) {
      clearTimeout(timer);
      UserData.msgCount = 1;
      UserData.lastMessage = message;

      UserData.timer = setTimeout(() => {
        UserMap.delete(message.author.id);
      }, 10000);

      UserMap.set(message.author.id, UserData);
    } else {
      msgCount++;

      if (msgCount >= 5) {
        const member = message.guild.members.cache.get(message.author.id);
        await message.channel.send(
          `⚠️ Attention ${message.author}, vous envoyez trop de messages en peu de temps !`
        );

        await member.ban({ reason: `⚠️ Detection de SPAM` });
        await message.channel.send(
          `L'utilisateur ${member} a été banni pour spam.`
        );

        await message.guild.members.unban(member, `Réhabilitation de l'utilisateur après bannissement pour spam.`);

        const messages = [
          ...(await message.channel.messages.fetch({
            limit: 5,
            before: message.id,
          }))
            .filter((msg) => msg.author.id === message.author.id)
            .values(),
        ];

        await message.channel.bulkDelete(messages);
      } else {
        UserData.msgCount = msgCount;
        UserMap.set(message.author.id, UserData);
      }
    }
  } else {
    let fn = setTimeout(async () => {
      UserMap.delete(message.author.id);
    }, 10000);

    UserMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn,
    });
  }
};
