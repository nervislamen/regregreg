const Discord = require("discord.js");
exports.execute = async (client, message, args) => {
let embed = new Discord.MessageEmbed().setColor("#313136").setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
if(!message.member.roles.cache.has(client.config.vmutehammer) && !message.member.hasPermission("ADMINISTRATOR")) message.reply("Yeterli Yetkiye Sahip Değilsin")
let kanal = message.guild.channels.cache.get(args[0])
if(!kanal) message.channel.send(embed.setDescription(`Lütfen Bir KanalID Giriniz.`))
kanal.members.filter(a => !a.hasPermission("ADMINISTRATOR")).array().forEach(üyeler => {
  üyeler.voice.setMute(true)
});

message.channel.send(embed.setDescription(`
\`${kanal.name}\` **AllMute İşlemi**

${client.config.murphyTag2} **KanalID:** \`${kanal.id}\`
${client.config.murphyTag2} **KanalName:** \`${kanal.name}\`
${client.config.murphyTag2} **Kanal Uye Sayısı:** \`${kanal.members.size}\`
${client.config.murphyTag2} **Mutelenen:** \`${kanal.members.filter(a => !a.hasPermission("ADMINISTRATOR")).size}\`
${client.config.murphyTag2} **Mutelenmeyen:** \`${kanal.members.filter(a => a.hasPermission("ADMINISTRATOR")).size}\``))

}
exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ["allmute"],
  permLevel: 0,
  name: "allmute"
}

exports.help = {
  name: "allmute"
};