const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`Adet [MURPHY] Komutlar Yüklendi.`);
  console.log(`(${client.user.username}) Adındaki Bot Hazır`);
  client.user.setStatus("idle");
  client.user.setPresence({ activity: { name: "Calm Down This Is Murphy" }, status: "online" });
  client.channels.cache.get((client.config.seskanal)).join() // ses kanalı İD
    console.log(`Aktif`);

};
 