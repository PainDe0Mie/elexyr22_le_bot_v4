const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("guildMemberAdd", async (bot, member, user) => {
    const { QuickDB } = require('quick.db');
    const db = new QuickDB();
    const greet = db.table(`greet`);
    let fetched = await greet.get(member.guild.id);
    if(fetched) {
        for(let i = 0; i < fetched.length; i++) {
            let channel = member.guild.channels.cache.get(fetched[i]);
            if(channel) {
                channel.send(`<@${member.id}>`).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 1000);
                })
            }
        }
    }

   
})