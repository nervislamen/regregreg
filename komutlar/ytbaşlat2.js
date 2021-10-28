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
      

        await message.guild.members.cache.get(member.id).roles.add(client.config.yetkili3)
        await message.guild.members.cache.get(member.id).roles.add(client.config.yetkili4)
        await message.guild.members.cache.get(member.id).roles.add(client.config.yetkili5)

        message.react((client.config.onayemoji))

        yetkilog.send(new Discord.MessageEmbed().setAuthor(message.member.displayName,message.author.avatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setTimestamp()
            .setDescription( 
              `${client.config.murphyTag} Yetkili Olan Kullanıcı: ${member.user} \n\n ${client.config.murphyTag} Yetki Veren Yetkili: <@${message.author.id}>`
            )
        );
      }
    ;


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yetki-ver2","yetkiliyap2","yetkibaşlat2","ybaşlat2","yetki-başlat2"],
    permLevel: 0,
    name: "yetkili-yap2"
  }
  
  exports.help = {
    name: "yetkili-yap2"
  };
  
  