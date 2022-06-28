'use strict';

const Events = require('events');
const eventPool = new Events();  // singleton

// list of clients
function instructorsPhone(){
  console.log('sending message');
  // .emit args: event name, payload
  eventPool.emit('SEND_MESSAGE', {
    text: 'You\'ve got this?',
  });
}

function studentOnePhone(payload){
  console.log('student one received message', payload);
}

function studentTwoPhone(payload){
  console.log('student one also received message', payload);
}

eventPool.on('SEND_MESSAGE', studentOnePhone);
eventPool.on('SEND_MESSAGE', studentTwoPhone);

setInterval(() => {
  instructorsPhone();
}, 2000);

