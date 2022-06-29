'use strict';


const Chance = require('chance');
const chance = new Chance();

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002'); // this only acknowledges a connection, no subscriptions have occurred yet.

const handleReceived = require('./handleReceived');
const createSendMessage = require('./sendMessage'); // import our curried function

const sendMessage = createSendMessage(socket);

socket.on('RECEIVED', handleReceived);

setInterval(() => {
  sendMessage(`Hi ${chance.first()}`);
  
}, 3000);
