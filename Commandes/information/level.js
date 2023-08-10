const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');
const Command = require('../../Structure/Command');
const chalk = require("chalk")

module.exports = new Command({
  name: "level",
  description: "Permet de voir son level",
  utilisation: '',
  alias: ["rank", "level", "xp", "lvl"],
  permission: '',
  category: '3) Utile',
  cooldown: 30,

    async run(bot, message, args) {
        
        const db = bot.db;
        
         console.log(chalk.yellow(`[CMD] "${message.author.tag}" à utilisé la commande e!level sûr '${message.guild.name}'`))
        
    if(message.guild.id !== "1040701512298541106") return message.reply(" Vous pouvez seulement utilisé cette commande sûr la 🎁・`Taverne d'Elexyr22`")
    if(message.channel.id !== "1117140638765424842" && message.channel.id !== "1065700513087225906") return message.delete()

    let user;
    if(message.user ? args._hoistedOptions.length >= 1 : args.length >= 1) {
        user = message.user ? await bot.users.fetch(args._hoistedOptions[0].value).catch(() => null) : (message.mentions.users.first() || await bot.users.fetch(args[0]).catch(() => null))
        if(!user) return message.reply(" Cet utilisateur n'existe pas...");
    } else {
        user = message.user ? message.user : message.author;
    }
    if(!user) return message.reply(" Cet utilisateur n'existe pas...");
 
    db.query(`SELECT * FROM user WHERE userID = ${user.id}`, async (err, req) => {
      if (req.length < 1) return message.reply(" *Cette personne n'est pas enregistrée dans le bot...*\n\n envoye un message dans <#1085672913778253894> pour commencé le gain xp !")

      const time = req[0].voiceTime;
      const minutes = Math.round(time / 60);
      const hours = minutes ? Math.floor(minutes / 60) : '0';
      const role = message.member.roles.cache.has("1078363687666057409")
      const check = role ? "✅" : "✖"

                  //--------------------------------//
                  let nextLevelVOC1 = 3600
                  let nextLevelVOC2 = 18000
                  let nextLevelVOC3 = 36000
                  let nextLevelVOC4 = 72000
                  let nextLevelVOC5 = 180000
                  let nextLevelVOC6 = 360000
                  let nextLevelVOC7 = "1,08e+6"
                  let nextLevelVOC8 = "1,8e+6"
                  let nextLevelVOC9 = "2,88e+6"
                  let nextLevelVOC10 = "3,6e+6"  
                  //--------------------------------//

                  
      const role1 = (req[0].voiceTime >= nextLevelVOC1)
      const check1 = role1 ?"✅" : "✖"
      const embed = new MessageEmbed()
          .setColor(bot.color)
      	  .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
      	  .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setTitle("Niveau 1")
          .setDescription(`${check} **XP:** ${req[0].xp} / 15, \n${check} **Vocal:** ${minutes} / 60 minutes`)
  		    .setTimestamp()
          .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
      

      const selectMenu = new MessageSelectMenu()
        .setCustomId('levelSelect')
        .setPlaceholder('Sélectionnez un niveau')
        .addOptions([
          {
            label: 'Niveau 1',
            value: 'niveau1',
            emoji: '<:one:1102270635566186527>',
          },
          {
            label: 'Niveau 2',
            value: 'niveau2',
            emoji: '<:two:1102270829892489328>',
          },
          {
            label: 'Niveau 3',
            value: 'niveau3',
            emoji: '<:three:1102271039112745000>',
          },
          {
            label: 'Niveau 4',
            value: 'niveau4',
            emoji: '<:four:1102271474255020112>',
          },
          {
            label: 'Niveau 5',
            value: 'niveau5',
            emoji: '<:five:1102271590638571550>',
          },
          {
            label: 'Niveau 6',
            value: 'niveau6',
            emoji: '<:six:1102271763016069152>',
          },
          {
            label: 'Niveau 7',
            value: 'niveau7',
            emoji: '<:seven:1102271859111776389>',
          },
          {
            label: 'Niveau 8',
            value: 'niveau8',
            emoji: '<:eight:1102271977399517336>',
          },
          {
            label: 'Niveau 9',
            value: 'niveau9',
            emoji: '<:nine:1102272094936518656>',
          },
          {
            label: 'Niveau 10',
            value: 'niveau10',
            emoji: '<:france:1066478436866064568>',
          },

        ]);

      const row = new MessageActionRow()
        .addComponents(selectMenu);

      const sentMessage = await message.reply({ embeds: [embed], components: [row]})
      await message.channel.send(`${message.author} | Commande en cours de **développement.** Merci de __patienter__ pour la mise à jour.`)
	  const filter = (i) => i.customId === 'levelSelect' && i.user.id === user.id;

      const collector = sentMessage.createMessageComponentCollector({ filter, time: 300000 });
      collector.on('collect', async (interaction) => {
      const value = interaction.values[0];

        if (value === 'niveau1') {
            const role = message.member.roles.cache.has("1078363687666057409");
            const check = role ?"✅" : "✖"

            const role1 = (req[0].voiceTime >= nextLevelVOC1)
            const check1 = role1 ?"✅" : "✖"

          const newEmbed = new MessageEmbed()
            .setColor(bot.color)
            .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
            .setTitle("Niveau 1")
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            .setDescription(`${check} **XP:** ${req[0].xp} / 15, \n${check} **Vocal:** ${minutes} / 60 minutes`)
            .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
           interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau2') {
            const role = message.member.roles.cache.has("1065700488038854676");
            const check = role ?"✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC2)
            const check1 = role1 ?"✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 2")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 30, \n${check} **Vocal:** ${hours} / 5 heures`)
            .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau3') {
            const role = message.member.roles.cache.has("1065700486029783271");
            const check = role ?"✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC3)
            const check1 = role1 ?"✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 3")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 50, \n${check} **Vocal:** ${hours} / 10 heures`)//\n${check2} **Inviter un ami:** 0 / 1`)
          .setTimestamp()
          .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau4') {
            const role = message.member.roles.cache.has("1065700483416739911");
            const check = role ?"✅" : "✖"
            const role2 = (req[0].bump >= "1")
            const check2 = role2 ? "✅" : "✖"
            const role3 = message.member.roles.cache.has("1065700492581273680")
            const check3 = role3 ? "✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC4)
            const check1 = role1 ?"✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 4")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 100, \n${check} **Vocal:** ${hours} / 20 heures\n ${check2} **Bump:** ${req[0].bump} / 1\n ${check3} __Avoir le statut__`)
          .setTimestamp()
          .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau5') {
          const role = message.member.roles.cache.has("1102211031956209775");
          const check = role ?"✅" : "✖"
            const role2 = (req[0].bump >= "3")
            const check2 = role2 ? "✅" : "✖"
            const role3 = message.member.roles.cache.has("1065700492581273680")
            const check3 = role3 ? "✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC5)
            const check1 = role1 ?"✅" : "✖"

          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 5")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 500, \n${check} Vocal : ${hours} / 50 heures\n${check2} **Bump:** ${req[0].bump} / 3\n${check3} __Avoir le statut__`)
          .setTimestamp()
          .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau6') {
            const role = message.member.roles.cache.has("1102211197782208522");
            const check = role ?"✅" : "✖"
            const role2 = (req[0].bump >= "3")
            const check2 = role2 ? "✅" : "✖"
            const role3 = message.member.roles.cache.has("1065700492581273680")
            const check3 = role3 ? "✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC6)
            const check1 = role1 ?"✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 6")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} XP: ${req[0].xp} / 1 000, \n${check} Vocal : ${hours} / 100 heures\n${check2} **Bump:** ${req[0].bump} / 5`) //\n${check4} **Inviter un ami:** 0 / 3\n${check3} __Avoir le statut__`)
          .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau7') {
            const role = message.member.roles.cache.has("1102249604688379944");
            const check = role ?"✅" : "✖"
            const role2 = (req[0].bump >= "10")
            const check2 = role2 ? "✅" : "✖"
            const role3 = message.member.roles.cache.has("1065700492581273680")
            const check3 = role3 ? "✅" : "✖"
            const role4 = (req[0].event >= "3") 
            const check4 = role4 ? "✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC7)
            const check1 = role1 ?"✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 7")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 3 000, \n${check} Vocal : ${hours} / 300 heures\n${check2} **Bump:** ${req[0].bump} / 10\n${check4} **Event:** ${req[0].event} / 1\n${check3} __Avoir le statut__`)
          .setTimestamp()
          .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau8') {
          const role = message.member.roles.cache.has("1102211287389306961");
          const check = role ?"✅" : "✖"
          const role2 = (req[0].bump >= "15")
          const check2 = role2 ? "✅" : "✖"
          const role3 = message.member.roles.cache.has("1065700492581273680")
          const check3 = role3 ? "✅" : "✖"
          const role1 = (req[0].voiceTime >= nextLevelVOC8)
          const check1 = role1 ?"✅" : "✖"
          const role5 = (req[0].event >= "3")
          const check5 = role5 ? "✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 8")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 5 000, \n${check} Vocal : ${hours} / 500 heures\n${check2} **Bump:** ${req[0].bump} / 15 \n${check3} __Avoir le statut__\n${check5} **Event:** ${req[0].event} / 3 `)//\n${check4} **Inviter un ami:** 0 / 10`)
          .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau9') {
            const role = message.member.roles.cache.has("1102211394893529119");
            const check = role ?"✅" : "✖"
            const role2 = (req[0].bump >= "30")
            const check2 = role2 ? "✅" : "✖"
            const role3 = message.member.roles.cache.has("1065700492581273680")
            const check3 = role3 ? "✅" : "✖"
            const role4 = (req[0].event >= "5")
            const check4 = role4 ? "✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC9)
            const check1 = role1 ?"✅" : "✖"
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 9")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 10 000, \n${check} Vocal : ${hours} / 800 heures\n${check2} **Bump:** ${req[0].bump} / 30\n${check4} **Event:** ${req[0].event} / 5`)
          .setTimestamp()
            .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] });
            
        } else if (value === 'niveau10') {
            const role = message.member.roles.cache.has("1102211467408851004");
            const check = role ?"✅" : "✖"
            const role2 = (req[0].bump >= "40")
            const check2 = role2 ? "✅" : "✖"
            const role3 = message.member.roles.cache.has("1065700492581273680")
            const check3 = role3 ? "✅" : "✖"
            const role1 = (req[0].voiceTime >= nextLevelVOC10)
            const check1 = role1 ?"✅" : "✖"
            
            
            
            
          const newEmbed = new MessageEmbed()
          .setColor(bot.color)
          .setAuthor(`Rank de ${user.username}\nTon niveau: ${req[0].level} / 10`)
          .setTitle("Niveau 10")
          .setThumbnail(user.displayAvatarURL({dynamic: true}))
          .setDescription(`${check} **XP:** ${req[0].xp} / 15 000, \n${check} Vocal : ${hours} / 1 000 heures\n ${check2}**Bump:** ${req[0].bump} / 50`)
          .setTimestamp()
          .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
          interaction.update({ embeds: [newEmbed], components: [row] })}})})}})
