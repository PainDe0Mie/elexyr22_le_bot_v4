module.exports = async (message) => {

    let content = message.content.split(" ")
    let count = 0;
    

    for(let i = 0; i < content.length; i++) {

        if(content[i].match(new RegExp(/<@!*&*[0-9]+>/g))) count++;
    }

    if(count > 5) {

        await message.delete()
        await message.channel.send(`⚠️ Attention ${message.author}, vous mentionnez trop de fois dans un seul message !`)
    }
}