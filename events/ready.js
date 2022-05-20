const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = require("../index");
const config = require("../config.json");

client.on("ready", async () => {
  
    console.log(cyan.bold(`🪐 https://discord.cyberneticsdev.tk`));
  
    console.log(green(`[🚩BOT] → ` + magenta(`${client.user.tag}`) +  ` is up & ready!`))
    console.log(green(`[🚩BOT] → https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`))
    client.user.setActivity(client.config.activity.replace("{shards}", Radiant )
    , { type: client.config.status.type })
    client.user.setStatus(client.config.status)
});
