require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('messageCreate', async (message) => {
    if(message.author.bot) return;
    
    if (message.content.includes("i-")) {
        message.channel.send("i-");
    }

    // =======================
    // @ mention replies below
    // =======================

    if (!message.mentions.has(client.user.id)) return;
    
    if (message.content.includes("league") || message.content.includes("leg")) {
        if (message.author.id == process.env.SILENTCTRL_ID ||
            message.author.id == process.env.WULONG_ID ||
            message.author.id == process.env.EXPLO_ID) {
            await new Promise(r => setTimeout(r, 5000));
            message.channel.sendTyping();
            await new Promise(r => setTimeout(r, 2500));
            message.reply("gimme 2 min");
        }
        if (message.author.id == process.env.DELISI_ID ||
            message.author.id == process.env.HARUMIN_ID) {
            await new Promise(r => setTimeout(r, 5000));
            message.channel.sendTyping();
            await new Promise(r => setTimeout(r, 2500));
            message.reply("https://gcdnb.pbrd.co/images/DFgXpJuM7xFd.webp?o=1");
        }
        if (message.author.id == process.env.KJKW_ID) {
            await new Promise(r => setTimeout(r, 2000));
            message.channel.sendTyping();
            await new Promise(r => setTimeout(r, 200));
            message.reply("sure let's solo queue");
        }
        if (message.author.id == process.env.LEONA_ID) {
            await new Promise(r => setTimeout(r, 5000));
            message.channel.sendTyping();
            await new Promise(r => setTimeout(r, 2500));
            message.reply("aren't you playing civ tonight");
        }
    }
        

    
});

eventHandler(client);

client.login(process.env.TOKEN);

