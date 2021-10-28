const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
const ms = require('ms');//
const tags = require('common-tags');
const { config } = require('process');
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    ${files.length} adet ( MÖRPİ ) komut yüklenecek.
‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`[KOMUT] | ${props.help.name} Eklendi.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login("ODQyODU4MzkzNjgwNDc4MjQ4.YJ7bDA.2VUBUzU_gU51FTdjEBEhkrhDkfI");

//------------------------------------------------------------------------------------------------------------\\
 client.config = {
  

  "token" : "DEVELOPED BY MURPHY",

  "sunucuid": "DEVELOPED BY MURPHY",

  "chat":"DEVELOPED BY MURPHY",

  "seskanal": "DEVELOPED BY MURPHY",

  "footer": "Calm Down This Is Murphy",

  "sunucuadı": "DEVELOPED BY MURPHY",


//-----KAYIT-TAG--------//

"murphyWebhookİD" : "DEVELOPED BY MURPHY",
"murphyWebhookToken" : "DEVELOPED BY MURPHY",

"taglog": "DEVELOPED BY MURPHY",
"taglırol": "DEVELOPED BY MURPHY",
"etikettag" : "DEVELOPED BY MURPHY",
"tag" : "DEVELOPED BY MURPHY", 
"kucuktag" : "DEVELOPED BY MURPHY",
"tag2": "DEVELOPED BY MURPHY",

"erkek1": "DEVELOPED BY MURPHY",
"erkek2": "DEVELOPED BY MURPHY",
"erkek3": "DEVELOPED BY MURPHY",

"kız1": "DEVELOPED BY MURPHY",
"kız2": "DEVELOPED BY MURPHY",
"kız3": "DEVELOPED BY MURPHY",

"kayıtsız": "DEVELOPED BY MURPHY",
"kayıtsız1": "DEVELOPED BY MURPHY",

"teyitci": "DEVELOPED BY MURPHY",
//-----KAYIT-TAG--------//


"footer": "Calm Down This Is Murphy",

"toplantikanal": "DEVELOPED BY MURPHY",

"katıldırol": "DEVELOPED BY MURPHY",

"owner":"DEVELOPED BY MURPHY",

"başOwner" : "DEVELOPED BY MURPHY",

"yetkilirol1": "DEVELOPED BY MURPHY",


//-----YETKİLİ---------//

"yetkilialim": "DEVELOPED BY MURPHY",

"yetkili1": "DEVELOPED BY MURPHY",

"yetkili2": "DEVELOPED BY MURPHY",

"yetkiliunutmusuz" : "",

///////////////////////////

"yetkili3": "DEVELOPED BY MURPHY",

"yetkili4" : "DEVELOPED BY MURPHY",

"yetkili5" : "DEVELOPED BY MURPHY",

//////////////////////////

"yetkili6" : "DEVELOPED BY MURPHY",

"yetkili7" : "DEVELOPED BY MURPHY",

"yetkili8" : "DEVELOPED BY MURPHY",

"yetkili9" : "DEVELOPED BY MURPHY",


"yönetici1" : "DEVELOPED BY MURPHY",

"yöneticivermelog" : "DEVELOPED BY MURPHY",

//////////////////////////

//-----YETKİLİ---------//


//-----HAMMER---------//
  "banhammer": "DEVELOPED BY MURPHY",

  "jailhammer": "DEVELOPED BY MURPHY",

  "transport": "DEVELOPED BY MURPHY",

  "mutehammer": "DEVELOPED BY MURPHY",

  "vmutehammer": "DEVELOPED BY MURPHY",

  "commandhammer": "DEVELOPED BY MURPHY",

  "warnhammer" : "DEVELOPED BY MURPHY",
//-----HAMMER---------//

//-----LOG'S---------//
  "banlog": "DEVELOPED BY MURPHY",

  "jaillog": "DEVELOPED BY MURPHY",

  "mutelog": "DEVELOPED BY MURPHY",

  "vmutelog": "DEVELOPED BY MURPHY",

  "uyarılog": "DEVELOPED BY MURPHY",

  "rollog": "DEVELOPED BY MURPHY", 

  "yetkilog": "DEVELOPED BY MURPHY",

  "boosterisimlog" : "DEVELOPED BY MURPHY",

  "inviteLog" : "DEVELOPED BY MURPHY",


  //-----LOG'S---------//
 


  //-----EMOJİ'S---------//
  "onayemoji": "<a:murphyYes:842862652459581462>",
  "redemoji": "<a:murphyRed:842862640371728385>",
  
  "murphyHG" : "",
  "murphyTag" :"<a:murphyTag:842862660575297536>",
  "murphyTag2" :"<a:murphyTag1:842862673858396191>",

  "susturuldu" : "<:mSusturuldu:842862876304998410>", 
  "susturulduKalkti" : "<:mSusturulmaKaldirildi:842862876284420146>",
  "Cezalandrld" : "<:Cezalandrld:842862876296871976>",

  "sayı0": "0",
  "sayı1": "1",
  "sayı2": "2",
  "sayı3": "3",
  "sayı4": "4",
  "sayı5": "5",
  "sayı6": "6",
  "sayı7": "7",
  "sayı8": "8",
  "sayı9": "9",

  //-----EMOJİ'S---------//


   //-----CEZA ROLLERİ---------//
  "jailrol": "DEVELOPED BY MURPHY",

 "şüphelihesap": "DEVELOPED BY MURPHY",

  "muterol": "DEVELOPED BY MURPHY",
  
  "yasaklıTag" : "DEVELOPED BY MURPHY",
 
    //-----CEZA ROLLERİ---------//


      ////////EK /ROLLER////////

  "vip": "DEVELOPED BY MURPHY",

  "booster": "",

  "ekip": "DEVELOPED BY MURPHY",

  "uyarı": "DEVELOPED BY MURPHY",

  ////////EK /ROLLER////////


//--------ABİLİTY--------//

"abilityHammer" : "",

"invitesorumlusu" : "DEVELOPED BY MURPHY",
"publicsorumlusu" : "DEVELOPED BY MURPHY",
"soruncozucu" : "DEVELOPED BY MURPHY",
"terapist" : "DEVELOPED BY MURPHY",
"ressam" : "DEVELOPED BY MURPHY",
"muzisyen" : "DEVELOPED BY MURPHY",
"yazılımcı" : "DEVELOPED BY MURPHY",
"teyitsorumlusu" : "DEVELOPED BY MURPHY",
"streamer" : "DEVELOPED BY MURPHY",
"chatsorumlusu" : "DEVELOPED BY MURPHY",

//--------ABİLİTY--------//

 }
///////////////////////////////////////////////////////

client.on('messageDelete', message => {
    const data = require("quick.db")
    data.set(`snipe.mesaj.${message.guild.id}`, message.content)
    data.set(`snipe.id.${message.guild.id}`, message.author.id)

  })

// Main Dosyası 

client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
  const taginlo = (client.config.tag)
  const inlosunucu = (client.config.sunucuid)
  const inlokanal = (client.config.taglog)
  const rolinlo = (client.config.taglırol)

  try {

  if (newUser.username.includes(taginlo) && !client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.cache.has(rolinlo)) {
  await client.channels.cache.get(inlokanal).send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${newUser} ${taginlo} Tagımızı Aldığı İçin <@&${rolinlo}> Rolünü Verdim`));
  await client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.add(rolinlo);
  }
  if (!newUser.username.includes(taginlo) && client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.cache.has(rolinlo)) {
  await client.channels.cache.get(inlokanal).send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`${newUser} ${taginlo} Tagımızı Çıkardığı İçin <@&${rolinlo}> Rolünüz Alındı`));
  await client.guilds.cache.get(inlosunucu).members.cache.get(newUser.id).roles.remove(rolinlo);
  }
} catch (e) {
console.log(`Bir hata oluştu! ${e}`)
 }
}
});
    //------------------------------------------------------------------------------------------------------------\\


client.on("message" , async msg => {
  
    if(!msg.guild) return;
    if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
    
    let afk = msg.mentions.users.first()
    
    const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
    
    const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
   if(afk){
     const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
     const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
     if(msg.content.includes(kisi3)){
  
         msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
     }
   }
    if(msg.author.id === kisi){
  
         msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`)).then(x => x.delete({timeout: 5000}));
     db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
      msg.member.setNickname(isim)
      
    }
    
  });
  ///////////////////////////////////////////////////////
client.on("guildMemberAdd", member => {
    var moment = require("moment");
    require("moment-duration-format");
    moment.locale("tr");
    var { Permissions } = require("discord.js");
    var x = moment(member.user.createdAt)
      .add(7, "days")
      .fromNow();
    var user = member.user;
    x = x.replace("birkaç saniye önce", " ");
    if (!x.includes("önce") || x.includes("sonra") || x == " ") {
      const kayıtsız = client.config.kayıtsız;
      const kayıtsız1 = client.config.kayıtsız1;
      var rol = client.config.şüphelihesap;
      var jail = client.config.jailrol;
      var kayıtsız3 = client.config.kayıtsız
      member.roles.add(rol);
      member.roles.remove(client.config.kayıtsız);
      member.roles.remove(client.config.kayıtsız1);

      member.user.send(
        "Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır."
      );
      setTimeout(() => {}, 1000);
    } else {
    }
  });
  //--------------------------------------------------------------------------------------\\


  client.on("message", message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send((client.config.tag))
  });
  

client.on("message", message => {
  if(message.content.toLowerCase() == ".tag") 
  return message.channel.send((client.config.tag))
});


client.on("message", message => {
  if(message.content.toLowerCase() == "-tag") 
  return message.channel.send((client.config.tag))
});


client.on("message", message => {
  if(message.content.toLowerCase() == "!tag") 
  return message.channel.send((client.config.tag))
});



const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberAdd", member => {
    
    if (member.user.bot) return;

    member.guild.fetchInvites().then(async guildInvites => {
      const ei = invites[member.guild.id];
  
      invites[member.guild.id] = guildInvites;
  
      const invite = await guildInvites.find(
        i => (ei.get(i.code) == null ? i.uses - 1 : ei.get(i.code).uses) < i.uses
      );
  
      const daveteden = member.guild.members.cache.get(invite.inviter.id);
  
      db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
  
      db.set(`bunudavet_${member.id}`, invite.inviter.id);
  
      let davetsayiv2 = await db.fetch(
        `davet_${invite.inviter.id}_${member.guild.id}`
      );
  
      let davetsayi;
  
      if (!davetsayiv2) davetsayi = 0;
      else
        davetsayi = await db.fetch(
          `davet_${invite.inviter.id}_${member.guild.id}`
        );
    let date = moment(member.user.createdAt)
       const startedAt = Date.parse(date);
       var msecs = Math.abs(new Date() - startedAt);
         
       const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
       msecs -= years * 1000 * 60 * 60 * 24 * 365;
       const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
       msecs -= months * 1000 * 60 * 60 * 24 * 30;
       const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
       msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
       const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
       msecs -= days * 1000 * 60 * 60 * 24;
       const hours = Math.floor(msecs / (1000 * 60 * 60));
       msecs -= hours * 1000 * 60 * 60;
       const mins = Math.floor((msecs / (1000 * 60)));
       msecs -= mins * 1000 * 60;
       const secs = Math.floor(msecs / 1000);
       msecs -= secs * 1000;
         
       var string = "";
       if (years > 0) string += `${years} yıl ${months} ay`
       else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
       else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
       else if (days > 0) string += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
       else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
       else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
       else if (secs > 0) string += `${secs} saniye`
           
         
       string = string.trim();
   
       let guild = member.client.guilds.cache.get(client.config.sunucuid)
       let endAt = member.user.createdAt
       let gün = moment(new Date(endAt).toISOString()).format('DD')
       let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
       let yıl = moment(new Date(endAt).toISOString()).format('YYYY')
       let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
       let kuruluş = `${gün} ${ay} ${yıl} ${saat}`;

       const Webhook = new Discord.WebhookClient((client.config.murphyWebhookİD) (client.config.murphyWebhookİD));

       Webhook.send(`

:tada: Cast'e Hoş geldin ${member} - ( \`${member.id}\` )

Hesapın \`${kuruluş} (${string})\` önce oluşturulmuş!

Sunucu kurallarımız <#rules> kanalında belirtilmiştir. Unutma sunucu içerisindeki \`ceza-i işlemlerin\` kuralları okuduğunu varsayarak yapılacak!

Seninle beraber ailemiz toplam ${member.guild.memberCount} üye oldu! Kayıt olmak için sol taraftaki **V.confirmed** odalarına girip ses teyit vererek kayıt olabilirsin.  ${daveteden} Adlı üye seninle beraber toplam **${davetsayi}** davetini gerçekleştirdi. İyi eğlenceler :tada::tada:
`)
})});

//${daveteden} Adlı üye \`${davetsayi}.\` davetini gerçekleştirerek sunucumuzun ${member.guild.memberCount} üyesi olmanı sağladı


      

////----------------------- iltifat-----------------------\\\\

const iltifatlar = [
  'Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.',
  'Mavi gözlerin, gökyüzü oldu dünyamın.',
  'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
  'Huzur kokuyor geçtiğin her yer.',
  'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
  'Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.',
  'Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.',
   'Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.',
   'Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.',
   'Etkili gülüş kavramını ben senden öğrendim.',
   'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.',
   'Gözlerinle baharı getirdin garip gönlüme.',
   'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
   'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.',
   'Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.',
   'Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.',
   'Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.',
   'Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.',
   'Aynı zaman diliminde yaşamak benim için büyük ödüldür.',
  'Biraz Çevrendeki İnsanları Takarmısın ?',
  'İğrenç İnsansın!',
   'Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.',
   'Onu Bunu Boşver de bize gel 2 bira içelim.',
    'Taş gibi kızsın ama okey taşı… Elden elde gidiyorsun farkında değilsin.',
    'Ben seni çok sevdim...',
    'Mucizelerden bahsediyordum.',
  "Yaşanılacak en güzel mevsim sensin.",
  "Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.",
  "Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.",
  "Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.",
  "Denize kıyısı olan şehrin huzuru birikmiş yüzüne.",
  "Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.",
  "Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.",
  "Ne tatlısın sen öyle. Akşam gel de iki bira içelim.",
  "Bir gamzen var sanki cennette bir çukur.",
  "Gecemi aydınlatan yıldızımsın.",
  "Ponçik burnundan ısırırım seni",
  "Bu dünyanın 8. harikası olma ihtimalin?",
  "fıstık naber?",
  "Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?",
  "Süt içiyorum yarım yağlı, mutluluğum sana bağlı.",
  "Müsaitsen aklım bu gece sende kalacak.",
  "Gemim olsa ne yazar liman sen olmadıktan sonra...",
  "Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.",
  "Sabahları görmek istediğim ilk şey sensin.",
  "Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.",
  "Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.",
  "Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.",
  "Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.",
  "Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.",
  "Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.",
  "Çocukluk yapsan da gönlüme senin için salıncak mı kursam?",
  "Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.",
  "Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...",
  "Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.",
  "Telaşımı hoş gör, ıslandığım ilk yağmursun.",
  "Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi...",
  "MURPHY ENİİ BOTCU VALLAH BİLLAH",
  "GÜNEŞ IŞIGIMSIN........................................................."
];
// İLTİFATLARI BU ŞEKİLDE İSTEDİĞİNİZ KADAR ÇOĞALTABİLİRSİNİZ
client.on("message", async message => {
  if(message.channel.id !== (client.config.chat)) return;
  let MURPHY = db.get('chatiltifat');
  await db.add("chatiltifat", 1);
  if(MURPHY >= 40) { // 50 yazan yer, 50 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    db.delete("chatiltifat");
    const random = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`${(iltifatlar)[random]}`);
  };
});




///////////////////member remove 
client.on('guildMemberRemove' , member => {
  if(member.roles.cache.has((client.config.kayıtsız))) return;
if(member.roles.cache.has((client.config.kayıtsız1))) return;
  db.get(`isimler_${member.user.id}`);
  db.push(`isimler_${member.id}`, `\` ${member.displayName} \` (sunucudan ayrılma)`);
})



    //----------------------TAG-KONTROL----------------------\\     STG    

client.on("guildMemberAdd", member => {
  let sunucuid = (client.config.sunucuid); 
  let tag = (client.config.tag); 
  let rol = (client.config.taglırol); 
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> Adlı kişi sunucumuza taglı katıldı o doğüştan bizden!`)
      .setTimestamp()
     client.channels.cache.get((client.config.taglog)).send(tagalma)
}
})

client.on("guildMemberAdd", member => {
  member.roles.add((client.config.kayıtsız));
member.roles.add((client.config.kayıtsız1));

});

client.on("guildMemberAdd", member => {
  member.roles.add((client.config.kayıtsız));
member.roles.add((client.config.kayıtsız1));

});


////////////////////////////////////////////////
  client.on("guildMemberRemove", async member => {
    db.set(`isim.${member.id}`, member.displayName)
        });
        client.on("guildMemberAdd", async member => {
     let erdemnick = db.get(`isim.${member.id}`)
    await member.setNickname(erdemnick)
    member.setNickname(`${client.config.tag2} İsim | Yaş`)
    });


/////// YASAKLI TAG ///////

/////////////////////////////////////////////////////////////////

client.on("userUpdate", async function(eskiii, yeniii) {
  const guildID = (client.config.sunucuid)
  const roleID = (client.config.taglırol)
  const tag = (client.config.kucuktag)
  const log2 = (client.config.taglog)
  const etikettag = (client.config.etikettag)

  const guildd22 = client.guilds.cache.get(guildID)
  const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)
  const member = guildd22.members.cache.get(yeniii.id)
  const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('BLACK').setTimestamp().setFooter('');
  if (yeniii.username !== eskiii.username) {
      if (eskiii.username.includes(tag) && !yeniii.username.includes(tag)) {
          member.roles.remove(roleID)
          member.roles.set([client.config.kayıtsız])
          client.channels.cache.get(log2).send(embed.setDescription(` ${yeniii} isminden \` ${kucuktag} \` çıkartarak ailemizden ayrıldı!`))
      } else if (!eskiii.username.includes(tag) && yeniii.username.includes(tag)) {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`  ${yeniii} ismine \`${kucuktag}\` alarak ailemize katıldı`))
      }
  }

 if (yeniii.discriminator !== eskiii.discriminator) {
      if (eskiii.discriminator == (client.config.etikettag) && yeniii.discriminator !== (client.config.etikettag)) {
          member.roles.remove(roleID)
          member.roles.set([client.config.kayıtsız])
          client.channels.cache.get(log2).send(embed.setDescription(`${yeniii} etiketinden \` ${etikettag} \` çıakrtarak ailemizden ayrıldı!`))
      } else if (eskiii.discriminator !== (client.config.etikettag) && yeniii.discriminator == (client.config.etikettag)) {
          member.roles.add(roleID)
          client.channels.cache.get(log2).send(embed.setDescription(`${yeniii} etiketine \`${etikettag}\` alarak ailemize katıldı`))
      }
  }

})

/////////////////////////////////////////////////////////////////
