exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `|-----[ *MENU DONASI ${BotName}* ]-----|
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? 

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :

⚜ *VIA PULSA TRI*: 08999045517
⚜ *VIA PULSA TELKOMSEL*: 082130301023

*TERIMA KASIH BAGI KALIAN YANG SUDAH DONASI, SEMOGA DI REZEKI YANG MELIMPAH, AMIN*

  
|-----[ *POWERED BY ${BotName}* ]-----|`
}
