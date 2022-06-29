'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3002/caps');

const celestialBody = 'sun';

socket.emit('join', celestialBody);

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  console.log('Weather:  brightness established');


  socket.emit('SUNLIGHT', { brightness });
}, 2000);
