const Discord = require("discord.js");
const Event = require("../../Structure/Event");

module.exports = new Event("messageCreate", async (bot, message) => {
    
    const db = bot.db;
    if(message.author.bot) return;
    if(message.guild.id !== "1040701512298541106") return; // id de la commu
    if(message.author.id == "1046761650675519499" ||  message.author.id == "1000825879221514302" || message.author.id == "956183732841250946" || message.author.id == "285553762448179201") return; //id de Elexyr, Shocked, Pain et Adam
    //if(message.member.roles.cache.has("1083804164284493864")) return; //sub yt
    if(message.channel.id !== "1085672913778253894") return; //ceulement la discution

    db.query(`SELECT * FROM user WHERE userID = ${message.author.id}`, async (err, req) => {
        if (req.length < 1) {
            let sql = `INSERT INTO user (userID, xp, level, afk, voiceTime, bump, event, robot) VALUES (${message.author.id}, '0', '0', 'off', '0', '0', '0', 'off')`
            message.reply(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu as envoyé ton **premier message !** <a:youpi1:1067166921293844491>`)
            db.query(sql, function (err) {err})
        } else {

            let xp = 1
            db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) + xp}' WHERE userID = ${message.author.id}`)
            console.log(`${message.author.username} viens de gagné + 1 xp !`)

            //--------------------------------//
            let need = parseInt(req[0].xp)
            let nextLevelXP1 = 15;
            let nextLevelXP2 = 30;
            let nextLevelXP3 = 50;
            let nextLevelXP4 = 100;
            let nextLevelXP5 = 500;
            let nextLevelXP6 = 1000;
            let nextLevelXP7 = 3000;
            let nextLevelXP8 = 5000;
            let nextLevelXP9 = 10000;
            let nextLevelXP10 = 15000;
            //--------------------------------//
            let nextLevelVOC1 = 3600
            let nextLevelVOC2 = 18000
            let nextLevelVOC3 = 36000
            let nextLevelVOC4 = 72000
            let nextLevelVOC5 = 180000
            let nextLevelVOC6 = 360000
            let nextLevelVOC7 = 1080000
            let nextLevelVOC8 = 1800000
            let nextLevelVOC9 = 2880000
            let nextLevelVOC10 = 3600000
            //--------------------------------//    

            const role = message.member.roles.cache.has("1065700492581273680")


            if(parseInt(req[0].level) == 0) {
            if(parseInt(req[0].xp) >= nextLevelXP1) {
            if(parseInt(req[0].voiceTime) >= nextLevelVOC1) {
                db.query(`UPDATE user SET level = '1' WHERE userID = ${message.author.id}`)
                db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)

                let actif = message.guild.roles.cache.find(role => role.id === "1078363687666057409")
                message.guild.members.cache.get(message.author.id).roles.add(actif)
                console.log(`${message.author.username} es passé niveau 1`)
                message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`1\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
              }}}

            if(parseInt(req[0].level) == 1) {
            if(parseInt(req[0].xp) >= nextLevelXP2) {
            if(parseInt(req[0].voiceTime) >= nextLevelVOC2) {
    
                    db.query(`UPDATE user SET level = '2' WHERE userID = ${message.author.id}`)
                    db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
    
                    let actif = message.guild.roles.cache.find(role => role.id === "1065700488038854676")
                    message.guild.members.cache.get(message.author.id).roles.add(actif)
                    console.log(`${message.author.username} es passé niveau 2`)
                    message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`2\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                }}}

                    if(parseInt(req[0].level) == 2) {
                    if(parseInt(req[0].xp) >= nextLevelXP3) {
                    if(parseInt(req[0].voiceTime) >= nextLevelVOC3) {
            
                            db.query(`UPDATE user SET level = '3' WHERE userID = ${message.author.id}`)
                            db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
            
                            let actif = message.guild.roles.cache.find(role => role.id === "1065700486029783271")
                            message.guild.members.cache.get(message.author.id).roles.add(actif)
                            console.log(`${message.author.username} es passé niveau 3`)
                            message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`3\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                        }}}

                        if(parseInt(req[0].level) == 3) {
                        if(parseInt(req[0].xp) >= nextLevelXP4) {
                        if(parseInt(req[0].voiceTime) >= nextLevelVOC4) {
                        if(parseInt(req[0].bump) >= "1") {
                        if(role) {
                
                                db.query(`UPDATE user SET level = '4' WHERE userID = ${message.author.id}`)
                                db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                
                                let actif = message.guild.roles.cache.find(role => role.id === "1065700483416739911")
                                message.guild.members.cache.get(message.author.id).roles.add(actif)
                                message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`4\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                            }}}}}

                            if(parseInt(req[0].level) == 4) {
                                if(parseInt(req[0].xp) >= nextLevelXP5) {
                                if(parseInt(req[0].voiceTime) >= nextLevelVOC5) {
                                if(parseInt(req[0].bump) >= "3") {
                                if(role) {
                        
                                        db.query(`UPDATE user SET level = '5' WHERE userID = ${message.author.id}`)
                                        db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                        
                                        let actif = message.guild.roles.cache.find(role => role.id === "1102211031956209775")
                                        message.guild.members.cache.get(message.author.id).roles.add(actif)
                                        message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`5\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                    }}}}}

                                    if(parseInt(req[0].level) == 5) {
                                        if(parseInt(req[0].xp) >= nextLevelXP6) {
                                        if(parseInt(req[0].voiceTime) >= nextLevelVOC6) {
                                        if(parseInt(req[0].bump) >= "5") {
                                         if(role) {
                                      
                                                db.query(`UPDATE user SET level = '6' WHERE userID = ${message.author.id}`)
                                                db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                                      
                                                let actif = message.guild.roles.cache.find(role => role.id === "1102211197782208522")
                                                message.guild.members.cache.get(message.author.id).roles.add(actif)
                                                message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`6\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                            }}}}}

                                                if(parseInt(req[0].level) == 6) {
                                                if(parseInt(req[0].xp) >= nextLevelXP7) {
                                                if(parseInt(req[0].voiceTime) >= nextLevelVOC7) {
                                                if(parseInt(req[0].bump) >= "10") {
                                                if(role) {  
                                          
                                                        db.query(`UPDATE user SET level = '7' WHERE userID = ${message.author.id}`)
                                                        db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                                          
                                                        let actif = message.guild.roles.cache.find(role => role.id === "1102249604688379944")
                                                        message.guild.members.cache.get(message.author.id).roles.add(actif)
                                                        message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`7\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                                    }}}}}

                                                    if(parseInt(req[0].level) == 7) {
                                                        if(parseInt(req[0].xp) >= nextLevelXP8) {
                                                        if(parseInt(req[0].voiceTime) >= nextLevelVOC8) {
                                                        if(parseInt(req[0].bump) >= "15") {
                                                        if(role) {
                                                
                                                                db.query(`UPDATE user SET level = '8' WHERE userID = ${message.author.id}`)
                                                                db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                                                
                                                                let actif = message.guild.roles.cache.find(role => role.id === "1102211287389306961") 
                                                                message.guild.members.cache.get(message.author.id).roles.add(actif)
                                                                message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`8\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                                            }}}}}

                                                            if(parseInt(req[0].level) == 8) {
                                                                if(parseInt(req[0].xp) >= nextLevelXP9) {
                                                                if(parseInt(req[0].voiceTime) >= nextLevelVOC9) {
                                                                if(parseInt(req[0].bump) >= "30") {
                                                                if(role) {  
                                                        
                                                                        db.query(`UPDATE user SET level = '9' WHERE userID = ${message.author.id}`)
                                                                        db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                                                        
                                                                        let actif = message.guild.roles.cache.find(role => role.id === "1102211394893529119") 
                                                                        message.guild.members.cache.get(message.author.id).roles.add(actif)
                                                                        message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`9\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                                                   }}}}}
                                                    
                                                                    if(parseInt(req[0].level) == 9) {
                                                                    if(parseInt(req[0].xp) >= nextLevelXP10) {
                                                                    if(parseInt(req[0].voiceTime) >= nextLevelVOC10) {
                                                                    if(parseInt(req[0].bump) >= "50") {
                                                                    if(role) {
                                                            
                                                                            db.query(`UPDATE user SET level = '10' WHERE userID = ${message.author.id}`)
                                                                            db.query(`UPDATE user SET xp = '${parseInt(req[0].xp) - need}' WHERE userID = ${message.author.id}`)
                                                    
                                                                            let actif = message.guild.roles.cache.find(role => role.id === "1102211467408851004")
                                                                            message.guild.members.cache.get(message.author.id).roles.add(actif)
                                                                            message.channel.send(`<:elexyr22:1067501213085597806> Bravo ${message.author}, tu es passé niveau \`10\` ! <a:gg1:1088132884675702945>`)//.then(async mess => setTimeout(async () => {mess.delete()}, 5000))
                                                    
                                                                        }}}}}

                            }})})
