const config = require('../config')
const {cmd , commands} = require('../command')
const os = require('os')
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👧🏻",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
*Hi 🍄* ${pushname}

┌────────────────
│❖ *ᴜᴘᴛɪᴍᴇ :* _${runtime(process.uptime())}_
│❖ *ʀᴀᴍ ᴜꜱᴀɢᴇ :*  _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
│❖ *ʜᴏꜱᴛ ɴᴀᴍᴇ :* _${os.hostname()}_
│❖ *ᴏᴡɴᴇʀ :* _Kᴇɴᴢᴏ_
└────────────────

*Oyage Sᴜᴛɪ Mᴀɴɪᴋᴀ Innawa patiyo👸🏻*

┌────────────────
│ _*Suti Manika's Official Web Site*_
│ Thama ehema ekk nh issarahata hadannm
└────────────────
┌────────────────
│ _*Suti Manikage Github Repo eka*_
│ https://github.com/HaCkr-EPZI-public/CuduNona 
└────────────────
┌────────────────
│ _*Apilage Group eka*_
│ https://chat.whatsapp.com/C4uV5P7ZvrS85lUzCoZzx7
└────────────────

> *©️Created By Kᴇɴᴢᴏ... 👻*
`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tZzBS47/image.jpg`},caption: desc},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})



