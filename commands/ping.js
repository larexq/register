const { EmbedBuilder, PermissionsBitField  } = require("discord.js");

exports.run = async (client, message, args) => {

   const embed = new EmbedBuilder()
   .setColor("BLACK")
   .setDescription(`${client.ws.ping} ms`) 
   .setFooter({ text: `İsteyen: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
   .setTimestamp()  

   return message.reply({ embeds: [embed] })

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
};
