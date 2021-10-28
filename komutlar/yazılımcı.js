const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const yetkilog = message.guild.channels.cache.find(c => c.id === (client.config.yetkilog)); 
    let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter(client.config.footer);
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter((client.config.footer));

        if(![(client.config.yetkilialim)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
        return message.channel.send(new MessageEmbed().setDescription(` ${message.author} Komutu kullanmak için yetkin yok.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
          
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription(" Kullanıcı @murphy/İD Belirtmelisin."))
      
        await message.guild.members.cache.get(member.id).roles.add(client.config.yazılımcı)
        message.react((client.config.onayemoji))

        yetkilog.send(new Discord.MessageEmbed().setAuthor(message.member.displayName,message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription( 
              `${client.config.murphyTag} Yazılımcı Olan Kullanıcı: ${member.user}`` \n ${client.config.murphyTag} Yetki Veren Yetkili: <@${message.author.id}>`
            )
        );
      }
    ;


exports.conf = {
    enabled: true, 
    guildOnly: true,
    aliases: ["yazılımcı","Yazılımcı-yap"],
    permLevel: 0,
    name: "yazılımcı"
  }
  
  exports.help = {
    name: "yazılımcı-ver"
  };
  
  