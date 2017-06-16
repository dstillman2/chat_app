import express from 'express';

import { PORT } from './options';
import * as handlers from './handlers';
import * as middleware from './middleware';
import registerRoutes from './lib/registerRoutes';

const app = express();

app.use(middleware.cors());

const routes = [
  ['/embed', handlers.configuration],
  ['/:identifier.js', handlers.compileJs],
];

registerRoutes(app, routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
