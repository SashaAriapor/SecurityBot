const { PanelVerify } = require("./sendPanel");

const commands = (client) => {
    const prefix = require("../config.json").prefix;
    client.on('message' , message => {
        if (message.author.id == 865202202053181440 ) {
        if (!message.content.startsWith(prefix)) return;
        let args = message.content.toLowerCase().substring(prefix.length).split(" ");
        switch(args[0]) {
            case "ping":
                message.channel.send('what.s up honey?');
                break
            case "verifypanel":
                PanelVerify(message , client);
                break
            default: 
                break
        }
    }
    return;
    });
}
module.exports = {
    commands
}