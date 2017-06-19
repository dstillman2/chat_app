import express from 'express';

import { PORT } from './options';
import * as handlers from './handlers';
import * as middleware from './middleware';
import registerRoutes from './lib/registerRoutes';

const app = express();

app.use(middleware.cors());

const routes = [
  ['/chatbot-v.1.0-:identifier.js', handlers.embedHandler],
  ['/config-:identifier.js', handlers.configHandler],
  ['/theme/:themeName.css', handlers.themeHandler],
];

registerRoutes(app, routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
