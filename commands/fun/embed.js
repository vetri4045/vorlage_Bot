const {MessageEmbed} =require("discord.js")
module.exports = {
	name: "embed",
	category: "fun",
	aliases: [""],
  description: "Resends the message",
  run: async (client, message, args) => {

	const argsneu = message.content.slice(7).split("+")

    const BESCHREIBUNG = argsneu[0];


	const embed = new MessageEmbed()
	.setColor("ff0000")
	.setFooter("Message By:", client.user.displayAvatarURL())
	.setTimestamp()
	.setAuthor("MyKu's Community")
	.setDescription(BESCHREIBUNG)

	message.channel.send(embed)
	message.delete()

}
}