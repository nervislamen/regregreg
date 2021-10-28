const { MessageEmbed } = require("discord.js");
const ayar = require("../config.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
    let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
  .setFooter(`This is Murphy`)

    if (!message.member.roles.cache.has(client.config.teyitci) && !message.member.hasPermission(8)) return;
    let data = await db.get("teyit") || {};

    let xd = Object.keys(data);
    let topteyit = xd.filter(dat => message.guild.members.cache.has(dat)).sort((a, b) => Number((data[b].erkek || 0) + (data[b].karı || 0)) - Number((data[a].erkek || 0) + (data[a].karı || 0))).map((value, index) => `\`${index + 1}.\` ${message.guild.members.cache.get(value)} Toplam **${((data[value].erkek || 0) + (data[value].karı || 0))}** (**${((data[value].erkek || 0))}** Erkek **${((data[value].karı || 0))}** Kadın)`).splice(0, 25);

    message.channel.send(embed.setDescription(`${topteyit.join("\n") || "Teyit veritabanı bulunamadı!"}`)).catch().then(m => m.delete({ timeout: 15000 }))
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["topteyit"],
    name: 'topteyit',
    permLevel: 0
};
erkek