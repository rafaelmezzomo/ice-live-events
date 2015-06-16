var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

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

http.listen(3000, function(){
  console.log('listening on *:3000');
});
