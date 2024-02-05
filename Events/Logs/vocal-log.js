const Discord = require("discord.js");
const Event = require("../../Structure/Event");
const chalk = require("chalk");

module.exports = new Event("voiceStateUpdate", async (bot, oldState, newState) => {
    
  if(newState.member.user.id === "1013135812545753119" || newState.member.user.id === "1149965771200544798") return;

  const db = bot.db;
  const oldChannel = oldState.channel;
  const newChannel = newState.channel;

  db.query(
    `SELECT * FROM serveur WHERE guildID = ${oldState.guild.id}`,
    async (err, req, length) => {
      if (req.length < 1) return;

      let channel = oldState.guild.channels.cache.get(`${req[0].vocID}`);
      if (!channel) return;

      if (oldChannel === null && newChannel !== null) {
        let Embed1 = new Discord.MessageEmbed()
          .setColor("GREEN")
        .setThumbnail(newState.member.displayAvatarURL({dynamic: true}))
          .setTitle("Join Voice:")
          .setDescription(`**${newState.member.user} *(${newState.member.user.id})* viens de rejoindre:** <#${newChannel.id}> `) // - ${newState.member.user.username} / \`\`${newChannel.name}\`\`
          .setTimestamp();
        await channel.send({ embeds: [Embed1] });
      } else if (newChannel === null) {
        let Embed2 = new Discord.MessageEmbed()
          .setColor("RED")
        .setThumbnail(oldState.member.displayAvatarURL({dynamic: true}))
          .setTitle("Leave Voice:")
          .setDescription(`**${oldState.member.user} *(${oldState.member.user.id})* viens de quitter:** <#${oldChannel.id}> `) // - ${oldState.member.user.username} \`\`${oldChannel.name}\`\`
          .setTimestamp();
        await channel.send({ embeds: [Embed2] });
      } else if (oldChannel === newChannel) {
        /*let Embed3 = new Discord.MessageEmbed()
          .setColor("BLUE")
          .setTitle("Salon vocal moove :")
          .setDescription(`**${oldState.member.user} - ${oldState.member.user.username} *(${oldState.member.user.id})* à été moove de : \n \`\`${oldChannel.name}\`\` à \`\`${newChannel.name}\`\`**`)
          .setTimestamp();
        await channel.send({ embeds: [Embed3] }); */
        return;
      } else {
        return;
      }
    }
  );
});
