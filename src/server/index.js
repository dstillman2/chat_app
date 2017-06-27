import './socket_io/connection';
import { app, http, createRouter } from './config/app.config';
import { PORT } from './options';
import * as handlers from './handlers';
import middleware from './middleware';
import registerRoutes from './lib/registerRoutes';

middleware(app);

const chatRouter = createRouter();

const chatRoutes = [
  ['/chatbot-v.1.0-:identifier.js', handlers.embedHandler],
  ['/:identifier.js', handlers.configHandler],
  ['/theme/:themeName.css', handlers.themeHandler],
  ['/chat/connect', handlers.chatRoomHandler],
  ['/', handlers.mainHandler],
];

registerRoutes(chatRouter, chatRoutes);

app.use('/', chatRouter);

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
