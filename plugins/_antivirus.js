const isVirtex = /PLHIPS|๒๒๒|๑๑๑|Đ.Δ.Μ/i // tambahin sendiri

export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiVirtex = isVirtex.exec(m.text)
    
    if (chat.antiVirtex && isAntiVirtex) {
            if (!m.isBaileys && m.text.length > 384) return !0
            if (m.text && m.text.length >= 25000) return !0
            if (m.messageStubType === 68) return !0
        await conn.sendButton(m.chat, `*Font Aneh detect!*${isBotAdmin ? '' : '\n\n_Bot bukan admin_'}`, author, ['off antivirtex', '/disable antivirtex'], m)
        if (isBotAdmin && bot.restrict) {
        m.reply('Ok!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Owner disable auto kick!')
    }
    return !0
}