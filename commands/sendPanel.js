const { MessageEmbed } = require("discord.js");
const { Verfiy } = require("../security/verify");


const PanelVerify = async (message , client) => {
    await message.channel.bulkDelete(1);
    PanelEmbed = new MessageEmbed()
        .setTitle(`Verify`)
        .setColor('#000')
        .setDescription(`برای وریفای و تایید هویت شما در سرور روی ریکشن زیر کلیک کنید\n Click on the reaction below to verify your identity on the server`)
        .setFooter(`RedRoom community`)

    let embedMessage = await message.channel.send(PanelEmbed);
    embedMessage.react(`✅`);
    Verfiy(client , message);
}
module.exports = {
    PanelVerify
}
