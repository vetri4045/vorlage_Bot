const { MessageEmbed, DiscordAPIError } = require('discord.js')

module.exports = {
    name: 'rr-msg',
    run: async(client, message) => {
        const embed = new MessageEmbed()
        .setAuthor(`Reaction Roles`, client.user.displayAvatarURL())
        .setDescription(`React to get the role!
        
        🇩🇪 = Germany
        🇬🇧 = English
        🏳️ = Other`)
        .setFooter(`Awake Gaming`, client.user.displayAvatarURL())
        .setColor('#FFFFF1')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())

        const msg = await message.channel.send(embed)
        await msg.react('🇩🇪')
        await msg.react('🇬🇧')
        await msg.react('🏳️')
        message.delete()
    }
}