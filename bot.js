console.log('beep beep !')

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODAwMjY4MzIzODQ5MjQwNjI2.YAPp9A.GDrnXB0ygNCJslxqHzktS-PWx2o')

client.on('ready' , readyDiscord);

function readyDiscord(){
    console.log('hello world. i am bot 1.0')
}

const replies = [
    'hi ! how are you ?',
    'how are you doing ?',
    'hope you are well.',
    'stay home , stay safe !'
]

client.on('message',gotMessage);

function gotMessage(msg){
  if(msg.channel.id == '800271964266430485' && msg.content === 'hi bot'){
      //msg.reply('hi , how are you')
      const index = Math.floor(Math.random() * replies.length)
      msg.channel.send(replies[index])
  }
}