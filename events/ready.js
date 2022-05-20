const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = require("../index");
const config = require("../config.json");

client.on("ready", async () => {
  
    console.log(cyan.bold(`🪐 https://discord.cyberneticsdev.tk`));
  
// ⭐ Main Part of the Handler (Makes the Ticket-System work)
const axios = require('axios')
const si = require('systeminformation');

try {
si.blockDevices().then( async (data) => {
    const url = 'https://auth.azury.live/api/client'
    const licensekey = config.license
    const product = 'ticket_bot'
    const version = '1';
    var _0xd31c=["\x55\x48\x42\x47\x48\x49\x42\x57\x45\x6A\x6E\x64\x73\x66\x6A\x69\x6E\x44\x53\x66\x69\x62\x68\x53\x45\x46\x62\x69\x68\x45\x53\x46\x69\x68\x62\x53\x45\x46\x69\x68\x62\x45\x53\x46"];var _0x6bb1=[_0xd31c[0]];const api_key=_0x6bb1[0]
    const hwid = data[0].serial
 
    const res = await axios.post(
        url,
        {
            licensekey,
            product,
            version,
            hwid,
        },
        { headers: { Authorization: api_key }}
    );

var _0xf993=["\x73\x74\x61\x74\x75\x73\x5F\x63\x6F\x64\x65","\x64\x61\x74\x61","\x73\x74\x61\x74\x75\x73\x5F\x69\x64","\x20\x7C\x2D\x20\x59\x6F\x75\x72\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x69\x73\x20\x69\x6E\x76\x61\x6C\x69\x64\x2E","\x6C\x6F\x67","\x20","\x20\x7C\x2D\x20\x52\x65\x61\x73\x6F\x6E\x3A\x20","\x73\x74\x61\x74\x75\x73\x5F\x6D\x73\x67","\x20\x7C\x2D\x20\x53\x74\x61\x74\x75\x73\x20\x43\x6F\x64\x65\x3A\x20\x1B\x5B\x33\x31\x6D","\x1B\x5B\x30\x6D","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x65\x78\x69\x74","\x73\x74\x61\x74\x75\x73\x5F\x6F\x76\x65\x72\x76\x69\x65\x77","\x73\x75\x63\x63\x65\x73\x73","\x20\x7C\x2D\x20\x4C\x69\x63\x65\x6E\x73\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x76\x61\x6C\x69\x64\x61\x74\x65\x64\x2E\x20\x5B","\x63\x6C\x69\x65\x6E\x74\x6E\x61\x6D\x65","\x1B\x5B\x33\x31\x6D\x55\x6E\x6B\x6E\x6F\x77\x6E\x1B\x5B\x30\x6D","\x5D","\x20\x7C\x2D\x20\x44\x69\x73\x63\x6F\x72\x64\x20\x49\x44\x3A\x20","\x64\x69\x73\x63\x6F\x72\x64\x5F\x69\x64","\x20\x7C\x2D\x20\x53\x74\x61\x74\x75\x73\x20\x43\x6F\x64\x65\x3A\x20\x1B\x5B\x33\x32\x6D","\x20\x7C\x2D\x20\x56\x65\x72\x73\x69\x6F\x6E\x3A\x20\x5C\x78\x31\x62\x5B\x33\x33\x6D","\x5C\x78\x31\x62\x5B\x30\x6D\x2F\x5C\x78\x31\x62\x5B\x33\x32\x6D","\x76\x65\x72\x73\x69\x6F\x6E","\x5C\x78\x31\x62\x5B\x30\x6D"];if(!res[_0xf993[1]][_0xf993[0]]||  !res[_0xf993[1]][_0xf993[2]]){console[_0xf993[4]](_0xf993[3]);console[_0xf993[4]](_0xf993[5]);console[_0xf993[4]](_0xf993[6]+ res[_0xf993[1]][_0xf993[7]]);console[_0xf993[4]](_0xf993[8]+ res[_0xf993[1]][_0xf993[0]]+ _0xf993[9]);console[_0xf993[4]](_0xf993[10]);process[_0xf993[11]](1)};if(res[_0xf993[1]][_0xf993[12]]!== _0xf993[13]){console[_0xf993[4]](_0xf993[3]);console[_0xf993[4]](_0xf993[5]);console[_0xf993[4]](_0xf993[6]+ res[_0xf993[1]][_0xf993[7]]);console[_0xf993[4]](_0xf993[8]+ res[_0xf993[1]][_0xf993[0]]+ _0xf993[9]);console[_0xf993[4]](_0xf993[10]);process[_0xf993[11]](1)}else {console[_0xf993[4]](`${_0xf993[14]}${res[_0xf993[1]][_0xf993[15]]|| _0xf993[16]}${_0xf993[17]}`);console[_0xf993[4]](_0xf993[5]);console[_0xf993[4]](_0xf993[18]+ res[_0xf993[1]][_0xf993[19]]);console[_0xf993[4]](_0xf993[20]+ res[_0xf993[1]][_0xf993[0]]+ _0xf993[9]);console[_0xf993[4]](`${_0xf993[21]}${version}${_0xf993[22]}${res[_0xf993[1]][_0xf993[23]]}${_0xf993[24]}`);console[_0xf993[4]](_0xf993[10])}
})
} catch (err) {
    console.log("Authentication failed")
    console.log(error)
    process.exit(1)
}
    console.log(green(`[🚩BOT] → ` + magenta(`${client.user.tag}`) +  ` is up & ready!`))
    console.log(green(`[🚩BOT] → https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`))
    client.user.setActivity(client.config.activity.replace("{shards}", Radiant )
    , { type: client.config.status.type })
    client.user.setStatus(client.config.status)
});
