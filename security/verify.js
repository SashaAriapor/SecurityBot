const { welcomeMessage } = require("../events/welcome");

const verifyChannel = require("../config.json").verifyChannel
const MemberRole = require("../config.json").MemberRole
const UnVerifyRole = require("../config.json").UnVerifyRole

const Verfiy = (client, message) => {
    const verify = message.guild.roles.cache.get(MemberRole);
    const unVerify = message.guild.roles.cache.get(UnVerifyRole);
   
    client.on("messageReactionAdd", async ( reaction , user ) => {
        if(reaction.message.channel.id == verifyChannel){
            await reaction.message.guild.members.cache.get(user.id).roles.add(verify);
            await reaction.message.guild.members.cache.get(user.id).roles.remove(unVerify);
            const welcomechannel = await reaction.message.guild.channels.cache.get("959473600296001556")
            welcomeMessage(user , welcomechannel)
        }
    })
}


module.exports = {
    Verfiy,
}