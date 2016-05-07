import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import enrouten from 'express-enrouten';
import logger from 'morgan';
import cors from 'cors';
import socketIO from 'socket.io';
import { isNil } from 'ramda';

import { anyTaking, takeWaiting } from './services/taker';
import { setState } from './services/state';
import { port } from '../config';
import routes from './routes';
import emitter from './emitter';

export const app = express()
  .use(logger('dev'))
  .use(compression())
  .use(cors())
  .use(bodyParser.json({ limit: '10mb' }))
  .use(enrouten(routes))
  .disable('x-powered-by')
  .listen(port, (err) => {
    if (err) throw err;
    console.info(`Listening on port: ${port}`);
  });

export const io = socketIO(app);

/**
 * client -> TAKE_TAKER
 *           SEND_TAKER <- server NEW_USER <- emitter
 * client -> TOOK_TAKER
 * client -> READY_TAKER
 *           EDITORS <- server
 */
io.on('connection', (socket) => {

  socket.on('TAKE_TAKER', () => {
    console.log('from client received TAKE_TAKER');

    anyTaking()
    .then(takeWaiting)
    .then((taker) => {
      if (isNil(taker)) {
        emitter.once('NEW_USER', (user) => {
          socket.emit('SEND_TAKER', user);
        });
      }
      else {
        socket.emit('SEND_TAKER', taker);
      }
    });
  });

  socket.on('TOOK_TAKER', (user) => {
    console.log('TOOK_TAKER', user);
    setState(user._id, 'TAKING');
  });
});
