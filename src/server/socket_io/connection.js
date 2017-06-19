import io from '../config/socket.io.config';

function initializeSocketIOConnection() {
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('a user has disconnected');
    });
  });
}

export default initializeSocketIOConnection;
