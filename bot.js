const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";







//هنا تحط الكودات الي تبيها
 

//////كود هيلب
 
client.on("message", async(niro_sys) => {
    var prefix = "$"
    var error = "❌";
    var success = "✅";
    var lodeing = "🤔";
    if (niro_sys.author.bot) return;
    if (niro_sys.channel.type == "dm") return niro_sys.channel.send(new Discord.MessageEmbed().setTitle(error + " **You Can't Use This Command In DM!**"))
    if (niro_sys.content.startsWith(prefix + "help")) {
        niro_sys.channel.send(lodeing + " **Processing data ...**").then((m) => {
            m.edit(success + " **Processing is complete**")
        })
        niro_sys.channel.send(new Discord.MessageEmbed().setTitle("**Bot Orders**").setThumbnail(niro_sys.member.user.avatarURL({ format: "gif", format: "png", dynamic: true, size: 1024 }))
            .addField(prefix + "user", "To Know your account information", true)
            .addField(prefix + "server", "To know the server information", true)
            .addField(prefix + "ban", "To Ban Someone", true)
            .addField(prefix + "unban", "To Unban Someone", true)
            .addField(prefix + "kick", "To Kick Someone", true)
            .addField(prefix + "lock", "To Lock The Chat", true)
            .addField(prefix + "unlock", "To Unlock The Chat", true)
            .addField(prefix + "mute", "To Mute Someone And Prevent Them From Talking", true)
            .addField(prefix + "unmute", "To Unmute Someone", true)
            .addField(prefix + "mutev", "To Mute Someone From Voice Channels", true)
            .addField(prefix + "unmutev", "To Mute Someone From Voice Channels", true)
            .addField(prefix + "move", "To Move Someone To Your Voice Channel", true)
            .addField(prefix + "clear", "To Clear The Chat", true)
            .addField(prefix + "roleall", "To Mass Give All Members A Role", true)
            .addField(prefix + "say", "I Will Repeat What You Said!", true)
            .addField(prefix + "inv", "To Invite The Bot To Your Server", true)
            .addField(prefix + "sup", "The bot Support Server", true)
            .addField(prefix + "ping", "To Check The Bot's Ping", true)
            .addField(prefix + "bot servers", "To Know How Much Servers the bot in", true)

        )
    }
})








////////

///كود البوت بكم سيرفر
client.on('message', message => {
    if (message.content === prefix + 'bot servers') {
        const embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('**Servers**', `➠${client.guilds.cache.size}`)
            .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(embed)
    }
});

////

////كود مسح الشات


client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
if (command == "clear" || command == "purge") { 
message.delete({timeout: 0})///iiYeahBoy
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);///iiYeahBoy
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))///iiYeahBoy
if(!messagecount) messagecount = '50';
    message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
${msgs.size} messages cleared
\`\`\``).then(messages => ///iiYeahBoy
messages.delete({timeout:5000}));
    })
  }    
});



//////

///// كود بان وفك بان

client.on('message', message => {
if (!message.guild) return;
if (message.content.startsWith( prefix + 'ban')) {
if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");      
const user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
if (user) {
const member = message.guild.member(user);
if (member) {
member.ban({
reason: 'IDK',
})
.then(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**✅ ${user.username} banned from the server! ✈️**`)
message.channel.send(embed);
})
.catch(err => {
 message.reply(`🙄 - I couldn't ban that user. Please check my permissions and role position.`);
console.error(err);
});
} else {
message.reply(`**🙄 - I can't find ${user.id} in the ban list**`);
}
} else {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("**Command: ban**")
.setDescription(`
Bans a member.

**Usage:**
${prefix}ban (user) (time m/h/d/mo/y) (reason)

**Examples:**
${prefix}ban ${message.author}
${prefix}ban ${message.author} spam
${prefix}ban ${message.author} 1h spam
${prefix}ban ${message.author} 1d spam
${prefix}ban ${message.author} 1w`)
message.channel.send(embed);
    }
  }
});












client.on('message', message => {
if (!message.guild) return;
if (message.content.startsWith( prefix + 'kick.')) {
if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");      
const user = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
if (user) {
const member = message.guild.member(user);
if (member) {
member.kick({
reason: 'IDK',
})
.then(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`**✅ ${user.username} Kicked from the server! ✈️**`)
message.channel.send(embed);
})
.catch(err => {
 message.reply(`🙄 - I couldn't kick that user. Please check my permissions and role position.`);
console.error(err);
});
} else {
message.reply(`**🙄 - I can't find ${user.id} in the ban list**`);
}
} else {
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("**Command: kick**")
.setDescription(`
Bans a member.

**Usage:**
${prefix}kick (user) (time m/h/d/mo/y) (reason)

**Examples:**
${prefix}kick ${message.author}
${prefix}kick ${message.author} spam
${prefix}kick ${message.author} 1h spam
${prefix}kick ${message.author} 1d spam
${prefix}kick ${message.author} 1w`)
message.channel.send(embed);
    }
  }
});






















client.on("message", message => {
        let command = message.content.split(" ")[0];
        if (command == prefix + "unban") {
          if (!message.member.hasPermission("BAN_MEMBERS")) return;
          let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
          if (args == "all") {
            message.guild.fetchBans().then(zg => {
              zg.forEach(Saad => {
                message.guild.members.unban(Saad);
              });
            });
            return message.channel.send("**✅ Unbanned all members **");
          }
          if (!args) return message.channel.send("**Please Type the member ID**");
          message.guild
            .unban(args)
            .then(m => {
              message.channel.send(
                `<a:x13:712913365508292610> **-** **Done Unbanned ${m.username}**`
              );
            })
            .catch(stry => {
              message.channel.send(
                `<a:x30:714394016883540031> **-** **I can't find \`${args}\` in the ban list**`
              );
            });
        }
      });



//////


////كود ميوت صوتي وفكه
client.on('message', async message => {
  if (message.content.startsWith(prefix + 'mutev')) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`ليس لديك الإذن : \`\`\` \n\n **\`MUTE_MEMBERS\`**`);
    let mention = message.mentions.members.first();
    let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
    if (!role) {
      message.guild.roles.create({
        data: {
          name: 'Muted',
          permissions: [],
          color: 'random'
        }
      })
    }
    if (!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\`**`);
    message.guild.channels.cache.forEach(c => {
      c.updateOverwrite(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    mention.roles.add(role)
    message.channel.send(`**✅ - ${mention.user.tag} was muted successfully**`)
  }
});

//unmute

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'unmutev')) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
    let mention = message.mentions.members.first();
    var args = message.content.split(" ").slice(2).join(" ")
    let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
    if (!mention) return message.channel.send(`**Usage: ${prefix}توقيف ميوت \`<@user>\` **`);
    if (member.user.id === client.user.id) return message.channel.send(`**I Didn't Find The Member You Mentioned**`);
    mention.roles.remove(role)
    message.channel.send(`**✅ - ${mention.user.tag} Was Muted Successfully**`)
    let mens = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle(`تم إلغاء كتم صوتك`)
      .setDescription(`**
 Server : ${message.guild.name}
 Reason  : ${args || "No Reason Was Provided."}
 By : ${message.author}
**`)
      .setColor("GREY")
      .setFooter('ID ' + message.author.id, message.author.avatarURL())
    member.send(mens);
  }
});


///


///كود انفيت وسبورت

client.on('message', message => {
   
     if (message.content === (prefix + "inv")) {
  
     let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .setTitle("ClickHere")
  .setURL("lol no")
     .setFooter("")
     .setTimestamp()
  message.channel.send(embed);
    }
});
client.on('message', message => {
   
     if (message.content === (prefix + "sup")) {
  
     let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .setTitle("ClickHere For Support")
  .setURL("https://discord.gg/RjefM6rt9j")
     .setFooter("")
     .setTimestamp()
  message.channel.send(embed);
    }
});


///كود معلومات السيرفر
client.on(`message`, message => {
   if (message.content.startsWith(prefix + "server")) {
      if (!message.channel.guild) return message.channel.send('This is for servers only');

      const text = message.guild.channels.cache.filter(r => r.type === "text").size
      const voice = message.guild.channels.cache.filter(r => r.type === "voice").size
      const chs = message.guild.channels.cache.size
      const avaibles = message.guild.features.map(features => features.toString()).join("\n")

      const roles = message.guild.roles.cache.size

      const online = message.guild.members.cache.filter(m =>
         m.presence.status === 'online'
      ).size

      const idle = message.guild.members.cache.filter(m =>
         m.presence.status === 'idle'
      ).size

      const offline = message.guild.members.cache.filter(m =>
         m.presence.status === 'offline'
      ).size

      const dnd = message.guild.members.cache.filter(m =>
         m.presence.status === 'dnd'
      ).size

      const black = new Discord.MessageEmbed()
         .setTitle('Server Info')
         .setColor('RED')
         .addFields(
            {
               name: `🆔 Server ID`,
               value: `${message.guild.id}`,
               inline: true

            },
            {
               name: `📆 Created On`,
               value: message.guild.createdAt.toLocaleString(),
               inline: true
            },
            {
               name: `👑 Owner By`,
               value: `${message.guild.owner}`,
               inline: true

            },
            {
               name: `👥 Members (${message.guild.memberCount})`,
               value: `**${online}** Online \n **${message.guild.premiumSubscriptionCount}** Boosts ✨`,
               inline: true
            },
            {
               name: `💬 Channels (${chs})`,
               value: `**${text}** Text | **${voice}** Voice`,
               inline: true
            },
            {
               name: `🌍 Others`,
               value: `**Region:** ${message.guild.region}\n**Verification Level:** ${message.guild.mfaLevel}`,
               inline: true
            },

         )
         .setFooter('', message.author.avatarURL())
      message.channel.send(black)
   }
});


///كود يوزر
client.on('message', message => {
let moment = require("moment");
let error = "❌";
let success = "✅";
let lodeing = "🤔";
        if (message.content.startsWith(prefix + "user")) {
            if (message.author.bot) return;
            if (message.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`request BY ${msg.author.tag}`).setTimestamp())
 
            var args = message.content.split(" ").slice(1);
            let user = message.mentions.users.first();
            var men = message.mentions.users.first();
            var heg;
            if (men) {
                heg = men
            } else {
                heg = message.author
            }
            var mentionned = message.mentions.members.first();
            var h;
            if (mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            moment.locale('en-US');
            let id = new Discord.MessageEmbed()
                .addField('**JOINED DISCORD :**', `${moment(heg.createdTimestamp).format('YYYY/M/D')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``, true)
                .addField('**JOINED SERVER :**', `${moment(h.joinedAt).format('YYYY/M/D')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
                .setThumbnail(heg.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }));
            message.channel.send(id)
        }
    })


///



///code kick كود كيك

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("**Please Mention A Member**");
    if (!reason) return message.reply("**Please Provide A Reason For The Kick**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**I Can Not Kick Someone That Has a Role Upper Than Me. Please Move My Role UP**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("You Can Not Kick Someone That Has More Power Than You!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});


///


////كود معلومات البوت
client.on("message", async msg => {
    if (msg.content.startsWith(prefix + "bot")) {
const m = await msg.channel.send("Bot's info !");
const bot = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.displayAvatarURL({ format : 'png' , dynamic: true, size: 2048 }))
.setFooter(`Requested By ${msg.author.tag}`, msg.author.displayAvatarURL({  dynamic: true, size: 2048 }))
.setTimestamp()
.setColor("RANDOM")
.addField(`🚀 ⊢Bot Name`, `**${client.user.tag}**`, true)
.addField(`🆔 ⊢Bot ID`, `${client.user.id}`, true)
.addField(`👑 ⊢Bot Owner`, `<@643500735031541760>`, true)
.addField(`📶 ⊢Bot Ping`, `\`${m.createdTimestamp - msg.createdTimestamp}ms\`\n Uptime : \`${client.uptime}\``, true)
.addField(`📒 ⊢Library`,`Discord.js\nnode.js-javascript`, true)
.addField(`📉 ⊢Memory Usage`,`RSS : \`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB\`\`\n Heap : \`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\``, true)
.addField(`📌 ⊢Guilds Size`, `${client.guilds.cache.size}`, true)
.addField(`👥 ⊢Users Size`, `${client.users.cache.size}`, true)
.addField(`💬 ⊢Channels Size`, `${client.channels.cache.size}`, true)


m.edit(bot)
}
});
///

///كود فتح وقفل الشات

client.on('message',async message =>{
let command = message.content.split(" ")[0]
command = command.slice(prefix.length)
if (message.content === prefix + "unlock") {
  if (!message.channel.guild)
    return message.reply("**this command is only for servers**");

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply("**you don't have permissions **``MANAGE_MESSAGES``");
  message.channel.overwritePermissions([
{
 id: message.guild.id,
 allow: ['SEND_MESSAGES'],
},
], 'Needed to change permissions')
   message.channel.send(`**:unlock:| ${message.channel} Has Been Unlocked. **`)

}

if (message.content === prefix + "lock") {
  if (!message.channel.guild)
    return message.reply("**this command is only for servers**");

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply("**you don't have permissions** ``MANAGE_MESSAGES``**");
  message.channel.overwritePermissions([
{
 id: message.guild.id,
 deny: ['SEND_MESSAGES'],
},
], 'Needed to change permissions')
      message.channel.send(`**:lock:| ${message.channel} Has Been Locked.**`)


}
});




///

//// كود سحب شخص
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

///


/////كود ميوت وان ميوت

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "mute")){
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.channel.send("You don't have permissions")
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.channel.send(`**Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')} **`)
                if (member.id === normal.author.id)return normal.reply(`**You can't mute yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't mute me dumbass**`)
        let mutedrole = normal.guild.roles.cache.find(ro => ro.name === 'muted')
        if(!mutedrole) {
        try {
        var createdrole = await normal.guild.roles.create({
                      data : {
                        name : 'muted',
                        permissions: [],
                    }});
                        normal.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(createdrole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                } catch (err) {
                console.log(err)
            }};
let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
         member.roles.add(muterole)
        normal.channel.send(`**${member.user.username} Has been muted**`)
    } 
})
///unmute
client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "unmute")){
    var args = normal.content.slice(prefix.length).trim().split(/ +/g);
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.channel.send("You don't have permissions");
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                     if(!member) return normal.channel.send(`**Please Mention user or Type the user ID/Username **`)
                let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
        if(!member.roles.cache.has(muterole.id))return normal.channel.send(`**${member.user.username} is not muted**`)
        await member.roles.remove(muterole);
        normal.channel.send(`**${member.user.username} Has been unmuted**`)
  }})




///كود حاله للبوت

client.on('ready', () => {
console.log(`${client.user.username} Hey there !`)
client.user.setStatus('online') // هنا ستاتس البوت
client.user.setActivity('$help') // هنا ال playing
})



//


//كود ساي
client.on('message', layer => {
  if(layer.content.startsWith(prefix + "say")){
  let args = layer.content.split(' ').slice('1').join(" ")
 if(!layer.member.hasPermission("ADMINISTRATOR")) return;
     let layerConding = new Discord.MessageEmbed()
     .setAuthor(layer.author.tag,layer.author.avatarURL())
    .setDescription(`${args}`)
    .setColor('#db0000')
    layer.channel.send(layerConding)
  }
})

//

//كود بينق
client.on ('message', async (Fathy) => {
  if (!Fathy.guild || Fathy.author.bot) return false;
  var prefix = '$';
  if (Fathy.content == prefix + 'ping') {
    const msg = await Fathy.channel.send ("1_Ali_1");
    msg.delete ();
    Fathy.channel.send (`\`\`\`javascript\nDiscord API: ${Math.round (client.ping)}ms\nTime taken: ${msg.createdTimestamp - Fathy.createdTimestamp}\n\`\`\` `)
  }
})


///

///كود يقول البوت كم شغال

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "uptime")){
    var embed = new Discord.MessageEmbed()
    .setDescription(`${pretty(client.uptime)}`)
    .setColor(badboy.member.displayHexColor)
    badboy.channel.send(embed)
  }
})
const pretty = require("pretty-ms");





///

///كود يعطي للكل رتبه

client.on('message', async normal => {
          if(normal.content.startsWith(prefix + 'roleall')) {
          if(!normal.member.hasPermission("MANAGE_ROLES")) return normal.channel.send(`You Don't have the permission : *MANAGE_ROLES**`);
     var rrole = normal.content.split(" ").slice(1).join(" ");
          var role = normal.mentions.roles.first() || normal.guild.roles.cache.find(r => r.name === rrole)||normal.guild.roles.cache.find(r => r.id === rrole);
          if(!role) return normal.channel.send(`**I can't find this role ${rrole}!?**`);
            normal.guild.members.cache.forEach(async m => { 
             await
              m.roles.add(role)
             })
       normal.channel.send(`**${role.name} has been added to all the members in this server**`)
         }
          })


///


///تغير صورة البوت

client.on("message",angelo=>{
  if(angelo.content.startsWith(prefix+"set-botavatar")){
    if(angelo.author.id !== '643500735031541760') return;
    let args = angelo.content.split(" ").slice(1).join(" ");
    if(!args) return;
    client.user.setAvatar(args)
    angelo.channel.send('**Done**')
  }
});

///



///كود يثبت البوت بروم

setInterval(() => {
  const channelid = "842423412475691018" //ايدي الروم
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);

///


///Start Up project

client.on('ready',() => {
  let saif = client.channels.cache.find(channel => channel.id === '840945096593637417')
  if(!saif) return;
  saif.send('**I\'m ready now**')
});

////

//تغير اسم البوت

client.on("message", message => {
  if (message.content.startsWith(prefix + "setname")) {
    if (message.author.id !== '643500735031541760') return;
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return;
    client.user.setUsername(args)
    message.channel.send(`${client.user.username} name has been channged to **${args}**`)
  }
})

//



//خاص البوت
client.on('message', message => {
  if (message.guild) return undefined;
  var roomid = "842815982262681641";
  var secound = 5; //عدد الثواني المحددة
  var room = client.channels.cache.get(roomid);
  if (!room) return undefined;
  var emb = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setThumbnail(message.author.avatarURL())
  .setFooter(`From ${message.author.tag}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`**Message from ${message.author} in dm**\n\`\`\`apache\nMessage:\n${message.content}\`\`\``)
  .setFooter(`${message.author.tag}`)
  .setThumbnail(message.author.displayAvatarURL())
  .setTimestamp();
  room.send(emb);
});//『CR』亗〆Ť I G E R〆亗#0245
//

//معلومات المبرمج
client.on('message', message => {
    if (message.content === prefix + 'dev') {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM") // By SaifDemos.Layer.Coding
            .addField('**Name**', ` Ban`)
            .addField('**Age**', ` 14 `)
            
            .setFooter(`Requested By ${message.author.username}`,message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(embed) // By SaifDemos.Layer.Coding
    }
});





//

//
//

client.login(process.env.TOKEN);
