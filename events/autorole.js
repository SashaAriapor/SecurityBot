const autorole = (client) => {
    client.on("guildMemberAdd", member => {
        const unverifdRole = member.guild.roles.cache.get("959501819254566943");
        member.roles.add(unverifdRole);
    });
}


module.exports = {
    autorole
}