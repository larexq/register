const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
exports.run = async (client, message, args) => {

 const embed = new EmbedBuilder()
 .setTitle("Kayıt - Yardım")
 .setDescription(`**<a:hype:1030583980719865909> |** \`${config.prefix}erkek @Kullanıcı İsim Yaş\` **: Kullanıcıyı Erkek Kayıt Eder.**\n**<a:hype:1030583980719865909> |** \`${config.prefix}kız @Kullanıcı İsim Yaş\` **: Kullanıcıyı Kız Kayıt Eder.**\n**<a:hype:1030583980719865909> |** \`${config.prefix}info / ${config.prefix}info @Kullanıcı\` **: Kullanıcının Kayıt Sayısına Bakar.**\n**<a:hype:1030583980719865909> |** \`${config.prefix}isim @Kullanıcı İsim Yaş\` **: Kullanıcının İsmini Değiştirir.**\n**<a:hype:1030583980719865909> |** \`${config.prefix}say\` **: Sunucunun Bilgilerini Gösterir.**\n**<a:hype:1030583980719865909> |** \`${config.prefix}yardım\` **: Bu Sayfayı Açar.**`)
 .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
 
message.reply({embeds: [embed]})
  
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};
