const fs = require('fs')
const chalk = require('chalk')

///Gantinya Ngerti Kan Lu Kan dah Gede

global.domain = "https://yusufstore.my.id" // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.aipikey = ' ' //isi apikey Ai lu
global.owner = ['6283877118785','6285713888398']
global.nomerOwner = "6283877118785"
global.namabotnya = 'YusufBotz'
global.namaownernya = 'Yusuf'
global.packname = '© Yusuf||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 0859-3500-2092\nYT : BangYusuf'
global.audionya = fs.readFileSync("./image/sound.mp3")
global.sessionName = 'session'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.group = 'https://chat.whatsapp.com/BdfHWrzDaU23VjmmMcraXj'
global.anticall = true
global.wm = "Subscribe YT *BangYusuf*"
global.mess = 
{
success: '```𝐵𝑒𝑟ℎ𝑎𝑠𝑖𝑙 𝐵𝑟𝑜✅```',
admin: '```𝐾ℎ𝑢𝑠𝑢𝑠 𝐴𝑑𝑚𝑖𝑛‼️, 𝐽𝑎𝑛𝑔𝑎𝑛 𝐺𝑢𝑛𝑎𝑖𝑛 𝑆𝑒𝑙𝑎𝑖𝑛 𝐴𝑑𝑚𝑖𝑛```',
botAdmin: '```𝐵𝑜𝑡 𝑛𝑦𝑎 𝐽𝑎𝑑𝑖𝑖𝑛 𝑎𝑑𝑚𝑖𝑛 𝐷𝑢𝑙𝑢😑```',
owner: '```𝐹𝑖𝑡𝑢𝑟 𝐾ℎ𝑢𝑠𝑢𝑠 𝑂𝑤𝑛𝑒𝑟 𝐺𝑢𝑎!!!```',
group: '```𝐹𝑖𝑡𝑢𝑟 𝐾ℎ𝑢𝑠𝑢𝑠 𝐺𝑟𝑢𝑝!!!```',
private: '```𝐹𝑖𝑡𝑢𝑟 𝐾ℎ𝑢𝑠𝑢𝑠 𝑃𝑟𝑖𝑣𝑎𝑡 𝐶ℎ𝑎𝑡!!!```',
banned: '𝐿𝑢 𝐷𝑖 *𝐵𝑎𝑛𝑛𝑒𝑑*, 𝐵𝑖𝑙𝑎𝑛𝑔 𝐾𝑒 *𝑂𝑤𝑛𝑒𝑟* 𝐺𝑢𝑎 𝐵𝑢𝑎𝑡 𝐵𝑢𝑘𝑎 𝐵𝑎𝑛𝑛𝑒𝑑',
bot: '```𝐹𝑖𝑡𝑢𝑟 𝐾ℎ𝑢𝑠𝑢 𝑃𝑒𝑛𝑔𝑔𝑢𝑛𝑎 𝑁𝑜𝑚𝑒𝑟 𝐵𝑜𝑡!!!```',
premium: '𝐹𝑖𝑡𝑢𝑟 𝐾ℎ𝑢𝑠𝑢𝑠 *𝑃𝑟𝑒𝑚𝑖𝑢𝑚*, 𝑀𝑎𝑢 𝑃𝑟𝑒𝑚𝑖𝑢𝑚? 𝐵𝑖𝑙𝑎𝑛𝑔 𝑘𝑒 𝑂𝑤𝑛𝑒𝑟',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```𝑆𝑎𝑏𝑎𝑟 𝐵𝑟𝑜...```'
}

global.thumb = fs.readFileSync('./image/thumb.png')

///Tampilan Menu

global.allmenu = (prefix, hituet) => {
return`

╭─────────────
乂 *𝕊𝕋𝕆ℝ𝔼 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃ ❏➺.Addlist
┃ ❏➺.Dellist
┃ ❏➺.List
┃ ❏➺.tambah
┃ ❏➺.kali
┃ ❏➺.bagi
┃ ❏➺.kurang
┃ ❏➺.Done
┃ ❏➺.Proses
┃ ❏➺.Tunda
┃ ❏➺.Batal
┃ ❏➺.Culik
┃ ❏➺.

╭─────────────
乂 *𝕆𝕎ℕ𝔼ℝ 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃ ❏➺.Self
┃ ❏➺.Public
┃ ❏➺.Restart
┃ ❏➺.Shutdown
┃ ❏➺.CreateGc
┃ ❏➺.Promote
┃ ❏➺.Demote
┃ ❏➺.ListPc
┃ ❏➺.Block 628xx
┃ ❏➺.Unblock 628xxx
┃ ❏➺.SetPpBot
┃ ❏➺.AntiCall (On/Off)
┃ ❏➺.AddPrem
┃ ❏➺.DelPrem
┃ ❏➺.ListPrem 
╰──────────⌬

╭─────────────
乂 *ℙ𝔸ℕ𝔼𝕃 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃ ❏➺.AddUsr
┃ ❏➺.DelUsr
┃ ❏➺.ListSrv
┃ ❏➺.AddSrv
┃ ❏➺.DelSrv
╰──────────⌬

╭─────────────
乂 *ℙ𝕌𝕊ℍ𝕂𝕆ℕ𝕋𝔸𝕂 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃❏➺.PushKontakv1
┃❏➺.PushKontakv2 (ViaId)
┃❏➺.GetIdGc
┃❏➺.ListIdGc
┃❏➺.PushUser
┃❏➺.Savecontact
┃❏➺.Join
┃❏➺.Cekmember
╰──────────⌬

╭─────────────
乂 *𝔾ℝ𝕌ℙ 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃❏➺.Kick @
┃❏➺.Add +628xxx
┃❏➺.Linkgc
┃❏➺.Hidetag (Teks)
┃❏➺.TagAll (Teks)
┃❏➺.Antilink (On/Off)
┃❏➺.Gc (O/C Open/Close)
┃❏➺.Welcome (On/Off)
┃❏➺.Left (On/Off)
┃❏➺.SetPpGc
┃❏➺.SetDesk
┃❏➺.ListOnline
┃❏➺.SetSubject
┃❏➺.GetPp @
╰──────────⌬

╭─────────────
乂 *𝕆𝕋ℍ𝔼ℝ 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃❏➺.Ai
┃❏➺.AiImage
┃❏➺.Stiker
┃❏➺.Smeme
┃❏➺.Tiktok (Link)
┃❏➺.Qc
┃❏➺.Ping
╰──────────⌬
乂 *MY TIKTOK ACCOUNT* 乂
https://tiktok.com/@xyzen985

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  © 🅨︎🅤︎🅢︎🅤︎🅕︎ 🅢︎🅣︎🅞︎🅡︎🅔︎`}
  
  
  
 global.ownermenu = (prefix) => {
return `
╭─────────────
乂 *𝕆𝕎ℕ𝔼ℝ 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃ ❏➺.Self
┃ ❏➺.Public
┃ ❏➺.Restart
┃ ❏➺.Shutdown
┃ ❏➺.CreateGc
┃ ❏➺.Promote
┃ ❏➺.Demote
┃ ❏➺.ListPc
┃ ❏➺.Block 628xx
┃ ❏➺.Unblock 628xxx
┃ ❏➺.SetPpBot
┃ ❏➺.AntiCall (On/Off)
┃ ❏➺.AddPrem
┃ ❏➺.DelPrem
┃ ❏➺.ListPrem 
╰──────────⌬`}

global.pushkontakmenu = `
 ╭─────────────
乂 *ℙ𝕌𝕊ℍ𝕂𝕆ℕ𝕋𝔸𝕂 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃❏➺.PushKontakv1
┃❏➺.PushKontakv2 (ViaId)
┃❏➺.GetIdGc
┃❏➺.ListIdGc
┃❏➺.PushUser
┃❏➺.Savecontact
┃❏➺.Join
┃❏➺.Cekmember
╰──────────⌬
`

global.panelmenu = `
╭─────────────
乂 *ℙ𝔸ℕ𝔼𝕃 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃ ❏➺.AddUsr
┃ ❏➺.DelUsr
┃ ❏➺.ListSrv
┃ ❏➺.AddSrv
┃ ❏➺.DelSrv
╰──────────⌬`

global.othermenu = `
╭─────────────
乂 *𝕆𝕋ℍ𝔼ℝ 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃❏➺.Ai
┃❏➺.AiImage
┃❏➺.Stiker
┃❏➺.Smeme
┃❏➺.Tiktok (Link)
┃❏➺.Qc
┃❏➺.Ping
╰──────────⌬`

global.groupmenu = `
╭─────────────
乂 *𝔾ℝ𝕌ℙ 𝕄𝔼ℕ𝕌* 乂
╰─────────────
┃❏➺.Kick @
┃❏➺.Add +628xxx
┃❏➺.Linkgc
┃❏➺.Hidetag (Teks)
┃❏➺.TagAll (Teks)
┃❏➺.Antilink (On/Off)
┃❏➺.Gc (O/C Open/Close)
┃❏➺.Welcome (On/Off)
┃❏➺.Left (On/Off)
┃❏➺.SetPpGc
┃❏➺.SetDesk
┃❏➺.ListOnline
┃❏➺.SetSubject
┃❏➺.GetPp @
╰──────────⌬`

global.menubug = `

COMMING SOON`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})