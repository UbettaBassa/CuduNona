const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "menu",
    category: "main",
    react: "📚",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*🌸 Hi* ${pushname}
┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Kᴇɴᴢᴏ_
└────────────────
*Kenzo's Suti Manika Is Here*👸🏻
┌────────────
❖ *📚ALL COMMANDS📚*└────────────
┌────────────
❖ *📥DOWNLOAD COMMANDS📥*
│
│ ✑ _.song_
│ ✑ _.play_
│ ✑ _.yta_
│ ✑ _.video_
│ ✑ _.fb_
│ ✑ _.facebook_
│ ✑ _.tt_
│ ✑ _.tiktok_
│ ✑ _.ig_
│ ✑ _.twdl_
│ ✑ _.twitter_
│ ✑ _.gdrive_
│ ✑ _.apk_
│ ✑ _.mediafire_
└────────────
┌────────────
❖ *🔎SEARCH COMMANDS🔎*
│
│ ✑ _.yts_
│ ✑ _.img_
│ ✑ _.pinterest_
└────────────
┌────────────
❖ *🧚🏻ANIME  COMMANDS🧚🏻*
│
│ ✑ _.loli_
│ ✑ _.waifu_
│ ✑ _.neko_
│ ✑ _.megumin_
│ ✑ _.maid_
│ ✑ _.awoo_
└────────────
┌────────────
❖ *🎊CONVERTED COMMANDS🎊*
│
│ ✑ _.sticker_
│ ✑ _.tts_
└────────────
┌────────────
❖ *👸🏻AI COMMANDS👸🏻*
│
│ ✑ _.ai_
│ ✑ _.cgpt_
└────────────
┌────────────
❖ *🧧MAIN COMMANDS🧧*
│
│ ✑ _.restart_
│ ✑ _.owner_
│ ✑ _.ping_
│ ✑ _.system_
│ ✑ _.src_
└────────────
┌────────────
❖ *🧧NEW & TESTING COMMANDS🧧*
│
│ ✑ _.githubstalk_
│ ✑ _.gpass_
│ ✑ _.hack_
│ ✑ _.dog_
│ ✑ _.joke_
│ ✑ _.fact_
│ ✑ _.animegirl_
│ ✑ _.define_
│ ✑ _.sh_
└────────────
┌────────────
❖ *🎯GROUP COMMANDS🎯*
│
│ ✑ _.promote_
│ ✑ _.demote_
│ ✑ _.remove_
│ ✑ _.kick_
│ ✑ _.setwelcome_
│ ✑ _.setgoodbye_
│ ✑ _.getpic_
└────────────
┌────────────
❖ *👤OWNER COMMANDS👤️*
│
│ ✑ _.block_
│ ✑ _.unblock_
│ ✑ _.jid_
│ ✑ _.gjid_
│ ✑ _.clearchats_
│ ✑ _.restart_
└────────────

> *©️Created By Kᴇɴᴢᴏ... 👻*
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tZzBS47/image.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
