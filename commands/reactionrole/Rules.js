const { MessageEmbed, DiscordAPIError } = require('discord.js')

module.exports = {
    name: 'rules',
    run: async(client, message) => {
        const embed = new MessageEmbed()
        .setAuthor(`Awake Gaming Rules`, client.user.displayAvatarURL())
        .setDescription(`**1. Designation of names**
        The nickname should correspond to the ingame nickname. Possibly. the nickname can be supplemented by another nickname.
        Nicknames may not contain any offensive or other prohibited or protected names or parts of names.
        **2. Avatar**
        Avatars may not contain pornographic, racist, insulting or other content in violation of German law.
        **3. Way of speaking**
        Dealing with other Discord users should always be friendly. Verbal attacks against other users are strictly prohibited.
        **5. Channel-hopping**
        Channel-hopping (the constant jumping from one to the other channel) is prohibited.
        **6. Record conversations**
        Cutting conversations is only allowed on the entire server after consultation with the users present on the corresponding channel. If a user does not consent to the recording, the recording of the conversation is prohibited. Except for recordings by an admin!
        **8. Kick/Ban**
        A kick or spell is not unfounded at any time, but is intended to stimulate thinking about oneâ€™s own behaviour. Inappropriate kicks/banners must be reported to the server admin.
        **9. Discord rights**
        Discord rights are not granted randomly, but always serve a specific reason. If rights are required, you can turn to the server admin.
        **10. Right to issue instructions**
        Server Admins, moderators or otherwise authorized Admins have full authority. Refusing a certain instruction can lead to a kick or ban.`)
        .setFooter(`Awake Gaming`, client.user.displayAvatarURL())
        .setColor('#FFFFF1')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())

        const msg = await message.channel.send(embed)
        await msg.react('<:Awake:798610065492803624>')
        message.delete()
    }
}