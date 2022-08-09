// //socket.io를 사용한 소켓통신
// const express = require('express');
// const app = express();
// const http = require("http").createServer(app);
// //웹 소켓을 사용하는 코드 http,{}안에 여러 설정들을 할 수 있는데 현재는 cors에 대해 모두 허용하는 코드이다.
// const io = require('socket.io')(http,{cors:{origin:"*"}});
// const port = 9999;

// http.listen(port,()=>{
//   logger.error("서버 접속 성공");
//   console.log("start server");
// });
// //Socket.emit("소켓명","보낼 데이터");로 데이터를 보내면
// //Socket.on("소켓명",function(data));//형식으로 받는 단순한 구조

// var socket = io.connect(url+":"+port);
// socket.on('msg',function(data){
//   console.log(data);
// });
var net = require('net');
var server = net.createServer(function(client) {
  console.log('Client connection: ');
  console.log('   local = %s:%s', client.localAddress, client.localPort);
  console.log('   remote = %s:%s', client.remoteAddress, client.remotePort);
  client.setTimeout(500);
  client.setEncoding('utf8');
  client.on('data', function(data) {
    console.log('Received data from client on port %d: %s',
                client.remotePort, data.toString());
    console.log('  Bytes received: ' + client.bytesRead);
    writeData(client, 'Sending: ' + data.toString());
    console.log('  Bytes sent: ' + client.bytesWritten);
  });
  client.on('end', function() {
    console.log('Client disconnected');
    server.getConnections(function(err, count){
      console.log('Remaining Connections: ' + count);
    });
  });
  client.on('error', function(err) {
    console.log('Socket Error: ', JSON.stringify(err));
  });
  client.on('timeout', function() {
    console.log('Socket Timed out');
  });
});
server.listen(9999, function() {
  console.log('Server listening: ' + JSON.stringify(server.address()));
  server.on('close', function(){
    console.log('Server Terminated');
  });
  server.on('error', function(err){
    console.log('Server Error: ', JSON.stringify(err));
  });
});
function writeData(socket, data){
  var success = !socket.write(data);
  if (!success){
    (function(socket, data){
      socket.once('drain', function(){
        writeData(socket, data);
      });
    })(socket, data);
  }
}