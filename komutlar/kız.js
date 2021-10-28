const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has((client.config.teyitci)) && !message.member.hasPermission("ADMINISTRATOR")) return;
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!member) return message.reply("Kayıt edilecek kullanıcıyı belirtip tekrar deneyin.")
  if(!args[1]) return message.reply("Kullanıcıya isim belirtmelisin.")
  if(!args[2]) return message.reply("Kullanıcıya yaş belirtmelisin.")
  let isim = args[1].charAt(0).toUpperCase() + args[1].slice(1).toLowerCase()
  let yaş = args[2];
  let isimler = db.get(`isimler_${member.user.id}`);
 {

//if (!member.user.username.includes(client.config.tag) && !member.roles.cache.has(client.config.booster) && !member.roles.cache.has(client.config.vip)) return message.channel.send(`<a:iconPembe:835531125689417759> Sunucumuz şuanda **taglı alımdadır** tagımızı alarak kayıt işlemini gerçekleştirebilirsiniz. \`Râche\` **|** \`#1771\` `)
} 

  member.setNickname(`${member.user.username.includes((client.config.tag)) ? (client.config.tag) : (client.config.tag2)} ${isim} | ${yaş}`)
  db.push(`isimler_${member.id}`, `\`${client.config.tag} ${isim} | ${yaş}\` (<@&${client.config.kız1}>)`);
  if(!isimler) {
          const knave = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(`${client.config.murphyTag} <@"+member+"> üyesi başarıyla kız olarak kayıt edildi.`)
          .setColor("RANDOM")
          await message.guild.members.cache.get(member.id).roles.remove(client.config.kayıtsız)
          await message.guild.members.cache.get(member.id).roles.remove(client.config.kayıtsız1)
          await message.guild.members.cache.get(member.id).roles.add(client.config.kız1)
          await message.guild.members.cache.get(member.id).roles.add(client.config.kız2)
          await message.guild.members.cache.get(member.id).roles.add(client.config.kız3)
          message.channel.send(knave).then(m => m.delete({timeout: 10000}))
          message.react((client.config.onayemoji))
      } else {
        member.setNickname(`${member.user.username.includes((client.config.tag)) ? (client.config.tag) : (client.config.tag2)} ${isim} | ${yaş}`)

          const memeaç = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
          .setDescription(`${client.config.murphyTag} ${member} kişisi başarıyla kız olarak kayıt edildi, bu üye daha önce bu isimlerle kayıt olmuş.\n\n Kişinin toplamda **${isimler.length}** isim kayıtı bulundu.\n${isimler.map((data, i) => `${data}`).join("\n")} \n\nKişinin önceki isimlerine \`.isimler @üye\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`)
          .setColor("RANDOM")
          await message.guild.members.cache.get(member.id).roles.remove(client.config.kayıtsız)
          await message.guild.members.cache.get(member.id).roles.remove(client.config.kayıtsız1)
          await message.guild.members.cache.get(member.id).roles.add(client.config.kız1)
          await message.guild.members.cache.get(member.id).roles.add(client.config.kız2)
          await message.guild.members.cache.get(member.id).roles.add(client.config.kız3)
          message.channel.send(memeaç).then(m => m.delete({timeout: 10000}))
          message.react((client.config.onayemoji))
      } 
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k"],
  permLevel: 0,
  name: "kız"
}

exports.help = {
  name: "kız"
};

