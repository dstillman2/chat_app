import io from 'socket.io-client';

import addMessage from '../actions/messages';

const socket = io();

socket.on('agent message', (msg) => {
  const message = JSON.parse(msg);

  addMessage(message);
});
