const {EmbedBuilder} = require("discord.js");
const Discord = require("discord.js")
const config = require("../config.js")
const ids = require("../ids.js")
const emoji = ids.emojis.yardimemoji

exports.run = async (client, message, args) => {

 const embed = new EmbedBuilder()
 .setTitle("Kayıt - Yardım")
 .setDescription(`**${emoji} |** \`${config.prefix}erkek @Kullanıcı İsim Yaş\` **: Kullanıcıyı Erkek Kayıt Eder.**\n**${emoji} |** \`${config.prefix}kız @Kullanıcı İsim Yaş\` **: Kullanıcıyı Kız Kayıt Eder.**\n**${emoji} |** \`${config.prefix}info / ${config.prefix}info @Kullanıcı\` **: Kullanıcının Kayıt Sayısına Bakar.**\n**${emoji} |** \`${config.prefix}isim @Kullanıcı İsim Yaş\` **: Kullanıcının İsmini Değiştirir.**\n**${emoji} |** \`${config.prefix}say\` **: Sunucunun Bilgilerini Gösterir.**\n**${emoji} |** \`${config.prefix}yardım\` **: Bu Sayfayı Açar.**`)
 .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
 
message.reply({embeds: [embed]})
  
}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};
