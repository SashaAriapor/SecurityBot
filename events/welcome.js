const { MessageEmbed } = require("discord.js")

const welcomeMessage = async(user , channel) => {
    WelcomeEmbed = new MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/884766678955753482/943770590844706856/welcome.gif')
        .setTitle(`Welcome ${user.username}`)
        .setColor('#000')
        .setDescription(`خوش اومدی حتما چنل های زیرو یک نگاه بنداز
        Welcome, be sure to take a look at the following channels
        #〘📋〙𝗥𝘂𝗹𝗲𝘀
        #〘📌〙𝐏𝐫𝐨𝐨𝐟𝐬
        #〘🎈〙𝐑𝐞𝐰𝐚𝐫𝐝𝐬
        #〘🎪〙𝐄𝐯𝐞𝐧𝐭
        
        `)
        .setFooter(`RedRoom community`)


        channel.send(WelcomeEmbed)
}
module.exports = {
    welcomeMessage
}