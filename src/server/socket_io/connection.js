import io from '../config/socket.io.config';

io.on('connection', (socket) => {
  socket.on('join', (data) => {
    io.sockets.in(data.roomId).emit('status', {
      type: 'join',
      user: data.user,
    });

    socket.join(data.roomId);

    // add new user to redis list
  });

  socket.on('leave', (data) => {
    io.sockets.in(data.roomId).emit('status', {
      type: 'leave',
      user: data.user,
    });

    socket.leave(data.roomId);
  });

  socket.on('message', (data) => {
    // broadcast message to everyone subscribed to room
    io.sockets.in(data.roomId).emit('message', data);
  });
});
