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

  async run(bot, message, args, db, guild) {
    
    message.delete()
    let number = args[0] || args._hoistedOptions[0].value;
    if (isNaN(number)) {
      return message.reply(
        "Veuillez indiquer un nombre entre `0` et `100` !"
      ).then(async (mess) => {
        setTimeout(async () => {
          mess.delete();
        }, 5000);
      });
    }
    if (parseInt(number) <= 0 || parseInt(number) > 100) {
      return message.reply("Veuillez indiquer un nombre entre `0` et `100` !").then(async (mess) => {setTimeout(async () => {mess.delete();}, 5000)})}

    const messagesToDelete = parseInt(number);
    try {
      const fetchedMessages = await message.channel.messages.fetch({ limit: messagesToDelete + 1 });
      const deletedMessages = await message.channel.bulkDelete(fetchedMessages, true);

      console.log(chalk.yellow(`[CMD] "${message.author.tag}" a utilisé la commande e!clear ${number} sur '${message.guild.name}'`))

      if (message.guild.id === "1040701512298541106") {
        const salon = bot.channels.cache.get("1084195196583018536");
        salon.send(` ${message.author.tag} a utilisé la commande **e!clear ${number}.** `);
      }

      await message.channel.send(`J'ai bien supprimé \`${deletedMessages.size - 1}\` messages !`).then(async (mess) => {setTimeout(async () => {mess.delete();}, 5000)})
    } catch (error) {
      console.error(error);
      await message.channel.send("Une erreur s'est produite lors de la suppression des messages.").then(async (mess) => {setTimeout(async () => {mess.delete();}, 5000)})
    }
  },
});
