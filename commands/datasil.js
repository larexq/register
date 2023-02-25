const { EmbedBuilder, PermissionsBitField, ActionRowBuilder, ButtonBuilder } = require("discord.js")
const Discord = require("discord.js");
const db = require('croxydb');

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({ content: `Bu komutu kullanamazsın.` })

    const hangi = new EmbedBuilder()
    .setDescription(`Hangi Dataları Silmem Gerekiyor?`)
    .setFooter({ text: `Silmek istediğin datanın emojisine tıkla.` })

    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel(`Kayıt Dataları`)
    .setStyle(Discord.ButtonStyle.Secondary)
    .setCustomId(`kayitdata`),
    new ButtonBuilder()
    .setLabel(`İsim Dataları`)
    .setStyle(Discord.ButtonStyle.Secondary)
    .setCustomId(`isimdata`)
    )

    message.channel.send({ embeds: [hangi], components: [row]})

let data = db.get(`isim.${message.guild.id}`)

}
exports.conf = {
  aliases: []
};

exports.help = {
  name: "datasil"
};