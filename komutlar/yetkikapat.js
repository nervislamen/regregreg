client.on("guildMemberAdd", member => {
    require("moment-duration-format")
  const kanal = "828319557449416725";
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  
     
  
    if (member.user.bot) return;
  member.guild.fetchInvites().then(async guildInvites => {
  const ei = invites[member.guild.id];
  invites[member.guild.id] = guildInvites;
  const veri = await guildInvites.find(i => (ei.get(i.code) == null ? (i.uses - 1) : ei.get(i.code).uses) < i.uses);
  var daveteden;
  if(!veri) daveteden = "Bulunamadı"
  else daveteden = member.guild.members.cache.get(veri)
  var b = veri.guild.vanityURLCode
  if(!b) b = veri.code
  if(veri.code == b) daveteden = member.guild.members.cache.get(veri.inviter.id)
    else daveteden = member.guild;
  db.add(`davetsayi.${daveteden.id}.${member.guild.id}`, +1);
  db.add(`toplam.${daveteden.id}.${member.guild.id}`, +1);
  db.push(`günlük.${daveteden.id}.${member.guild.id}`, {userID: member.user.id})
  let zaman = require("moment").duration(new Date().getTime() - client.users.cache.get(member.id).createdAt.getTime())
  if(zaman < 604800017) { db.add(`davetsayi.${daveteden.id}.${member.guild.id}`, -1);
  db.add(`fake.${daveteden.id}_${member.guild.id}`, +1); }
  db.set(`veri.${member.id}.${member.guild.id}`, daveteden.id);
    
  let a = await db.fetch(`davetsayi.${daveteden.id}.${member.guild.id}`);
   
  let davetsayi;
  if(!a) { davetsayi = 0; } 
  else { davetsayi = await db.fetch(`davetsayi.${daveteden.id}.${member.guild.id}`); }
  var y;
  if(daveteden.id == member.guild.id) y = "Özel URL"
    else y = daveteden.user.tag
  let toplamüye = member.guild.memberCount
  
  
  
  
         var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
  '1': `1`,
  '2': `2`,
  '3': `3`,
  '4': `4`,                       
  '5': `5`,
  '6': `6`,
  '7': `7`,
  '8': `8`,
  '9': `9`}[d];
          })
        }
  
  
  let rol = "828319540008976384"
  member.roles.add((rol))  
  
  var kontrol;
  if (kurulus < 1036800000)
    kontrol = "Güvenilir Değil <a:durtehlikeli:823290723775807528>";
  if (kurulus > 1036800000)
    kontrol = "Güvenilir <a:basarilisj:829718394244300820>";
  moment.locale("tr");
  const hgmesajlar = ["partiye katıldı.", "eğlenmek için bizimle birlikte geliyor.", "aramıza katıldı.", "klanımıza hoşgeldin.","sunucumuza hoşgeldin.","hoşgeldin."]
  
  const random = Math.floor(Math.random() * ((hgmesajlar).length));
  
  
  const Webhook = new Discord.WebhookClient("839881995060117544", "8tQGE9pIj6MVRE4IMuPSzAGka5tZYezlTa-wqKUF5HXkewCvXb0Sn2QvMUpSWpM4mP1t")
  
  Webhook.send(" `>` **<@"+ member.id +">** (`" + member.id + "`) "+ hgmesajlar[random] +" Sunucuya **<@"+ daveteden +">** (`"+ davetsayi +" davet`) sayesinde giriş yaptın. \n\n `>` Hesabın `" + gecen + "` önce kurulmuş.\n\n `>` Bu kullanıcı kayıt olmak için **" + kontrol + "** \n\n `>` **<@&register rol id>** rolüne sahip olan yetkililer birazdan seninle ilgilenecektir. Seninle beraber **" + üyesayısı + "** kişiye ulaştık . \n\n `>` **b!tag** yazıp, tagımızı adına takarak, bize destek olabilirsin.\n\n `>` Kurallarımızı okumak için **<#kurallar kanal id>** kanalına göz atmayı unutma derim. **Sunucuya katıldığın an tüm kuralları kabul etmiş, okumuş oluyorsun.**")
  });
  });
  