const Discord = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');
const Event = require("../../Structure/Event");
const chalk = require("chalk");

module.exports = new Event("ready", async (bot) => {
  const voiceChannelId = "ID"
  if (!voiceChannelId) return;

  const voiceChannel = bot.channels.cache.get(voiceChannelId);
  if (!voiceChannel) {
    console.log(`Le salon auto-vocal existe pas`);
    return}
    
    console.log(chalk.bgRed("Bot connecté au vocal V.I.P"))

  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})
