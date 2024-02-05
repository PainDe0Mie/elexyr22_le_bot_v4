const Discord = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
const Event = require("../../Structure/Event");

module.exports = new Event("ready", async (bot) => {
  const voiceChannelId = "1186064749113380946"
  if (!voiceChannelId) return;

  const voiceChannel = bot.channels.cache.get(voiceChannelId);
  if (!voiceChannel) {
    console.log(`Le salon auto-vocal existe pas`);
    return}
    
    console.log("Bot bien connecté au vocal Commu")

  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})
