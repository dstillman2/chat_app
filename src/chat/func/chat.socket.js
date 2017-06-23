import io from 'socket.io-client';

import { addMessage, fetchChatRoomId } from '../actions/messages';

const socketIO = (() => {
  let socket;
  let roomNum;

  const room = {
    subscribeToRoom(roomId, agentGroup) {
      socket.emit('join', {
        roomId,
        user: 'client',
        agentGroup,
      });
    },

    unsubscribeFromRoom(roomId) {
      socket.emit('leave', roomId);
    },

    listenToRoomMessages(dispatch) {
      socket.on('message', (data) => {
        dispatch(addMessage({
          id: Math.random().toString(),
          name: data.name,
          type: data.type,
          message: data.message,
        }));
      });
    },

    listenToRoomStatuses(dispatch) {
      socket.on('status', (data) => {
        // do something
      });
    },
  };

  return {
    initialize(dispatch, agentGroupId) {
      if (!socket) {
        dispatch(fetchChatRoomId({
          data: {
            agentGroupId,
          },

          onSuccess: (response) => {
            socket = io.connect('http://localhost:3000');

            room.subscribeToRoom(response.roomId);

            room.listenToRoomMessages(dispatch);
            room.listenToRoomStatuses(dispatch);

            roomNum = response.roomId;
          },

          onFailure: () => {
            // dispatch(addMessage({
            //   id: Math.random().toString(),
            //   type: 'error',
            //   message: 'Could not connect to agent',
            // }));
          },
        }));
      }
    },

    sendClientMessage(dispatch, message) {
      if (!socket) {
        dispatch(addMessage({
          id: Math.random().toString(),
          type: 'error',
          message: 'Connecting. Please wait.',
        }));

        return;
      }

      socket.emit('message', {
        roomId: roomNum,
        name: 'You',
        type: 'client',
        message,
      });
    },

    unsubscribe() {
      if (socket) {
        room.unsubscribeFromRoom({
          roomId: roomNum,
          user: 'client',
        });

        socket = null;
      }
    },
  };
})();

export default socketIO;
