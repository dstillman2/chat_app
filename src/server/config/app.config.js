import express from 'express';

const app = express();
const http = require('http').Server(app);

export { app, http };
