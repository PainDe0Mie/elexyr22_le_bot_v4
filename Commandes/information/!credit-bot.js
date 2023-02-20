const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require('discord.js')
const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "credit",
    description: "Crédit du bot",
    utilisation: "",
    alias: ["credit", "bi", "botinfo", "bot-info", "add","invite","invites", "i"],
    permission: "",
    category: "2) Information",
    cooldown: 5,

    async run(bot, message, args, db) {

       const row1 = new Discord.MessageActionRow().addComponents(

          new MessageButton()
          .setStyle("SUCCESS")
          .setEmoji("📩")
          .setLabel("Page 1")
          .setCustomId('credit1'),

          new MessageButton()
            .setURL(`https://discord.com/oauth2/authorize?client_id=1013135812545753119&permissions=2146958591&scope=bot&redirect_uri=https://discord.com/invite/elexyr22&response_type=code`)
            .setLabel('Invite du Bot')
            .setEmoji("👑")
            .setStyle('LINK'),
        
            new MessageButton()
            .setStyle("SUCCESS")
            .setEmoji("📩")
            .setLabel("Page 2")
            .setCustomId('credit2'),

        ); 

        const embed = new Discord.MessageEmbed()
        .setColor(bot.color)
        .setTitle(`Crédit du Bot | Version : 3.1`)
        .setThumbnail("https://cdn.discordapp.com/icons/655092943786606593/a_a55b15a74c061b6b705f8ba7f0cfe887.gif?size=1024")
        .setDescription("────────────────────────────── \n Créateur : [`Elexyr22#0022`](https://t.me/cash2pays), <:Courrone2:783009004842385458> \n\n **Bras Droit :** [`Shocked#0001`](https://www.service-public.fr/particuliers/vosdroits/F2274), <a:Nonoxsueur:774729286367707157> \n\n __Responsable Dev :__  [`Forwen#0001`](https://www.google.com/search?q=camion+femme&rlz=1C1ONGR_frFR940FR940&sxsrf=ALiCzsatxJKUwHyEHHKF93pQ99ra4Hytvw:1671890111894&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj6_uOBtJL8AhX4UaQEHXqzAh4Q_AUoAXoECAEQAw&biw=1920&bih=969&dpr=1#imgrc=ZXS7MvwdKKML-M), <a:Devdiscord2:754441344092602368> \n\n Développeur JS : [`Sinan2245#8683` / `Cyber#5084`](https://nodejs.org/en/), <:JS:769270366392025088> \n\n Dev Python : [`PainDe0Mie#4811`](http://web-ebot.online/), <:python:967433602935697468> \n\n Hébergement: [`Gaétan#0001` / `Skariie_#0001`](https://axial-host.fr/), <:axial_host:1019419430670839948> \n\n Correction : [`Leïla Vanco#0666` / `Padrino#0666`](https://www.amazon.fr/BESCHERELLE-LA-CONJUGAISON/dp/8490492808/ref=asc_df_8490492808/?tag=googshopfr-21&linkCode=df0&hvadid=273669608070&hvpos=&hvnetw=g&hvrand=11016083859996940958&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055671&hvtargid=pla-322713998098&psc=1), <a:Chat1:754441352267431998> \n\n Avec l'aide de : [`Niridya#0001` / `KingOFF#6756`](https://discord.com/invite/niridya), <a:ECoeur1:754441320759820288> \n\n  ────────────────────────────── \n\n CPU : `Intel Xeon E7 (5.0Ghz),` \n RAM : `64 Go DDR4,` \n SSD : `1000 Go SATA III,` \n Serveur hébergé à **Paris !** \n\n ──────────────────────────────")
        .setImage("https://cdn.discordapp.com/attachments/767361889990344715/809483081412116540/Dis.gif")
        .setFooter("Merci à tout le monde pour votre aide, et merci à mes abonnées ! <3")
      message.reply({embeds: [embed], components: [row1]})

    }})