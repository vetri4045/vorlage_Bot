const {MessageEmbed} =require("discord.js")
module.exports = {
	name: "quickembed",
	category: "admin",
	aliases: ["quickembed"],
  description: "Resends the message",
  run: async (client, message, args) => {

	const argsneu = message.content.slice(12).split("|")

    const BESCHREIBUNG = argsneu[0];
    const AUTHOR = argsneu[1];
    const FOOTER = argsneu[2];
    const COLOR = argsneu[3];

	const embed = new MessageEmbed()
	.setColor(COLOR)
	.setFooter(FOOTER, client.user.displayAvatarURL())
	.setTimestamp()
	.setAuthor(AUTHOR, client.user.displayAvatarURL())
	.setDescription(BESCHREIBUNG)

	message.channel.send(embed)
	message.delete()

}
}