const Discord = require("discord.js");
const Command = require("../../Structure/Command");
const { MessageEmbed } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");
const chalk = require("chalk")
const { key } = require("../../key.js")

module.exports = new Command({
  name: "chat-gpt",
  description: "Permet de discuté avec Chat GPT",
  utilisation: "",
  alias: ["openai", "openia", "chat-gpt", "chatgpt", "chat", "gpt", "open"],
  permission: "",
  category: "4) Fun",
  cooldown: 10,

    async run(bot, message, args) {

          const channelId = "ID DU SALON"
  
      if (message.channel.id !== channelId) {
        return message.reply(`Cette commande ne peut être exécutée que sûr le serveur : **Taverne d'Elexyr22** dans le salon <#${channelId}>`);
      }

        try {
            const prompt = args.join(" ");
            if (!prompt) {
                return message.reply("Merci d'écrire une question. ");
            }

            const configuration = new Configuration({
            apiKey: (key),
            });

            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0,
                max_tokens: 2048,
            });

            const Embed = new MessageEmbed()
                .setColor(bot.color)
                .setDescription(
                    `Question : **${prompt} =** \n\n\`\`\`${response.data.choices[0].text}\`\`\``
                )
                .setAuthor({
                    name: "By Chat GPT :",
                    iconURL: "https://cdn.discordapp.com/attachments/765158755905961984/1099032204996259850/800px-ChatGPT_logo.png",
                })
                .setTimestamp()
                .setFooter(`Demandé par : ${message.user ? message.user.username : message.author.username}`, message.user ? message.user.displayAvatarURL({dynamic: true}) : message.author.displayAvatarURL({dynamic: true}))
                console.log(chalk.red(`[CMD] "${message.author.tag}" à utilisé la commande e!chat-gpt sûr '${message.guild.name}'`))

            message.reply({ embeds: [Embed] });
        } catch (error) {
            console.log(error);
            message.reply( ` *Y'a un putain d'problème. Réessaie plus tard, ça chiera peut-être moins...* | **Erreur :** \`\`${error}\`\` !`)
        }}});
