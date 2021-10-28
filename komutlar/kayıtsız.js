const Discord = require('discord.js');
const db = require("quick.db")
exports.run = (client, message, args) => {
    if (!message.member.roles.cache.has(client.config.teyitci) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('**Bu komutu kullanabilmek için Yetkili olmak gerek!**').setColor("Black"));
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('**Bir @Murphy/İD girmelisin**').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  message.guild.members.cache.get(member.id).roles.cache.forEach(r => {
message.guild.members.cache.get(member.id).roles.remove(r)

message.react(client.config.onayemoji)
})
  member.roles.add(client.config.kayıtsız)  
  let embed = new Discord.MessageEmbed()  
  .setDescription(`${client.config.murphyTag} ${kullanıcı} Adlı Üye ${message.author} Tarafından **Kayıtsıza** Atıldı. Yetkileri Çekilip Bütün Rolleri Alındı.`) 
  .setFooter(`Developed by Murphy`)
  .setTimestamp()
  return message.channel.send(embed)

}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıtsız"],
    permLevel: 0,
    name: "kayıtsız"
  }
  
  exports.help = {
    name: "kayıtsız"
  };