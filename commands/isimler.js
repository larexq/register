const { EmbedBuilder, PermissionsBitField } = require("discord.js")
const db = require('croxydb');
const ids = require("../ids.js");

exports.run = async (client, message, args) => {

  let yetkili = ids.roles.rolYetkili
const carpi = ids.emojis.carpi

  const yetki = new EmbedBuilder()
  .setDescription(`${message.author} **| Bu Komutu Kullanabilmek İçin <@&${ids.roles.rolYetkili}> Rolüne Sahip Olman Gerekiyor.** ${carpi}`)
  .setColor("BLACK")
  
  if(!message.member.roles.cache.has(yetkili)) return message.reply({embeds: [yetki]})

let isim = message.mentions.members.first()
if(!isim) {
    isim = message.author
}

var sayi = 1 
let data = db.get(`isim.${message.guild.id}`)
let rol = db.fetch(`rol.${message.guild.id}`)

const notdata = new EmbedBuilder()
    .setColor("ff0000") 
    .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true})}`)
    .setDescription(`
    ${isim} Adlı Kullanıcı Daha Önce Kayıt Olmamış.`)

if(!data) return message.channel.send({ embeds: [notdata] })
let isimler = data.filter(x => x.userID === isim.id).map(x => `${sayi++} - \`• ${x.isim} | ${x.age}\`  (<@&${x.role}>)`).join("\n") || `Bu Kullanıcı Kayıt Olmamış.`


const embed = new EmbedBuilder()

    .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true})}`)
    .setTitle(`Bu Kullanıcı ${sayi-1} Kere Kayıt Olmuş`) 
    .setDescription(`
    ${isimler}`)
message.channel.send({ embeds: [embed] })
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "isimler"
};