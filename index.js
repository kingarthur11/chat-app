var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat', msg => {
        io.sockets.emit('message', msg)
    }) 
    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
    }) 
    socket.on("disconnect", () => {
        io.emit("message", "i was the one that disconnected")
    })

       
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});