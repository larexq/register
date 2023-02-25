const Discord = require("discord.js")
const db = require("croxydb")
const ids = require("../ids.js")
const emoji = ids.emojis.infoemoji
const carpi = ids.emojis.carpi
const yetkili = ids.roles.rolYetkili

exports.run = async(client, message) => {
  
  const yetki = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bu Komutu Kullanabilmek İçin <@&${ids.roles.rolYetkili}> Rolüne Sahip Olman Gerekiyor.** ${carpi}`)
.setColor("BLACK")

  if(!message.member.roles.cache.has(yetkili)) return message.reply({ embeds: [yetki] })
  let kullanıcı = message.mentions.members.first()

  if(!kullanıcı) {
    let erkekPuan = db.fetch(`erkek_${message.author.id}`);
    let kızPuan = db.fetch(`kız_${message.author.id}`);
    let toplamPuan = db.fetch(`toplam_${message.author.id}`);
    if(toplamPuan === null) toplamPuan = "0"  
     if(erkekPuan === null) erkekPuan = "0" 
     if(toplamPuan === undefined) toplamPuan = "0"  
     if(erkekPuan === undefined) erkekPuan = "0" 
     if(kızPuan === null) kızPuan = "0"
     if(kızPuan === undefined) kızPuan = "0"

     const kayıtlar1 = new Discord.EmbedBuilder()
     .setTitle("Kayıt Sayısı")
     .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
     .setDescription(`**${emoji} | Toplam Kayıtların:** \`${toplamPuan}\`
     **${emoji} | Toplam Erkek Kayıtların:** \`${erkekPuan}\`
     **${emoji} | Toplam Kız Kayıtların:** \`${kızPuan}\``)
     .setFooter({ text: `Sorgulayan: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
     .setColor("BLACK")
     message.reply({embeds: [kayıtlar1]})
  };
  

  if(kullanıcı) {
    let erkekPuan1 = db.fetch(`erkek_${kullanıcı.id}`);
    let kızPuan1 = db.fetch(`kız_${kullanıcı.id}`);
    let toplamPuan1 = db.fetch(`toplam_${kullanıcı.id}`);
    if(toplamPuan1 === null) toplamPuan1 = "0"  
     if(erkekPuan1 === null) erkekPuan1 = "0" 
     if(toplamPuan1 === undefined) toplamPuan1 = "0"  
     if(erkekPuan1 === undefined) erkekPuan1 = "0" 
     if(kızPuan1 === null) kızPuan1 = "0"
     if(kızPuan1 === undefined) kızPuan1 = "0"

     const kayıtlar1 = new Discord.EmbedBuilder()
     .setTitle("Kayıt Sayısı")
     .setThumbnail(`${kullanıcı.displayAvatarURL({ dynamic: true })}`)
     .setDescription(`**${emoji} | Toplam Kayıtların:** \`${toplamPuan1}\`
     **${emoji} | Toplam Erkek Kayıtların:** \`${erkekPuan1}\`
     **${emoji} | Toplam Kız Kayıtların:** \`${kızPuan1}\``)
     .setFooter({ text: `Sorgulayan: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
     .setColor("BLACK")
     message.reply({embeds: [kayıtlar1]})
  }}
  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  perm: 0
}
exports.help = {
  name: 'info'
}