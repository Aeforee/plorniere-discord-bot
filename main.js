const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config.json')


client.once('ready', () => {
    console.log('HELL YEAH BOI ITS FUCKIN ONN')
})



client.login(config.token)
