const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "greet-add",
    description: "Permet de définir les greets",
    utilisation: "",
    alias: ["greet-add", "greet"],
    permission: Discord.Permissions.FLAGS.ADMINISTRATOR,
    category: "3) Utile",
    cooldown: 10,

    async run(bot, message, args) {
        
        message.delete()
        
        const { QuickDB } = require('quick.db');
        const db = new QuickDB();
        const greet = db.table(`greet`);
        let fetched = await greet.get(message.guild.id);
        
        let channel = message.channel


        if(args[0] == "off") {
            
            if(fetched){
                greet.delete(message.guild.id);
                return message.reply("<:Elexyr22:754441336849170543> *Le Greet à été désactivé...*").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            } else {
                return message.reply("<:Elexyr22:754441336849170543> *Le Greet n'est pas activé...").then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            }
        } 

        if(!channel.permissionsFor(message.guild.me).has(["SEND_MESSAGES", "VIEW_CHANNEL"])) return message.reply("*Je n'ai pas les permissions nécessaires pour pouvoir utiliser ce salon...*")


        

        if(args[0] == "remove") {
            if(fetched){
                if(fetched.includes(channel.id)) {
            greet.pull(message.guild.id, [channel.id]);
            return message.reply(`<:Elexyr22:754441336849170543> Le salon **${channel.name}** est retiré du Greet ! <a:Valide_Or:756978408159707136> *[Msg auto supprimé dans 2 min]*`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                } else {
                    return message.reply(`<:Elexyr22:754441336849170543> *Le salon **${channel.name}** n'a pas de Greet...`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                }
            } else {
                return message.reply("<:Elexyr22:754441336849170543> *Le Greet n'est pas activé...*");
            }
        }

        
        
        if(args[0] !== "off" || args[0] !== "remove" || args[0] !== "list") {
        if(!fetched) {
            greet.set(message.guild.id, [channel.id]);
            return message.reply(`<:Elexyr22:754441336849170543> Le salon ${channel.name} a bien été défini ! <a:Valide_Or:756978408159707136> *[Msg auto supprimé dans 2 min]*`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
        } else {
            if(fetched.length >= 5) return message.reply("<:Elexyr22:754441336849170543> Vous ne pouvez pas définir plus de 5 greet !\nVeuillez en retirer avec la commande `e!greet remove` <a:Nop1:768183643020853298>")
            if(fetched.includes(channel.id)) return message.reply(`<:Elexyr22:754441336849170543> Le salon **${channel.name}** à déjà le Greet ! <a:Nop1:768183643020853298>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
            greet.set(message.guild.id, [...fetched, channel.id]);
            return message.reply(`<:Elexyr22:754441336849170543> Le salon **${channel.name}** à bien le Greet d'actif ! <a:Nop1:768183643020853298>`).then(async mess => setTimeout(async () => {mess.delete()}, 5000))
        }
    }
        
        
      }
    })
