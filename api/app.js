import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import enrouten from 'express-enrouten';
import logger from 'morgan';
import cors from 'cors';
import socketIO from 'socket.io';

import { port } from '../config';
import { consumeTaker } from './services/queue';
import routes from './routes';

const app = express()
  .use(logger('dev'))
  .use(compression())
  .use(cors())
  .use(bodyParser.json())
  .use(enrouten(routes))
  .disable('x-powered-by')
  .listen(port, (err) => {
    if (err) throw err;
    console.info('Listening on port: ', port);
  });

// const server = Server(app);
const io = socketIO(app);

io.on('connection', (socket) => {
  socket.on('CONSUME_TAKER', () => {
    console.log('CONSUME_TAKER');

    consumeTaker(({ job, done }) => {
      console.log('emitted CONSUME_TAKER_JOB', job.data);
      socket.emit('CONSUME_TAKER_JOB', job);

      socket.on('CONSUMED_TAKER', function () {
        console.log('CONSUMED_TAKER');
        done();
      });
    });
  });
});
