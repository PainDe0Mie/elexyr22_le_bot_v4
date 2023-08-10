const Discord = require('discord.js');
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: 'cleardm',
    description: "Efface tous les DM du bot",
    utilisation: "",
    alias: ["cleardm", "dm"],
    permission: "",
    category: "",
    cooldown: 5,

    async run(bot, message, args, db) {
        await message.author.send("Suppression des DM en cours...");
        let dmChannels = await message.client.users.cache.filter(user => user.dmChannel).map(user => user.dmChannel);
        let messagesDeleted = 0;
        dmChannels.forEach(async dmChannel => {
            await dmChannel.messages.fetch().then(async messages => {
                messages.forEach(async message => {
                    await message.delete();
                    messagesDeleted++;
                });
            });
        });
        setTimeout(() => {
            message.reply(`<:elexyr22:1067501213085597806> Tous les DM du bot ont été supprimés. J'ai supprimé ${messagesDeleted} messages. <a:valide_or:1067501018906108024>`);
        }, 3000);
    }
});
