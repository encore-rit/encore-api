import fs from 'fs';
import express from 'express';
import socketIO from 'socket.io';
import Mustache from 'mustache';
import { Server } from 'http';

import { consumeTaker } from '../queue';

const PORT = process.env.PORT || process.exit(1);
const view = fs.readFileSync(`${__dirname}/index.html`, 'utf8');
const index = Mustache.render(view, {port: PORT});

const app = express()
  .get('/', (req, res) => (
    res.status(200).type('html').send(index)
  ));

const server = Server(app);
const io = socketIO(server);
server.listen(process.env.PORT);

io.on('connection', function(socket) {
  socket.on('CONSUME_TAKER', function(data) {
    console.log(data);
    consumeTaker();
  });
});
