const db = require("croxydb")
const Discord = require("discord.js")
const ids = require("../ids.js");
exports.run = (client, message, args) => {

let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]

let kız = ids.roles.rolKız
let kayıtsız = ids.roles.rolKayıtsız
let yetkili = ids.roles.rolYetkili
let tag = ids.tag  //Tag Varsa 38 ve 49'a Bak.

const carpi = ids.emojis.carpi
const bsr = ids.emojis.basarili

const yetki = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bu Komutu Kullanabilmek İçin <@&${ids.roles.rolYetkili}> Rolüne Sahip Olman Gerekiyor.** ${carpi}`)
.setColor("BLACK")

if(!message.member.roles.cache.has(yetkili)) return message.reply({embeds: [yetki]})

const userr = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bir Kullanıcı Etiketlemelisin.** ${carpi}`)
.setColor("BLACK")

const name = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bir İsim Girmelisin.** ${carpi}`)
.setColor("BLACK")

const age = new Discord.EmbedBuilder()
.setDescription(`${message.author} **| Bir Yaş Girmelisin.** ${carpi}`)
.setColor("BLACK")

if (!kullanıcı) return message.reply({embeds: [userr]})
if (!isim) return message.reply({embeds: [name]})
if (!yas) return message.reply({embeds: [age]})


message.guild.members.cache.get(kullanıcı.id).roles.add(kız)
message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsız)
kullanıcı.setNickname(`${isim} | ${yas}`)
db.add(`kız_${message.author.id}`, 1)
db.add(`toplam_${message.author.id}`, 1)
db.push(`isim.${message.guild.id}`, {userID: kullanıcı.id, isim: isim,  role: kız, age: yas})

const embed = new Discord.EmbedBuilder()
.setTitle("Kız - Kayıt")
.setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
.setDescription(`${bsr.basarili1} **Kayıt Edilen**\n${kullanıcı}
${bsr.basarili2} **Kayıt Eden**\n${message.author}
${bsr.basarili3} **Verilen Rol**\n<@&${kız}>
${bsr.basarili4} **Alınan Rol**\n<@&${kayıtsız}>
${bsr.basarili5} **Yeni İsmin**\n\`${isim} | ${yas}\``)
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