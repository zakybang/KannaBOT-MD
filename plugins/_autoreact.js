let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bilek|laik|banh|nihh|tytyd|anjir|dek|menu|zaky|apa|anjay|pantek|gila|assalamualaikum|kenapa|antilink|bot|aku|gw|kontol|bapak|lol|loli|parah|wkwk|awokawok|yah|jelek|di|hadeh)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }