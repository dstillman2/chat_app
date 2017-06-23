import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';

import cors from './cors';

function middleware(app) {
  app.use('/static', express.static(path.join(__dirname, '../../static')));

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
}

export {
  cors,
};

export default middleware;
