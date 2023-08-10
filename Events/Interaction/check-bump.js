const Discord = require("discord.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const Event = require("../../Structure/Event");

module.exports = new Event("messageCreate", async (bot, message) => {
    const db = bot.db;
    const channelId = "1120791058025029742";
    if(message.channel.id !== channelId) return;
    
    const row1 = new Discord.MessageActionRow().addComponents(
        new MessageButton()
            .setStyle("DANGER")
            .setEmoji("🔥")
            .setLabel("Claim")
            .setCustomId('bumps'))

    const lastMessage = (await message.channel.messages.fetch({ limit: 1 })).last();
    const lastEmbed = lastMessage.embeds[0];
    if (lastEmbed && lastEmbed.image && lastEmbed.image.url === "https://disboard.org/images/bot-command-image-bump.png") {
        const author = lastMessage.author;
        //const messagesToDelete = message.channel.messages.cache.filter(msg => msg.author.id === "1067174101711605780");

        let user = "1013135812545753119";
        let number = 100;
        let messages = (await message.channel.messages.fetch({ limit: number })).filter(m => m.author.id === user);
        if (messages.length <= 0) return;
        await message.channel.bulkDelete(messages);

        const embed = new Discord.MessageEmbed()
            .setColor(bot.color)
            .setTitle("Merci d'avoir BUMP !")
            .setDescription("Pour le **réclamé** , __clique__ sur le bouton. <a:coeur1:1066770964370702406>")
        	.setFooter("© 2020 - 2023 Elexyr22, Tous droits réservés")
			message.reply({ embeds: [embed], components: [row1] })

        let commu = "1040701512298541106";
        db.query(`SELECT * FROM bump WHERE guildID = ${commu}`, async (err, req) => {
            if (req.length < 1) {
                let sql = `INSERT INTO bump (guildID, statut, userID) VALUES (${commu}, 'ON', 'none')`;
                db.query(sql, function (err) {
                    if (err) throw err})
            } else {
                db.query(`UPDATE bump SET statut = 'ON' WHERE guildID = ${commu}`);
                db.query(`UPDATE bump SET userID = 'none' WHERE guildID = ${commu}`)}})}})
