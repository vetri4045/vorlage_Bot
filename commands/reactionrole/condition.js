const { MessageEmbed, DiscordAPIError } = require('discord.js')

module.exports = {
    name: 'condition',
    run: async(client, message) => {
        const embed = new MessageEmbed()
        .setAuthor(`Team Awake Condition`, client.user.displayAvatarURL())
        .setDescription(`<@&798633556050051094>
        > 450pr
        > 12k arena points
        > activ
        > playing cups
        > change discord+ingaamename to Awake (name)
        > change profil picture
        
        <@&798234769733058661>
        > 350pr
        > 10k arena points
        > activ
        > playing cups
        > change discord+ingaamename to Awake (name)
        > change profil picture
        
        <@&798236335693103126>
        > 250pr
        > 8k arena points
        > activ
        > playing cups
        > change discord+ingaamename to Awake (name)
        > change profil picture
        
        <@&798238200601772042>
        > 100pr
        > 6k arena points
        > activ
        > playing cups
        > change discord+ingaamename to Awake (name)
        > change profil picture
        
        <@&798235159882498089>
        > 50pr
        > 3k arena points
        > activ
        > playing cups
        > change discord+ingaamename to Awake (name)
        > change profil picture
        
        <@&798235413247426560>
        > open for all`)
        .setFooter(`Awake Gaming`, client.user.displayAvatarURL())
        .setColor('#FFFFF1')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())

        const msg = await message.channel.send(embed)
        message.delete()
    }
}