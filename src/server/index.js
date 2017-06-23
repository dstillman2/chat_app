import './socket_io/connection';
import { app, http } from './config/app.config';
import { PORT } from './options';
import * as handlers from './handlers';
import middleware from './middleware';
import registerRoutes from './lib/registerRoutes';

const routes = [
  ['/chatbot-v.1.0-:identifier.js', handlers.embedHandler],
  ['/config-:identifier.js', handlers.configHandler],
  ['/theme/:themeName.css', handlers.themeHandler],
  ['/chat/connect', handlers.chatRoomHandler],
  ['/', handlers.mainHandler],
];

middleware(app);
registerRoutes(app, routes);

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
