const { Client, CustomStatus } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);

const custom = new CustomStatus(client).setEmoji('😋').setState('yum');

   client.user.setPresence({ activities: [custom] });
});

client.login('token');