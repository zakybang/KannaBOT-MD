
import fetch from 'node-fetch'

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.autoVn) {
        let api = `https://hadi-api.herokuapp.com/api/tts?language=id&text=${m.text}`
        conn.sendMessage(m.chat, { audio: { url: api }, mimetype: 'audio/mp4' })
    }
}
