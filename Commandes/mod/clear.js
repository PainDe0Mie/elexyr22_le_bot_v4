const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const chalk = require("chalk");

module.exports = new Command({
  name: "clear",
  description: "Permet de supprimer un nombre de messages",
  utilisation: "[nombre de messages]",
  alias: ["clear", "delete", "clr", "cl", "purge"],
  permission: Discord.Permissions.FLAGS.MANAGE_MESSAGES,
  category: "1) Modération",
  cooldown: 5,

  async run(bot, message, args) {
    
    let number = args[0] || args._hoistedOptions[0].value;
    if (isNaN(number)) {
      return message.reply("*Veuillez indiquer un nombre entre `0` et `100` !* ").then(async (mess) => {setTimeout(async () => {mess.delete()}, 5000);
      });
    }
    if (parseInt(number) <= 0 || parseInt(number) > 100) {
      return message.reply("*Veuillez indiquer un nombre entre `0` et `100`...* ").then(async (mess) => {setTimeout(async () => {mess.delete();}, 5000)})}

    const messagesToDelete = parseInt(number);
    try {
      const fetchedMessages = await message.channel.messages.fetch({ limit: messagesToDelete + 1 });
      const deletedMessages = await message.channel.bulkDelete(fetchedMessages, true);

      console.log(chalk.yellow(`[CMD] "${message.author.username}" a utilisé la commande e!clear ${number} sur '${message.guild.name}'`))

      if (message.guild.id === "ID") { //id du serv
        const salon = bot.channels.cache.get("ID");
        salon.send(` ${message.author.username} a utilisé la commande **e!clear ${number}.**`);
      }

      await message.channel.send(`J'ai bien supprimé \`${deletedMessages.size - 1}\` messages !`).then(async (mess) => {setTimeout(async () => {mess.delete();}, 5000)})
    } catch (error) {
      console.error(error);
      await message.channel.send("*Yo, mec, y'a eu un couac en voulant virer les messages, tu vois. Ça a foiré grave.*").then(async (mess) => {setTimeout(async () => {mess.delete();}, 5000)})
    }
  },
});
