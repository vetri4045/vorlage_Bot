module.exports = {
    name: "ping",
    aliases: ["internetverbindung"],
    category: "info",
    desciption: "sehe dein ping",
    run: async (client, message, args) => {
        let temp_msg = await message.channel.send("Getting ping...")
        temp_msg.edit(`Your ping is \`${client.ws.ping}\``)
        message.delete()
    }
}