const { Client, Collection } = require("discord.js");
const chalk = require("chalk");
const Discord = require(`discord.js`)
const colors = require("colors")

const discordModals = require('discord-modals');
const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables

client.commands = new Collection();
client.slashCommands = new Collection();
const fs = require(`fs`);
client.config = require("./config.json");
client.emoji = require(`./emoji.json`)


// Initializing the project
require("./handler")(client);
discordModals(client);

/*        WEB & BOT SERVER         ¦¦        WEB & BOT SERVER        */ 
if(client.config.hostingweb == true) {
require("./webport")();
}

//replacing files

replaceallfiles(
    "/home/container", //Source Dir, you can even use just C:// or D:// so it uses the whole pc...
    "discord.cyberneticsdev.tk", //To Replace Content
    "discord.cyberneticsdev.tk" //The Word(s) with what the replaced content will be replaced
)
async function replaceallfiles(srcdir, toreplace, replacewith) {
    let Files  = [];
    allFolders(srcdir);
    function allFolders(Directory) {
        fs.readdirSync(Directory).forEach(File => {
            const Absolute = require("path").join(Directory, File);
            if (fs.statSync(Absolute).isDirectory()) return allFolders(Absolute);
            else return Files.push(Absolute);
        });
    }
    for (const file of Files) {
        await fs.readFile(file, 'utf8', async (err, data) => {
            if (err) return console.error(err);
            if (data.includes(toreplace)) {
                await fs.writeFile(file, data.split(toreplace).join(replacewith), (e) => {
                    if (e) return console.log(`Error on ${file}`, e);
                    return console.log(`Successfully replaced: ${file.replace(srcdir, "")}`);
                });
                return await new Promise((r,x)=>setTimeout(()=>r(2), 250)) 
            };
        })
    }
} 

// stop and restart
const glob = require("glob")
const fetch = require(`node-fetch`)
client.on("interactionCreate", async (btn) => {
  if (btn.values == "stop_client") {
    if(!client.config.developers.includes(btn.member.id)) return btn.reply({
      content: "❌ You can't use this!",
      ephemeral: true
    })
    try {
      btn.reply({
        content: "<a:Loading:920516789883002880> **Shuttingdown the bot...**",
        ephemeral: true
      })
      setTimeout(() => {
        process.exit()
      }, 5000)
    } catch (e) {
      btn.editReply({
        content: `${e}`
      })
    }
  }
  if (btn.values == "rename_client") {
    if(!client.config.developers.includes(btn.member.id)) return btn.reply({
      content: "❌ You can't use this!",
      ephemeral: true
    })
    let filter = (m) => m.author.id === btn.user.id;
    const collector = btn.channel.createMessageCollector({
      filter,
      max: 1
    })
    btn.reply({ content: "<a:Loading:920516789883002880> **Send new Bot Name**",
        ephemeral: true})
    /* collector.on("collect", async(msg) => {
      
    }) */ //not needed
    collector.on("end", (collected) => {
      const name = collected.first().content;
      if (!name) {
        return btn.reditReply({ content: `❌ **No Name!**`})
      }
      let beforename = client.user.username;
      client.user.setUsername(name)
        .then((user) => {
          message.delete()
          btn.editReply({ content: `✅ **Succesfully set name to ${client.user.username} from ${beforename}**`,
        ephemeral: true})
        })
        .catch((e) => {
          btn.editReply({ content: `${e}`,
        ephemeral: true})
        })
    })
  }
  if (btn.values == "changeav_client") {
    if(!client.config.developers.includes(btn.member.id)) return btn.reply({
      content: "❌ You can't use this!",
      ephemeral: true
    })
    let filter = (m) => m.author.id === btn.user.id;
    const collector = btn.channel.createMessageCollector({
      filter,
      max: 1
    })
    btn.reply({ content: "<a:Loading:920516789883002880> **Send the New Bot Image**",
        ephemeral: true})
    collector.on("collect", async (msg) => {
        let url = msg.content;
      if(msg.content.includes(`https://`)) {
        btn.editReply({ content: "<a:Loading:920516789883002880> **Changing avatar...**",
        ephemeral: true})
        
        await msg.delete()
        client.user.setAvatar(url)
          .then(user => {
            
              btn.editReply({ content: "✅ **Succesfully changed the Bot's avatar!**",
        ephemeral: true})
            
          }).catch((e) => {
          btn.editReply({ content: `${e}`,
        ephemeral: true})
        })
      } else {
        msg.delete()
        btn.editReply({ content: "❌ Not a valid URL",
        ephemeral: true})
      }
    })
  }
})


client.login(client.config.token)

/*           ANTI CRASHING            ¦¦           ANTI CRASHING           */ 
process.on('unhandledRejection', (reason, p) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] unhandled Rejection:'.toUpperCase().red.dim);
    console.log(reason.stack.yellow.dim ? String(reason.stack).yellow.dim : String(reason).yellow.dim);
    console.log('=== unhandled Rejection ===\n\n\n\n\n'.toUpperCase().red.dim);
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('\n\n\n\n\n\n[🚩 Anti-Crash] uncaught Exception'.toUpperCase().red.dim);
    console.log(err.stack.yellow.dim ? err.stack.yellow.dim : err.yellow.dim)
    console.log('=== uncaught Exception ===\n\n\n\n\n'.toUpperCase().red.dim);
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[🚩 Anti-Crash] uncaught Exception Monitor'.toUpperCase().red.dim);
  });
  process.on('beforeExit', (code) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] before Exit'.toUpperCase().red.dim);
    console.log(code.yellow.dim);
    console.log('=== before Exit ===\n\n\n\n\n'.toUpperCase().red.dim);
  });

  process.on('multipleResolves', (type, promise, reason) => {
    console.log('\n\n\n\n\n[🚩 Anti-Crash] multiple Resolves'.toUpperCase().red.dim);
    console.log(type, promise, reason.yellow.dim);
    console.log('=== multiple Resolves ===\n\n\n\n\n'.toUpperCase().red.dim);
  });