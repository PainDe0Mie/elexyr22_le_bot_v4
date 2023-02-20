const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = new Command({

    name: "join",
    description: "Permet de rejoindre un vocal",
    utilisation: "[on/off]",
    alias: ["join"],
    permission: "",
    category: "3) Utile",
    cooldown: 10,

    async run(bot, message, args, db) {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel) return message.reply('Vous devez être dans un salon vocal !');
        
const connection = joinVoiceChannel({
  channelId: voice_channel.id,
  guildId: voice_channel.guild.id,
  adapterCreator: voice_channel.guild.voiceAdapterCreator,
});
       
        message.reply("Connecté au Vocal ! <a:Valide_Or:756978408159707136>") 
    }
})