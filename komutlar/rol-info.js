const Discord = require("discord.js"),
  client = new Discord.Client();
const db = require("quick.db");
const moment = require("moment");
const conf = require("../index.js");

module.exports.run = async (client, message, args) => {



let murphyRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if(![(client.config.owner)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 

let knaveArray = new Array();
let knaveÜyeler = murphyRole.members.forEach(knave => {knaveArray.push(`<@!${knave.id}> ( \`${knave.id}\` )`);})
if (!args[1]) {
message.channel.send((`
- ${murphyRole} rol bilgileri;
- Rol Rengi: \`${murphyRole.hexColor}\`
- Rol ID: \`${murphyRole.id}\` 
- Rol Kişi Sayısı: \`${murphyRole.members.size}\`
─────────────────
- Roldeki kişiler:
${murphyRole.members.size <= 100 ? knaveArray.join("\n") : `Listelenemedi! ( **${murphyRole.members.size}** kişi var! )`}
`))
return;
}
if (args[1] === "sayı") {
message.channel.send((`
${murphyRole} (- \`${murphyRole.id}\` ) adlı rolde toplam **${murphyRole.members.size}** kişi bulunmaktadır!
`))
return;
} else if (args[1] === "id") {
message.channel.send((`
${murphyRole} ( \`${murphyRole.name}\` ) adlı rolün ID'si: \`${murphyRole.id}\`
`))
return;
} else if (args[1] === "renk") {
message.channel.send((`
${murphyRole} ( \`${murphyRole.id}\` ) adlı rolün renk kodu: \`${murphyRole.hexColor}\`
`))
return;
} else if (args[1] === "üyeler") {
message.channel.send((`
${murphyRole} ( \`${murphyRole.id}\` ) adlı rolündeki kişiler:

─────────────────

${murphyRole.members.size <= 100 ? knaveArray.join("\n") : `Listelenemedi! ( **${murphyRole.members.size}** kişi var! )`}
`))
return;
}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["rol"],
    permLevel: 0,
    name: "rol"
  }
  
  exports.help = {
    name: "rol"
  };
  
  