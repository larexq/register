const db = require("croxydb")
const Discord = require("discord.js")
const ids = require("../ids.js");
exports.run = (client, message, args) => {
let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]

let kız = ids.rolKız
let kayıtsız = ids.rolKayıtsız
let yetkili = ids.rolYetkili
let tag = ids.tag  //Tag Varsa 38 ve 49'a Bak.

const yetki = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bu Komutu Kullanabilmek İçin <@&${ids.rolYetkili}> Rolüne Sahip Olman Gerekiyor.** <a:crosss:1030583088130035812>`)
.setColor("BLACK")

if(!message.member.roles.cache.has(yetkili)) return message.reply({embeds: [yetki]})

const userr = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bir Kullanıcı Etiketlemelisin.** <a:crosss:1030583088130035812>`)
.setColor("BLACK")

const name = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bir İsim Girmelisin.** <a:crosss:1030583088130035812>`)
.setColor("BLACK")

const age = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bir Yaş Girmelisin.** <a:crosss:1030583088130035812>`)
.setColor("BLACK")

if (!kullanıcı) return message.reply({embeds: [userr]})
if (!isim) return message.reply({embeds: [name]})
if (!yas) return message.reply({embeds: [age]})

message.guild.members.cache.get(kullanıcı.id).roles.add(kız)
message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsız)
kullanıcı.setNickname(`${isim} | ${yas}`)
db.add(`kız_${message.author.id}`, 1)
db.add(`toplam_${message.author.id}`, 1)


const embed = new Discord.EmbedBuilder()
.setTitle("Kız - Kayıt")
.setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
.setDescription(`<a:music:1030587616774598726> **Kayıt Edilen**\n${kullanıcı}
<a:staff:1030578443785605130> **Kayıt Eden**\n${message.author}
<a:yess:1030586457418649620> **Verilen Rol**\n<@&${kız}>
<a:noo:1030586469686988811> **Alınan Rol**\n<@&${kayıtsız}>
<a:wow:1030587075113791498> **Yeni İsmin**\n\`${isim} | ${yas}\``)
.setColor("BLACK")
return message.channel.send({embeds: [embed]})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k","woman"],
  permLevel: 0
}

exports.help = {
  name: 'kız'
};