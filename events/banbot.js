const banbot = (client) => {
    client.on("guildMemberAdd", bot => {
        if(bot.user.bot) {
            console.log(bot.user.mentions);
        }
        return
    });
}


module.exports = {
    banbot
}