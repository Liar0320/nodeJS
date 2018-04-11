const express = require('http');
const server = express.createServer();
const io = require('socket.io')(server);
io.on('connection',client=>{
    console.log(111);
    // client.emit('data', 'Hello WebSocket from 3001.');
    client.emit('data','啊 ----8081')
})
server.listen('8081',()=>{
  
    console.log('listen on 8081');
})