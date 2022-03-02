/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
   * No Enc? Ga Dijual Om 🤣
   * Gausah Reupload Kontol!
   * */

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner2}`,`${setting.nomerowner3}`] //Kalo Mau Lebih Tambahin Aja Dari Setting.json nya
    global.packname = `${setting.namaowner}`
    global.author = `© ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = '⭔'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: '*[ ⚠︎ ] 𝐇𝐚𝐧𝐲𝐚 𝐀𝐝𝐦𝐢𝐧 𝐘𝐚𝐧𝐠 𝐃𝐚𝐩𝐚𝐭 𝐌𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐒𝐢𝐬𝐭𝐞𝐦*',
    botAdmin: '*[ ⚠︎ ] 𝐒𝐢𝐬𝐭𝐞𝐦 𝐁𝐮𝐤𝐚𝐧 𝐀𝐝𝐦𝐢𝐧*',
    owner: '*[ ⚠︎ ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐎𝐰𝐧𝐞𝐫*',
    group: '*[ ⚠︎ ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐆𝐫𝐨𝐮𝐩*',
    private: '*[ ⚠︎ ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐫𝐢𝐟𝐚𝐭𝐞 𝐂𝐡𝐚𝐭*',
    bot: '*[ ⚠︎ ] 𝐊𝐡𝐮𝐬𝐮𝐬 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐍𝐨𝐦𝐨𝐫 𝐒𝐢𝐬𝐭𝐞𝐦*',
    wait: '*[ ♲︎︎︎ ] 𝐌𝐞𝐧𝐠𝐡𝐮𝐛𝐮𝐧𝐠𝐤𝐚𝐧 𝐊𝐞 𝐒𝐞𝐫𝐯𝐞𝐫, 𝐋𝐨𝐚𝐝𝐢𝐧𝐠...*',
    done: '*[ ✔︎ ] 𝐒𝐮𝐤𝐬𝐞𝐬 𝐍𝐠𝐚𝐛 :)*',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
