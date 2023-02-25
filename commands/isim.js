const db = require("croxydb")
const Discord = require("discord.js")
const ids = require("../ids.js");
exports.run = (client, message, args) => {

let kullanıcı = message.mentions.members.first()
let isim = args[1]
let yas = args[2]

let yetkili = ids.roles.rolYetkili
const carpi = ids.emojis.carpi
const bsr = ids.emojis.basarili
let tag = ids.tag  //Tag Varsa 34 ve 41'e Bak.

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

if(tag) {
kullanıcı.setNickname(`${tag} ${isim} | ${yas}`)
}
else if(!tag) {
kullanıcı.setNickname(`${isim} | ${yas}`)
}

const embed = new Discord.EmbedBuilder()
.setTitle("İsim Değiştirme")
.setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
.setDescription(`${bsr.basarili1} **İsmi Değiştirilen**\n${kullanıcı}
${bsr.basarili2} **İsmi Değiştiren**\n${message.author}
${bsr.basarili3} **Yeni İsmin**\n\`${isim} | ${yas}\``)
.setColor("BLACK")
return message.channel.send({embeds: [embed]})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["name"],
  permLevel: 0
}

exports.help = {
  name: 'isim'
};