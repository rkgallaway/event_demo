'use strict';

const eventPool = require('../eventPool.js');

module.exports = (payload) => {
  console.log(`Eyes:', 'We see brightness of ${payload.brightness}`);
  eventPool.emit('BRIGHTNESS', payload);
};
