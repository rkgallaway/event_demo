'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

// instance of a listening server listening at: http://localhost:3000/
const server = new Server(PORT);

// Creates a `namespace` off of our server.  
// same URL just add the endpoint: http://localhost:3000/caps
const caps = server.of('/caps');

// stateful communication: there are socket objects on the server, as well as socket objects on the client.
server.on('connection',(socket) => {
  console.log('Socket connected to Event Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event ', payload);
    // socket.emit('MESSAGE', payload); // send this to the same socket that emitted
    // server.emit('MESSAGE', payload); // to all connected sockets, send the payload.
    socket.broadcast.emit('MESSAGE', payload); // send to all other sockets, besides the sender.
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Server RECEIVED event ', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });
});

caps.on('connection', (socket) => {
  console.log('Connected to CAPS namespace', socket.id);

  socket.on('join', room => {
    console.log(`you've joined the ${room} room`);
    socket.join(room);
  });

  socket.on('SUNLIGHT', (payload) => {
    logEvent('SUNLIGHT', payload);
    caps.emit('SUNLIGHT', payload);
  });

});

function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT', {event, time, payload});
}

