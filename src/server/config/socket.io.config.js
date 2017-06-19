import socket from 'socket.io';

import { http } from './app.config';

const io = socket(http);

export default io;
