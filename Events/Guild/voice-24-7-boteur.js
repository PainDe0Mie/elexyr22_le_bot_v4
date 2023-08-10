const Discord = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
const Event = require("../../Structure/Event");

module.exports = new Event("ready", async (bot) => {
  const voiceChannelId = "1119722076396326995";
  if (!voiceChannelId) return;

  const voiceChannel = bot.channels.cache.get(voiceChannelId);
  if (!voiceChannel) {
    console.log(`Le salon vocal avec l'ID ${voiceChannelId} est introuvable.`);
    return}

  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
  })})
