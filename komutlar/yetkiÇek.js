const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const yetkilog = message.guild.channels.cache.find(c => c.id === (client.config.yetkilog)); 
    let embed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter(client.config.footer);
        let embed2 = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('#009dff').setTimestamp().setThumbnail(message.author.avatarURL).setFooter((client.config.footer));

        if(![(client.config.yetkilialim)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
        return message.channel.send(new MessageEmbed().setDescription(`${client.config.murphyTag} ${message.author} Komutu kullanmak için yetkin yok.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
          
        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.channel.send(embed.setDescription(`${client.config.murphyTag} Kullanıcı @murphy/İD Belirtmelisin.`))
      
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili1)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili2)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili3)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili4)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili5)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili6) 
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili7)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili8)
        await message.guild.members.cache.get(member.id).roles.remove(client.config.yetkili9)
        message.react((client.config.onayemoji))

        yetkilog.send(new Discord.MessageEmbed().setAuthor(message.member.displayName,message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription(`${client.config.murphyTag} Yetkilisi Çekilen Kullanıcı: ${member.user} \n ${client.config.murphyTag} Yetkiyi Çeken Yetkili: <@${message.author.id}>`
            )
        );
      }
    ;


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yetki-çek","yetkiçek","yçek","ytçek"],
    permLevel: 0,
    name: "yetkiçek"
  }
  
  exports.help = {
    name: "yetkiçek"
  };
  
  