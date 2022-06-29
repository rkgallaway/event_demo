'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002');

const handleMessage = require('./handleMessage')(socket);

socket.on('MESSAGE', handleMessage);
