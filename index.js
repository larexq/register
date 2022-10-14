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
   let aylar = {
           "01": "Ocak",
           "02": "Şubat",
           "03": "Mart",
           "04": "Nisan",
           "05": "Mayıs",
           "06": "Haziran",
           "07": "Temmuz",
           "08": "Ağustos",
           "09": "Eylül",
           "10": "Ekim",
           "11": "Kasım",
           "12": "Aralık"
   }
  
   let endAt = member.user.createdAt
   let gün = moment(new Date(endAt).toISOString()).format('DD')
   let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
   let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
   let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
   let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
   let kanal = ids.kanalHosgeldin
   let kayıtlı = ids.rolKayıtsız
   member.guild.members.cache.get(member.id).roles.add(kayıtlı)
   client.channels.cache.get(kanal).send
   
   const hgg = new Discord.EmbedBuilder()
   .setTitle(`Hoşgeldin!`)
   .setDescription(`<a:welcome:1030577723145465939> **Sunucuya Hoşgeldin!** ${member}\n\n<a:kristal:1030578043196022876> **Seninle Birlikte** \`${member.guild.memberCount}\` **Kişiyiz.**\n\n<a:dikkat:1030578141506326539> **Kayıt Kanalına İsim ve Yaşını Yazarak Kayıt Olabilirsin.**\n\n<a:staff:1030578443785605130> <@&${ids.rolYetkili}> **Seninle İlgileneceklerdir.**\n\n<a:wheels:1030579185988669491> **Hesabın** \`${kuruluş}\` **Tarihinde Kurulmuştur.**\n\n<a:kalp:1030579231169728563> **Sunucumuzda İyi Vakit Geçir.**`)
   .setColor("BLACK")
   client.channels.cache.get(kanal).send({embeds: [hgg]})
})
client.login(config.token)