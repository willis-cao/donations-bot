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
    if (!message.mentions.has(client.user.id)) return;
    
    if (message.content.includes("league?")) {
        if (message.author.id == process.env.SILENTCTRL_ID) {
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
    }
        

    
});

eventHandler(client);

client.login(process.env.TOKEN);

