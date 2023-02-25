const { Client, GatewayIntentBits, Partials, DiscordAPIError } = require("discord.js");
const config = require("./config.js");
const db = require("croxydb")
const ids = require("./ids.js");
const Discord = require("discord.js")

const client = new Client({
  partials: [
    Partials.Message, // for message
    Partials.Channel, // for text channel
    Partials.GuildMember, // for guild member
    Partials.Reaction, // for message reaction
    Partials.GuildScheduledEvent, // for guild events
    Partials.User, // for discord user
    Partials.ThreadMember, // for thread member
  ],
  intents: [
    GatewayIntentBits.Guilds, // for guild related things
    GatewayIntentBits.GuildMembers, // for guild members related things
    GatewayIntentBits.GuildBans, // for manage guild bans
    GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
    GatewayIntentBits.GuildIntegrations, // for discord Integrations
    GatewayIntentBits.GuildWebhooks, // for discord webhooks
    GatewayIntentBits.GuildInvites, // for guild invite managing
    GatewayIntentBits.GuildVoiceStates, // for voice related things
    GatewayIntentBits.GuildPresences, // for user presence things
    GatewayIntentBits.GuildMessages, // for guild messages things
    GatewayIntentBits.GuildMessageReactions, // for message reactions things
    GatewayIntentBits.GuildMessageTyping, // for message typing things
    GatewayIntentBits.DirectMessages, // for dm messages
    GatewayIntentBits.DirectMessageReactions, // for dm message reaction
    GatewayIntentBits.DirectMessageTyping, // for dm message typinh
    GatewayIntentBits.MessageContent, // enable if you need message content things
  ],
});

module.exports = client;

require("./events/message.js")
require("./events/ready.js")
client.on("guildMemberAdd", async member => {
  const moment = require('moment')
  
   let endAt = member.user.createdAt
   let gün = moment(new Date(endAt).toISOString()).format('DD')
   let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
   let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
   let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
   let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
   let kanal = ids.channels.kanalHosgeldin
   let kayıtlı = ids.roles.rolKayıtsız
   const wlc = ids.emojis.welcome
   member.guild.members.cache.get(member.id).roles.add(kayıtlı)
   client.channels.cache.get(kanal).send
   
   const hgg = new Discord.EmbedBuilder()
   .setTitle(`Sunucumuza Hoşgeldin!`)
   .setDescription(`${wlc.welcome1} **Sunucuya Hoşgeldin!** ${member}\n\n${wlc.welcome2} **Seninle Birlikte** \`${member.guild.memberCount}\` **Kişiyiz.**\n\n${wlc.welcome3} **Kayıt Kanalına İsim ve Yaşını Yazarak Kayıt Olabilirsin.**\n\n${wlc.welcome4} <@&${ids.roles.rolYetkili}> **Seninle İlgileneceklerdir.**\n\n${wlc.welcome5} **Hesabın** \`${kuruluş}\` **Tarihinde Kurulmuştur.**\n\n${wlc.welcome5} **Sunucumuzda İyi Vakit Geçir.**`)
   .setTimestamp()
   .setColor("BLACK")
   client.channels.cache.get(kanal).send({embeds: [hgg]})
})

client.on("interactionCreate", async interaction => {
  if (!interaction.isButton()) return;
  let message = await interaction.channel.messages.fetch(interaction.message.id)  
 
 
  if(interaction.customId == "kayitdata") {
    await interaction.deferReply();
    const notdata = new Discord.EmbedBuilder()
    .setColor("ff0000")
    .setDescription(`Kayıt Dataları Siliniyor 📩`)

    const silindi = new Discord.EmbedBuilder()
    .setColor("00ff17")
    .setDescription(`Kayıt Dataları Silindi ✅`)

    db.delete(`erkek_${message.author.id}`)
    db.delete(`kız_${message.author.id}`)
    db.delete(`toplam_${message.author.id}`)

   return interaction.followUp({embeds: [notdata]}).then(x => setTimeout(() => x.edit({ embeds: [silindi]}), 5000))
  }


  if(interaction.customId == "isimdata") {
    await interaction.deferReply();
    const notdata = new Discord.EmbedBuilder()
    .setColor("ff0000")
    .setDescription(`İsim Dataları Siliniyor 📩`)

    const silindi = new Discord.EmbedBuilder()
    .setColor("00ff17")
    .setDescription(`İsim Dataları Silindi ✅`)
    
    const isimdataa = db.get(`isim.${message.guild.id}`)
    db.delete(`isim.${message.guild.id}`)

    if(!isimdataa) return interaction.followUp({ content: `Kayıtlı isim datası bulunamadı.`})
   return interaction.followUp({embeds: [notdata]}).then(x => setTimeout(() => x.edit({ embeds: [silindi]}), 5000))
  }
})

client.login(config.token)