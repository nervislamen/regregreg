const Discord = require("discord.js");
const index = require("../index.js");


module.exports.run = async (client, message, args) => {

if(![(client.config.Owner)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));


let murphyASD = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

if(args[0] == "ver") {
    murphyASD.forEach(r => {
r.roles.add(client.config.kayıtsız)
r.roles.add(client.config.kayıtsız1)
}) 
const murphySEX = new Discord.MessageEmbed()
.setAuthor(" "+message.author.username +" ", message.author.avatarURL())
.setColor("RANDOM")
.setDescription("Sunucuda rolü olmayan \`"+ murphyASD.size +"\` kişiye kayıtsız rolü verildi!")
message.channel.send(murphySEX).then(m => message.react((client.config.onayemoji)))
} else if(!args[0]) {
const murphyS = new Discord.MessageEmbed()
.setAuthor(""+message.author.username +" ", message.author.avatarURL())
.setColor("RANDOM")
.setDescription("Ailemizde rolü olmayan \`${murphyASD.size}\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!")
message.channel.send(murphyS)
}


}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["rolsuz"],
permLevel: 0
};

exports.help = {
name: "rolsüz",
description: "[Admin Komutu]",
usage: "rolsüz ver"
};