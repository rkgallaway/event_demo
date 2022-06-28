'use strict';

const eventPool = require('./eventPool.js');
const eyeHandler = require('./brain/handleBrain.js');
const brainHandler = require('./eyes/handleEyes.js');
const pupilHandler = require('./pupils/handlePupils.js');

eventPool.on('SUNLIGHT', eyeHandler);
eventPool.on('BRIGHTNESS', brainHandler);
eventPool.on('DILATION', pupilHandler);

setInterval(() => {
  const brightness = Math.floor(Math.random() * 100);
  eventPool.emit('SUNLIGHT', { brightness });
}, 3000);
