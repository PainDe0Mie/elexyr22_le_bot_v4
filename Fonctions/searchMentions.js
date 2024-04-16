const userWarns = new Map();

module.exports = async (message) => {
  const mentions = message.mentions.users.size + message.mentions.roles.size;
  if (mentions > 2) {
    await message.delete();
    await message.channel.send(`${message.author}, vous mentionnez trop de fois dans un seul message !`);
    
    const member = await message.guild.members.fetch(message.author);
    let warns = userWarns.get(member.id) || 0;

    if (warns >= 2) {
      await member.kick('Trop de mentions dans un message');
      await message.channel.send(`L'utilisateur ${member} a été kick pour trop de mentions dans un message `);
      userWarns.delete(member.id);
    } else {
      warns++;
      userWarns.set(member.id, warns);
      await message.channel.send(`Attention ${member}, vous avez été averti pour avoir mentionné trop de fois dans un seul message (${warns}/3)`);
    }
  }
};
