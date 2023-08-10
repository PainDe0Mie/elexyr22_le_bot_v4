const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const { joinVoiceChannel } = require('@discordjs/voice');
const chalk = require("chalk")

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
        if (!voice_channel) return message.reply('*Vous devez être dans un salon vocal...*');
        
const connection = joinVoiceChannel({
  channelId: voice_channel.id,
  guildId: voice_channel.guild.id,
  adapterCreator: voice_channel.guild.voiceAdapterCreator,
});
       
        message.reply("Je suis bien connecté au vocal !") 
        console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!join sûr '${message.guild.name}'`))
    }
})