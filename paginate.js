const {MessageActionRow, MessageButton} = require("discord.js");

const paginate = async (message, pages, options = {}) => {

    if(!message) throw new Error('Please provide a message object.');
    if(!pages || pages.length === 0) return;

    options = {
        timeout: options.timeout ?? 60,
        prevText: options.prevText ?? "◀",
        nextText: options.nextText ?? "▶",
        pageText: options.pageText ?? "Page : ",
        pageSeparator: options.pageSeparator ?? "/"
    };

    let navBtn1 = new MessageButton({
        customId: "previousbtn",
        label: options.prevText,
        style: "SUCCESS"
    });

    let navBtn2 = new MessageButton({
        customId: "nextbtn",
        label: options.nextText,
        style: "SUCCESS"
    });

    let page = 0;

    const row = new MessageActionRow({components: [navBtn1, navBtn2]});
    const curPage = await message.channel.send({
        embeds: [pages[page]],
        components: [row],
    });

    const filter = (i) =>
        i.customId === navBtn1.customId ||
        i.customId === navBtn2.customId;

    const collector = curPage.createMessageComponentCollector({
        filter,
        time: options.timeout * 1000,
    });

    collector.on("collect", async (i) => {
        switch(i.customId) {
            case navBtn1.customId:
                page = page > 0 ? --page : pages.length - 1;
                break;
            case navBtn2.customId:
                page = page + 1 < pages.length ? ++page : 0;
                break;
            default:
                break;
        }
        await i.deferUpdate();
        await i.editReply({
            embeds: [pages[page]],
            components: [row],
        });
        collector.resetTimer();
    });

    collector.on("end", (_, reason) => {
        if(reason !== "messageDelete") {
            const disabledRow = new MessageActionRow({
                components: [navBtn1.setDisabled(true), navBtn2.setDisabled(true)]
            });
            curPage.edit({
                embeds: [pages[page]],
                components: [disabledRow],
            }).catch(console.log);
        }
    });

    return curPage;
};

module.exports = paginate;