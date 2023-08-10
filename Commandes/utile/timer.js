const Discord = require("discord.js")
const Command = require("../../Structure/Command")
const ms = require('ms');

module.exports = new Command({

    name: "timer",
    description: "Timer avec le bot",
    utilisation: "",
    alias: ["timer"],
    permission: "MANAGE_MESSAGES",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {
        const Timer = args[0]
    if(isNaN(Timer)) return message.reply("Je suis en **timer** en **millisecondes !**")
    if (ms(Timer) > 2147483647) return message.reply("Je ne vais pas m'améliorer comme ça")
    if(ms(Timer) < 1) return message.reply("À quoi ça sert?")
  
    if(!args[0]){
      return message.reply(":x: " + "|Veuillez saisir une période suivie de \"s ou m ou h \"");
    }
  
    if(args[0] <= 0){
      return message.reply(":x: " + "|Veuillez saisir une période suivie de \"s ou m ou h \"");
    }
  
    message.reply(":white_check_mark: " + "| Minuterie démarrée pour: " + `${ms(ms(Timer), {long: true})}`)
  
    setTimeout(function(){
      message.reply(message.author.toString() + `La minuterie s'est terminée!, Elle a duré: ${ms(ms(Timer), {long: true})}`)
    }, ms(Timer));
    } 
})