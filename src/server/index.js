import path from 'path';

import express from 'express';

import { app, http } from './config/app.config';
import { PORT } from './options';
import * as handlers from './handlers';
import * as middleware from './middleware';
import registerRoutes from './lib/registerRoutes';
import initializeSocketIOConnection from './socket_io/connection';

app.use('/static', express.static(path.join(__dirname, '../static')));
app.use(middleware.cors());

const routes = [
  ['/chatbot-v.1.0-:identifier.js', handlers.embedHandler],
  ['/config-:identifier.js', handlers.configHandler],
  ['/theme/:themeName.css', handlers.themeHandler],
  ['/', handlers.mainHandler],
];

registerRoutes(app, routes);

initializeSocketIOConnection();

http.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
