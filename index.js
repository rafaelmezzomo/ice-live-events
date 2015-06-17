var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
app.use(express.static(__dirname + "/"))


io.on('connection', function(socket){
  socket.on('iceEvent', function(msg){
    newEvent = {
      msg: msg,
      eventType: 'userAction',
      entityName: 'a1',
      entityType: 'warning',
      timestamp: new Date(),
      id: parseInt(Math.random()*10000)
     };
    io.emit('iceEvent', newEvent);
  });
});

http.listen(port, function(){
  console.log('listening on *:3000');
});
