// MADE BY BOCHILGAMING
// RECODE BY KANNACHANN

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
%dash
%m1 *𝚄𝚜𝚎𝚛*
%m2 *𝙽𝚊𝚖𝚎:* %name
%m2 *𝚃𝚊𝚐:* %tag
%m2 *𝚂𝚝𝚊𝚝𝚞𝚜:* %prems
%m2 *𝙻𝚒𝚖𝚒𝚝 :* %limit
%m2 *𝙼𝚘𝚗𝚎𝚢:* %money
%m2 *𝚁𝚘𝚕𝚎:* %role
%m2 *𝙻𝚎𝚟𝚎𝚕:* %level [ %xp4levelup Xp For Levelup]
%m2 *𝚇𝚙:* %exp / %maxexp
%m2 *𝚃𝚘𝚝𝚊𝚕 𝚇𝚙:* %totalexp
%m3

%m1 *🅣︎🅞︎🅓︎🅐︎🅨︎*
%m2 *%ucpn*
%m2 *Days:* %week %weton
%m2 *Date:* %date
%m2 *Islamic Date:* %dateIslamic
%m2 *Time:* %wib
%m3

%m1 *🅘︎🅝︎🅕︎🅞︎*
%m2 *B̸o̸t̸ N̸a̸m̸e̸:* %me
%m2 *M̸o̸d̸e̸:* %mode
%m2 *P̸l̸a̸f̸r̸o̸m̸t̸:* %platform
%m2 *T̸y̸p̸e̸:* Node.Js
%m2 *B̸a̸i̸l̸e̸y̸s̸:* Multi Device
%m2 *P̸r̸e̸f̸i̸x̸:* [ *%_p* ]
%m2 *U̸p̸t̸i̸m̸e̸:* %muptime
%m2 *D̸a̸t̸a̸b̸a̸s̸e̸:* %rtotalreg dari %totalreg
%m3

%m1 *🅘︎🅝︎🅕︎🅞︎ 🅒︎🅜︎🅓︎* 
%m4 *Ⓟ* = Premium
%m4 *Ⓛ* = Limit
%m3
%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': '🅜︎🅐︎🅘︎🅝︎',
  'game': '🅖︎🅐︎🅜︎🅔︎',
  'rpg': '🅡︎🅟︎🅖︎ 🅖︎🅐︎🅜︎🅔︎🅢︎',
  'xp': '🅔︎🅧︎🅟︎ & 🅛︎🅘︎🅜︎🅘︎🅣︎',
  'sticker': '🅢︎🅣︎🅘︎🅒︎🅚︎🅔︎🅡︎',
  'kerang': '🅚︎🅔︎🅡︎🅐︎🅝︎🅖︎ 🅐︎🅙︎🅐︎🅘︎🅑︎',
  'quotes': '🅠︎🅤︎🅞︎🅣︎🅔︎🅢︎',
  'fun': '🅕︎🅤︎🅝︎',
  'anime': '🅐︎🅝︎🅘︎🅜︎🅔︎',
  'admin': '🅐︎🅓︎🅜︎🅘︎🅝︎',
  'group': '🅖︎🅡︎🅞︎🅤︎🅟︎',
  'vote': '🅥︎🅞︎🅣︎🅘︎🅝︎🅖︎',
  'absen': '🅐︎🅑︎🅢︎🅔︎🅝︎',
  'premium': '🅟︎🅡︎🅔︎🅜︎🅘︎🅤',
  'anonymous': '🅐︎🅞︎🅝︎🅨︎🅜︎🅤︎🅢︎ & 🅒︎🅗︎🅐︎🅣︎',
  'internet': '🅘︎🅝︎🅣︎🅔︎🅡︎🅝︎🅔︎🅣︎',
  'downloader': '🅓︎🅞︎🅦︎🅛︎🅞︎🅓︎🅔︎🅡︎',
  'tools': '🅣︎🅞︎🅛︎🅢︎',
  'nulis': '🅜︎🅐︎🅖︎🅔︎🅡︎🅝︎🅤︎🅛︎🅘︎🅢︎ & 🅛︎🅞︎🅖︎🅞︎',
  'audio': '🅐︎🅤︎🅓︎🅘︎🅞︎',
  'maker': '🅜︎🅐︎🅚︎🅔︎🅡︎',
  'database': '🅓︎🅐︎🅣︎🅐︎🅑︎🅐︎🅢︎🅔︎',
  'quran': '🅐︎🅛︎ 🅠︎🅤︎🅡︎\'🅐︎🅝︎',
  'owner': '🅞︎🅦︎🅝︎🅔︎🅡︎',
  'host': '🅗︎🅞︎🅢︎🅣︎',
  'advanced': '🅐︎🅓︎🅥︎🅐︎🅝︎🅒︎🅔︎🅓︎',
  'info': '🅘︎🅝︎🅕︎🅞︎',
  '': '🅝︎🅞︎ 🅒︎🅐︎🅣︎🅔︎🅖︎🅞︎🅡︎🅨︎',
}
  if (teks == 'game') tags = {
    'game': '🅖︎🅐︎🅜︎🅔︎🅢︎'
  }
  if (teks == 'anime') tags = {
    'anime': '🅐︎🅝︎🅘︎🅜︎🅔︎'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': '🅝︎🅢︎🅕︎🅦︎'
  }
  if (teks == 'rpg') tags = {
    'rpg': '🅡︎🅟︎🅖︎'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': '🅔︎🅓︎🅤︎🅚︎🅐︎🅢︎🅘︎'
  }
  if (teks == 'news') tags = {
    'news': '🅝︎🅔︎🅦︎🅢︎'
  }
  if (teks == 'random') tags = {
    'random': '🅡︎🅐︎🅝︎🅓︎🅞︎🅜︎'
  }
  if (teks == 'xp') tags = {
    'xp': '🅔︎🅧︎🅟︎ & 🅛︎🅘︎🅜︎🅘︎🅣︎'
  }
  if (teks == 'stiker') tags = {
    'sticker': '🅢︎🅣︎🅘︎🅚︎🅔︎🅡︎'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': '🅚︎🅔︎🅡︎🅐︎🅝︎🅖︎ 🅐︎🅙︎🅐︎🅘︎🅑︎'
  }
  if (teks == 'quotes') tags = {
    'quotes': '🅠︎🅤︎🅞︎🅣︎🅔︎🅢︎'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': '🅐︎🅓︎🅜︎🅘︎🅝︎'
  }
  if (teks == 'Grop︎') tags = {
    'group': '🅖︎🅡︎🅞︎🅤︎🅟︎'
  }
  if (teks == 'premium') tags = {
    'premium': '🅟︎🅡︎🅔︎🅜︎🅘︎🅤︎🅜︎'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    '': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} ℳ𝒶𝒾𝓃 ℳℯ𝓃𝓊 ${htka}`,
	rows: [
	    {title: `1 «ꨄ︎⚡»༆ ${pmenus} 𝑻𝒆𝒔𝒕 𝑺𝒑𝒆𝒆𝒅 𝑩𝒐𝒚`, rowId: ".ping", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙺𝚎𝚌𝚎𝚙𝚊𝚝𝚊𝚗 𝙳𝚊𝚡𝚡𝚢 𝙱𝚘𝚝"},
	    {title: `2 «ꨄ︎💌»༆ ${pmenus} 𝑶𝒘𝒏𝒆𝒓  `, rowId: ".owner", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙻𝚒𝚜𝚝 𝙾𝚠𝚗𝚎𝚛 𝙳𝚊𝚡𝚡𝚢 𝙱𝚘𝚝"},
	    {title: `3 «ꨄ︎📔»༆ ${pmenus} 𝑺𝒄𝒓𝒊𝒑𝒕 𝑩𝒐𝒕`, rowId: ".sc", description: `𝚂𝚘𝚞𝚛𝚌𝚎 𝙲𝚘𝚍𝚎  ${namebot}`},
	]
    },{
	title: `${htki} 𝒮𝓊𝓅𝓅ℴ𝓇𝓉 𝒟𝒶𝓍𝓍𝓎ℬℴ𝓉 ${htka}`,
	rows: [
	    {title: `1 ❥︎︎︎︎«🔖»༆ ${pmenus} 𝑺𝒆𝒘𝒂 𝑩𝒐𝒕`, rowId: ".sewa", description: "𝙻𝚒𝚜𝚝 𝚂𝚎𝚠𝚊 𝙱𝚘𝚝 "},
	    {title: `2 ❥︎«🌟»༆${pmenus} 𝑩𝒖𝒚 𝑷𝒓𝒆𝒎𝒖𝒚𝒎`, rowId: ".premium", description: "Menampilkan list harga premium"},
	    {title: `3 ❥︎«💹 »༆${pmenus} 𝑫𝒐𝒏𝒂𝒔𝒊`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
	]
	},{
	title: `${htki} ℳℯ𝓃𝓊 𝒟𝒶𝓍𝓍𝓎ℬℴ𝓉 ${htka}`,
	rows: [
	    {title: `1 »💬«༄ ${pmenus} 𝑨𝒍𝒍 𝑴𝒆𝒏𝒖`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
	    {title: `2 »🌱«༄ ${pmenus} 𝑹𝒑𝒈 𝑮𝒂𝒎𝒆`, rowId: ".? rpg", description: "Game Epic Rpg!"},
	{title: `3 »✨«༄ ${pmenus} 𝑬𝒙𝒑`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
	{title: `4 »🎮«༄ ${pmenus} 𝑮𝒂𝒎𝒆`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
	{title: `5 »🧩«༄${pmenus} 𝑭𝒖𝒏`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
	{title: `6 »🐚«༄ ${pmenus} 𝑲𝒆𝒓𝒂𝒏𝒈`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
	{title: `7 »📑«༄ ${pmenus} 𝑸𝒖𝒐𝒕𝒆𝒔`, rowId: ".? quotes", description: "Random Inspirasi"},
	{title: `8 »⛩️«༄ ${pmenus} 𝑨𝒏𝒊𝒎𝒆`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
	{title: `9 »🔞«༄ ${pmenus} 𝑵𝒔𝒇𝒘`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
	{title: `10 »🌟«༄ ${pmenus} 𝑷𝒓𝒆𝒎𝒊𝒖𝒎`, rowId: ".? premium", description: "Only premium Users"},
	{title: `11 »🎭«༄ ${pmenus} 𝑨𝒏𝒐𝒏𝒚𝒎𝒖𝒔 & 𝑪𝒉𝒂𝒕`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
	{title: `12 »📖«༄ ${pmenus} 𝑨𝒍𝒍 𝑸𝒖𝒓𝒂𝒏`, rowId: ".? quran", description: "Tobat yuk kak"},
	{title: `13 »🌎«༄ ${pmenus} 𝑰𝒏𝒕𝒆𝒓𝒏𝒆𝒕`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
	{title: `14 »📩«༄ ${pmenus} 𝑫𝒐𝒘𝒍𝒐𝒅𝒆𝒓𝒔`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
	{title: `15 »🎨«༄ ${pmenus} 𝑺𝒕𝒊𝒌𝒆𝒓𝒔`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
	{title: `16 »✏«༄️ ${pmenus} 𝑵𝒖𝒍𝒊𝒔`, rowId: ".? nulis", description: "Nulis kok males kak?"},
	{title: `17 »🎧«༄ ${pmenus} 𝑨𝒖𝒅𝒊𝒐`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
	{title: `18 »🏢«༄ ${pmenus} 𝑮𝒓𝒐𝒖𝒑`, rowId: ".? group", description: "Only Groups"},
	{title: `19 »👑«༄ ${pmenus} 𝑨𝒅𝒎𝒊𝒏`, rowId: ".? admin", description: "Only Admin Group"},
	{title: `20 »🗂«༄️ ${pmenus} 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
	{title: `21 »🛠«༄️ ${pmenus} 𝑻𝒐𝒍𝒔`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
	{title: `22 »ℹ️«༄ ${pmenus} 𝑰𝒏𝒇𝒐`, rowId: ".? info", description: "Info info BOT"},
	{title: `23 »👩‍💻«༄ ${pmenus} 𝑶𝒘𝒏𝒆𝒓`, rowId: ".? owner", description: "Owner Only!"},
	{title: `24 »❓«༄ ${pmenus} 𝑵𝒐 𝑪𝒂𝒕𝒆𝒈𝒐𝒓𝒚`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
	]
  },
]

let usrs = db.data.users[m.sender]
let tek = `*${ucapan()} ${conn.getName(m.sender)}*

❏––––––『 *𝑼𝒔𝒆𝒓 𝑰𝒏𝒇𝒐* 』
┊ఌ︎ *𝑵𝒂𝒎𝒂:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┊ఌ︎ *𝑻𝒂𝒈𝒔:* @${m.sender.split`@`[0]}
┊ఌ︎ *𝑺𝒕𝒂𝒕𝒖𝒔:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊ఌ︎ *𝑷𝒓𝒆𝒎𝒊𝒖𝒎:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
┊𝒜𝒹𝒾𝓉𝓎𝒶 𝒜𝓃𝒹 𝒟𝒶𝓍𝓍𝓎
┗━═┅═━––––––

❏––––––『 *𝑺𝒕𝒂𝒕𝒖𝒔 𝑰𝒏𝒇𝒐* 』
┊❦︎ *𝑼𝒑𝒕𝒊𝒎𝒆:* ${mpt}
┊❦︎ *𝑻𝒊𝒎𝒆:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
┊❦︎ *𝑼𝒔𝒆𝒓:* ${Object.keys(global.db.data.users).length}
┊❦︎ *𝑳𝒊𝒎𝒊𝒕:* ${usrs.limit}
┊❦︎ *𝑳𝒆𝒗𝒆𝒍:* ${usrs.level}
┊❦︎ *𝑹𝒐𝒍𝒆:* ${usrs.role}${usrs.premiumTime > 1 ? `
┊❦︎ *𝑬𝒙𝒑𝒊𝒓𝒆𝒅 𝑷𝒓𝒆𝒎𝒊𝒖𝒎:*
${clockStringP(usrs.premiumTime - new Date())}` : ''}
┊𝒫𝓁𝓈𝓈 𝒩ℴ ℋ𝓊𝒿𝒶𝓉 ℳℯ ℋ𝒶𝓃𝓎𝒶 ℛℯ𝒸ℴ𝒹
┗━═┅═━––––––
𝒯𝓆 𝓉ℴ
𝒦𝒶𝓃𝓃𝒶-𝒞𝒽𝒶𝓃𝓃
𝒟𝒶𝓍𝓍𝓎-ℬℴ𝓉
ℬℴ𝒸𝒽𝒾𝓁-𝒢𝒶𝓂𝒾𝓂ℊ

`
const listMessage = {
  text: tek,
  footer: ' ©Daxxy-Bot|2022  ',
  mentions: await conn.parseMention(tek),
  title: `${htki} *𝑳𝒊𝒔𝒕 𝑴𝒆𝒏𝒖* ${htka}`,
  buttonText: `CLICK ME `,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
  	
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    // MAMPUS DI ENC :v
    const _0x187932=_0x5c09;function _0x5c09(_0x28b840,_0x244043){const _0x1766bb=_0x1766();return _0x5c09=function(_0x5c09dc,_0x158321){_0x5c09dc=_0x5c09dc-0x1bb;let _0x4031df=_0x1766bb[_0x5c09dc];return _0x4031df;},_0x5c09(_0x28b840,_0x244043);}(function(_0x1c9e83,_0x2eef01){const _0x5e85ab=_0x5c09,_0x179660=_0x1c9e83();while(!![]){try{const _0x4c7814=-parseInt(_0x5e85ab(0x1d0))/0x1*(-parseInt(_0x5e85ab(0x1bd))/0x2)+parseInt(_0x5e85ab(0x1c4))/0x3*(parseInt(_0x5e85ab(0x1bf))/0x4)+parseInt(_0x5e85ab(0x1cc))/0x5*(-parseInt(_0x5e85ab(0x1d1))/0x6)+parseInt(_0x5e85ab(0x1c1))/0x7*(parseInt(_0x5e85ab(0x1bc))/0x8)+parseInt(_0x5e85ab(0x1cd))/0x9*(-parseInt(_0x5e85ab(0x1c7))/0xa)+parseInt(_0x5e85ab(0x1cb))/0xb*(-parseInt(_0x5e85ab(0x1be))/0xc)+parseInt(_0x5e85ab(0x1ce))/0xd;if(_0x4c7814===_0x2eef01)break;else _0x179660['push'](_0x179660['shift']());}catch(_0x2b3360){_0x179660['push'](_0x179660['shift']());}}}(_0x1766,0x70ad5));let buttonMessage={'document':{'url':sgc},'mimetype':td,'fileName':global['wm'],'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'forwardingScore':0x22b,'isForwarded':!![],'externalAdReply':{'mediaUrl':global[_0x187932(0x1c8)],'mediaType':0x2,'previewType':_0x187932(0x1c9),'title':global['titlebot'],'body':global['titlebot'],'thumbnail':await(await fetch(thumb))[_0x187932(0x1ca)](),'sourceUrl':sgc}},'caption':text,'footer':botdate,'buttons':[{'buttonId':'.𝑶 𝑾 𝑵 𝑬 𝑹 🧸','buttonText':{'displayText':_0x187932(0x1bb)},'type':0x1},{'buttonId':_0x187932(0x1c5),'buttonText':{'displayText':_0x187932(0x1c0)},'type':0x1},{'buttonId':_0x187932(0x1c6),'buttonText':{'displayText':'Donasi'},'type':0x1}],'headerType':0x6};await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)],buttonMessage,{'quoted':m,'mentionedJid':[m[_0x187932(0x1c3)]]});function _0x1766(){const _0x1c60e8=['3ezQcUH','.ping','.donasi','725770ccnUBU','sig','pdf','buffer','305624SHQwwY','233195fjGJSZ','72BjUaMS','2869867kBKaey','chat','6NokiEm','72PsFaxu','Owner','1832yREmVQ','205026IsvCrH','132IBvmfp','3329164htczQJ','Speed','7315FCLnNH','sendMessage','sender'];_0x1766=function(){return _0x1c60e8;};return _0x1766();}
    
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\n⚡ Supported By FR Team',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://kannxapi.herokuapp.com/'
                    }
                },
                {
                    urlButton: {
                        displayText: '𝙶𝚛𝚘𝚞𝚙 𝙾𝚏𝚏𝚌𝚒𝚊𝚕',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '𝙾 𝚆 𝙽 𝙴 𝚁 🧸',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '𝚂𝚙𝚎𝚎𝚍',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '𝙳𝚘𝚗𝚊𝚜𝚒',
                        id: '.donasi'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊 𝑲𝒂𝒌 🌄"
  }
  if (time >= 10) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈 𝑲𝒂𝒌 ☀️"
  }
  if (time >= 15) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆 𝑲𝒂𝒌 🌇"
  }
  if (time >= 18) {
    res = "𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎 𝑲𝒂𝒌 🌙"
  }
  return res
}
