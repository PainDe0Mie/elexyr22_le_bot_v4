const { joinVoiceChannel } = require('@discordjs/voice');
const Event = require("../../Structure/Event");

// Les IDs des salons vocaux cibles
const targetVoiceChannelIds = ["ID"];

module.exports = new Event("voiceStateUpdate", async (bot, oldState, newState) => {
  const db = bot.db;
  const oldChannel = oldState.channel;
  const newChannel = newState.channel;

  if (oldChannel && !newChannel && targetVoiceChannelIds.includes(oldChannel.id)) {
    // Le bot s'est déconnecté d'un salon vocal cible, nous allons essayer de le reconnecter.

    try {
      const connection = joinVoiceChannel({
        channelId: oldChannel.id,
        guildId: oldChannel.guild.id,
        adapterCreator: oldChannel.guild.voiceAdapterCreator,
      });

      // Écoute de l'événement "disconnect" pour réagir en cas de déconnexion.
      connection.on("disconnect", async () => {
        console.log("Bot déconnecté d'un salon vocal cible. Reconnexion...");

        try {
          // Reconnexion automatique au salon vocal cible.
          const newConnection = joinVoiceChannel({
            channelId: oldChannel.id,
            guildId: oldChannel.guild.id,
            adapterCreator: oldChannel.guild.voiceAdapterCreator,
          });

          // Mettez à jour la nouvelle connexion dans votre code, par exemple, stockez-la dans une variable globale.
          // global.voiceConnection = newConnection;

          console.log("Reconnexion réussie !");
        } catch (reconnectError) {
          console.error("Erreur lors de la reconnexion au salon vocal cible :", reconnectError);
        }
      });
    } catch (error) {
      console.error("Erreur lors de la connexion au salon vocal cible :", error);
    }
  }
});
