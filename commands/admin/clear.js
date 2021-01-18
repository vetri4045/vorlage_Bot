module.exports = {
    name: "clear",
    aliases: ["clear"],
    desciption: "Clear messages",
    category: "admin",
    run: async (client,message,args) => {
        if(!args[0]) return message.reply("please enter a number!");
        if(isNaN(args[0])) return message.reply("please enter a real number");

        if(args[0] > 100) return message.reply("you cannot delete more than 100 messages!");
        if(args[0] < 0) return message.reply("you must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.delete()
        })
    }
}