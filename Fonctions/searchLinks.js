const regex = new RegExp(/https?:\/\/(www\.)?(tenor\.com|giphy\.com)[^\s]+/gi);

module.exports = async (message, member, guild) => {
  // Récupérer l'auteur du message
  const author = message.author;

  // Vérifier si l'auteur a le rôle d'administrateur
  if (message.member.permissions.has("ADMINISTRATOR")) return //console.log("Admin Detecté")

  // Vérifier si le message contient un lien vers Tenor ou Giphy
  if (message.content.match(regex)) return;

  // Vérifier si le message contient un lien Discord.gg sans "https://"
  const discordLinkRegex = new RegExp(/(www\.)?discord\.gg\/\w+/gi);
  if (message.content.match(discordLinkRegex)) {
    await message.delete();
    await message.channel.send(` || ${author} ||, **les liens Discord.gg** ne sont pas __acceptés__ dans ce __salon !__ `)
      .then(async mess => setTimeout(async () => { mess.delete() }, 10000));
    return;
  }

  // Vérifier si le message contient un autre lien
  const otherLinkRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g);
  if (message.content.match(otherLinkRegex)) {
    await message.delete();
    await message.channel.send(`| ${author} ||, **les liens de site** ne sont pas __acceptés__ dans ce __salon !__ `)
      .then(async mess => setTimeout(async () => { mess.delete() }, 10000));
  }
};
