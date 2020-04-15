const Discord = require('discord.js');
const auth = require('./auth.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else if (msg.content === 'Ping') {
    msg.reply('Pong');
  }
  else if (msg.content === '@699829462614671390') {
      msg.reply("Hi, I'm Soul Catcher, the Discord bot developed for Team Damaged Souls! Check out my source code here: https://github.com/TeamDamagedSouls/TDS-Discord-Bot. Contact @AX#1999 if you'd like to help make me better!")
  }
});

client.login(auth.token);