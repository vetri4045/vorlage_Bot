//Module
const { Client, Collection, MessageEmbed} = require("discord.js");
const config = require("./config.json");
const Discord = require('discord.js');
const fs = require("fs");
const Canvas = require('canvas')
const client = new Client({
    disableEveryone: true,
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});


client.on('guildMemberAdd', async member => {
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./welcome.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#C0C0C0';
    ctx.strokeRect(0, 0, canvas.width-5, canvas.height-5);
    
    ctx.font = '32px Impact';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to Awake Gaming,', canvas.width / 2.5, canvas.height / 3.5);
        ctx.font = '45px Impact';
	    ctx.fillStyle = '#F8F8F8';
        ctx.fillText(`${member.user.tag}`, canvas.width / 2.5, canvas.height / 1.9);
            ctx.font = '25px Impact';
	        ctx.fillStyle = '#F8F8F8';
            ctx.fillText(`You are our ${client.guilds.cache.get("798232929968586823").memberCount} Member!`, canvas.width / 2.45, canvas.height / 1.44);
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');        
    let welcomeRoles = member.guild.roles.cache.find(role => role.id === '798232929968586830');
    let welcomeRole = member.guild.roles.cache.find(role => role.id === '798253895096074310');
    const welcomeembed = new Discord.MessageEmbed()
    .setAuthor(`Welcome ${member.user.tag}`, client.user.displayAvatarURL())
    .setDescription(`Heyy <@${member.user.id}>, welcome to the **Awake Gaming** Discord please read and accept sthe <#798232931025551400>!`)
    .setFooter(`Awake Gaming`, client.user.displayAvatarURL())
    .setColor('#fffff1')
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    .setImage("attachment://welcome-image.png")
    .attachFiles(attachment);
    member.roles.add(welcomeRoles);
    member.roles.add(welcomeRole);
    member.guild.channels.cache.get('798232931025551399').send(welcomeembed)
})
 
let countChannel = {
    total: "798892897969242122",
    member: "798892932895080478",
    bots: "798893001149251636",
    serverID: "798232929968586823"
}

client.on("guildMemberAdd", member => {
    if (member.guild.id !== countChannel.serverID) return; 

    client.channels.cache.get(countChannel.total).setName(`👥｜Total Members: ${member.guild.memberCount}`);
    client.channels.cache.get(countChannel.member).setName(`👥｜Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(countChannel.bots).setName(`🤖｜Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
client.on("guildMemberRemove", member => {
    if (member.guild.id !== countChannel.serverID) return; 

    client.channels.cache.get(countChannel.total).setName(`👥｜Total Members: ${member.guild.memberCount}`);
    client.channels.cache.get(countChannel.member).setName(`👥｜Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(countChannel.bots).setName(`🤖｜Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})



client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands");

["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(client);
});


client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798344400450486302'){
        if(reaction.emoji.name === '🇩🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798342926785708055')
            user.send('I gave you \`｜Germany\`!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798344400450486302'){
        if(reaction.emoji.name === '🇩🇪'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798342926785708055')
            user.send('I took \`｜Germany\` away from you!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798344400450486302'){
        if(reaction.emoji.name === '🇬🇧'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798343035729084447')
            user.send('I gave you \`｜English\`!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798344400450486302'){
        if(reaction.emoji.name === '🇬🇧'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798343035729084447')
            user.send('I took \`｜English\` away from you!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798344400450486302'){
        if(reaction.emoji.name === '🏳️'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798343110832816139')
            user.send('I gave you \`｜Other\`!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798344400450486302'){
        if(reaction.emoji.name === '🏳️'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798343110832816139')
            user.send('I took \`｜Other\` away from you!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798563509968961547'){
        if(reaction.emoji.name === '🖥'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798561615032352798')
            user.send('I gave you \`｜PC\`!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798563509968961547'){
        if(reaction.emoji.name === '🖥'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798561615032352798')
            user.send('I took \`｜PC\` away from you!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798563509968961547'){
        if(reaction.emoji.name === '🎮'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798561729666744320')
            user.send('I gave you \`｜Console\`')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798563509968961547'){
        if(reaction.emoji.name === '🎮'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798561729666744320')
            user.send('I took \`｜Console\` away from you!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798563509968961547'){
        if(reaction.emoji.name === '📱'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798561805709475852')
            user.send('I gave you \`｜Phone/Switch\`!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798563509968961547'){
        if(reaction.emoji.name === '📱'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798561805709475852')
            user.send('I took \`｜Phone/Switch\` away from you!')
        }
    }
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798618285658341412'){
        if(reaction.emoji.name === 'Awake'){
            await reaction.message.guild.members.cache.get(user.id).roles.add('798618430897913907')
            user.send('Thanks for Accepting the Rules!')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '798618285658341412'){
        if(reaction.emoji.name === 'Awake'){
            await reaction.message.guild.members.cache.get(user.id).roles.remove('798618430897913907')
            user.send('Why you unreact?')
        }
    }
})




let i = 0;
var STATUSTEXT = [
    "#AwakeOnTop",  //index == 0
    "a!help for help",  //index == 1
];
client.on("ready", () => {
    console.log("Bot is ready");
        //INIT
        client.user.setActivity("Awake Gaming", { type: "PLAYING" })
    //LOOP
    setInterval(()=>{
        const index = Math.floor(i);
        if(index == 0 )client.user.setActivity(STATUSTEXT[index], { type: "PLAYING" }) 
        else if(index == 1 )client.user.setActivity(STATUSTEXT[index], { type: "PLAYING"}) 
        else client.user.setActivity(STATUSTEXT[index], { type: "PLAYING"}) 
        i++;
        if(i===STATUSTEXT.length) i -= STATUSTEXT.length;
    }, 10*1000)

})





client.on("message", async message =>{
    const prefix = config.prefix;
    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) 
        command.run(client, message, args);
});

client.on('message', async message => {

    let args = message.content.slice(config.prefix.length).trim().split(/ +/)
    let command = args.shift().toLowerCase()



    let questions = {
        firstQuestion: "Name?",
        secondQuestion: "Ingamename?",
        thirdQuestion: "Alter?",
        fourthQuestion: "Welches Team?",
        fifthQuestion: "wärst du bereit dein name ingame und auf discord zu ändern sowie unser pb zu nutzen?",
    }
    const embed1 = new MessageEmbed()
    .setAuthor('Question 1', client.user.displayAvatarURL())
    .setDescription(questions.firstQuestion)
    .setFooter('Awake Gaming', client.user.displayAvatarURL())
    .setColor('#FFFFF1')
    .setTimestamp()
    const embed2 = new MessageEmbed()
    .setAuthor('Question 2', client.user.displayAvatarURL())
    .setDescription(questions.secondQuestion)
    .setFooter('Awake Gaming', client.user.displayAvatarURL())
    .setColor('#FFFFF1')
    .setTimestamp()
    const embed3 = new MessageEmbed()
    .setAuthor('Question 3', client.user.displayAvatarURL())
    .setDescription(questions.thirdQuestion)
    .setFooter('Awake Gaming', client.user.displayAvatarURL())
    .setColor('#FFFFF1')
    .setTimestamp()
    const embed4 = new MessageEmbed()
    .setAuthor('Question 4', client.user.displayAvatarURL())
    .setDescription(questions.fourthQuestion)
    .setFooter('Awake Gaming', client.user.displayAvatarURL())
    .setColor('#FFFFF1')
    .setTimestamp()
    const embed5 = new MessageEmbed()
    .setAuthor('Question 5')
    .setDescription(questions.fifthQuestion)
    .setFooter('Awake Gaming', client.user.displayAvatarURL())
    .setColor('#FFFFF1')
    .setTimestamp()


    if (!message.content.startsWith(config.prefix) || message.author.bot) return
    if (command === "apply") {
        message.channel.send("I have started this process in your DM's. Type `cancel` to cancel")
        message.author.send(embed1).then(msg => {
            const filter1 = m => m.author.id === message.author.id
            msg.channel.awaitMessages(filter1, {
                time: 5 * 60000,
                max: 1
            }).then(messages => {
                let msg1 = messages.first().content
                if(msg1.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                message.author.send(embed2).then(msg => {
                    const filter1 = m => m.author.id === message.author.id
                    msg.channel.awaitMessages(filter1, {
                        time: 5 * 60000,
                        max: 1
                    }).then(messages => {
                        let msg2 = messages.first().content
                        if(msg2.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                        message.author.send(embed3).then(msg => {
                            const filter1 = m => m.author.id === message.author.id
                            msg.channel.awaitMessages(filter1, {
                                time: 5 * 60000,
                                max: 1
                            }).then(messages => {
                                let msg3 = messages.first().content
                                if(msg3.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                message.author.send(embed4).then(msg => {
                                    const filter1 = m => m.author.id === message.author.id
                                    msg.channel.awaitMessages(filter1, {
                                        time: 5 * 60000,
                                        max: 1
                                    }).then(messages => {
                                        let msg4 = messages.first().content
                                        if(msg4.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                        message.author.send(embed5).then(msg => {
                                            const filter1 = m => m.author.id === message.author.id
                                            msg.channel.awaitMessages(filter1, {
                                                time: 5 * 60000,
                                                max: 1
                                            }).then(messages => {
                                                let msg5 = messages.first().content
                                                if(msg5.toLowerCase() === "cancel") return message.author.send("Ok, I have cancelled this process")
                                                message.author.send("Subbmitted application!").then(msg => {
                                                    message.client.channels.cache.get(config.applicationChannel).send(
                                                        new Discord.MessageEmbed()
                                                            .setAuthor(`Application Submitted`, client.user.displayAvatarURL())
                                                            .setDescription(`This application was submitted by ${message.author.tag}`)
                                                            .addField(questions.firstQuestion, "Answer: " + msg1)
                                                            .addField(questions.secondQuestion, "Answer: " + msg2)
                                                            .addField(questions.thirdQuestion, "Answer: " + msg3)
                                                            .addField(questions.fourthQuestion, "Answer: " + msg4)
                                                            .addField(questions.fifthQuestion, "Answer: " + msg5)
                                                            .setFooter(`Awake Gaming`, client.user.displayAvatarURL())
                                                            .setColor('#FFFFF1')
                                                    )
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }

    if(command === "decline"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you dont' have permission to use this command")
        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to decline")
        const declineembed = new MessageEmbed()
        .setAuthor('Accept', client.user.displayAvatarURL())
        .setDescription("Your application to " + message.guild.name + " got declined by: " + message.author.tag)
        .setFooter('Awake Gaming', client.user.displayAvatarURL())
        .setColor('#FFFFF1')
        .setTimestamp()
        User.send(declineembed)
        message.delete()
    }

    if(command === "accept"){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("you dont' have permission to use this command")
        let User = message.mentions.users.first()
        if(!User) return message.channel.send("Please provide a user for me to accept")
        const acceptembed = new MessageEmbed()
        .setAuthor('Accept', client.user.displayAvatarURL())
        .setDescription("Your application to " + message.guild.name + " got accepted by: " + message.author.tag)
        .setFooter('Awake Gaming', client.user.displayAvatarURL())
        .setColor('#FFFFF1')
        .setTimestamp()
        User.send(acceptembed)
        message.delete()
    }
})

client.login(config.token);