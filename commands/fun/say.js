module.exports = {
    name: "say",
    aliases: ["say"],
    category: "fun",
    desciption: "sende die nachricht erneut",
    alias: "sag",
    run: async (client, message, args) => {
        message.channel.send(args.join(" "))
        message.delete()
    }
}