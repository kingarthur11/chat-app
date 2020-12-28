var socket = io('http://localhost');
var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    button = document.getElementById('send'),
    output = document.getElementById('output');

button.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.nodeValue,
        handle: handle.value
    });
});

socket.on('message', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
})