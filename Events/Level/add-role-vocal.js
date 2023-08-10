const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("voiceStateUpdate", async (bot, oldState, newState) => {
if(newState.guild.id !== "1040701512298541106") return; // id de la commu

        const oldChannel = oldState.channel;
        const newChannel = newState.channel;

        if (oldChannel === null && newChannel !== null) {
            if (!oldState.channel && newState.channel) {
                const role = oldState.guild.roles.cache.find(role => role.name === "🔊・Vocal"); // Remplacer "Vocal" par le nom du rôle à ajouter
                if (role) {
                  oldState.member.roles.add(role);
                }
              }

        } else if (newChannel === null) {
           const role = oldState.guild.roles.cache.find(role => role.name === "🔊・Vocal"); // Remplacer "Vocal" par le nom du rôle à retirer
            if (role) {
              oldState.member.roles.remove(role); 
        }}})






