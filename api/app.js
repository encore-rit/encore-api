import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import enrouten from 'express-enrouten';
import logger from 'morgan';
import cors from 'cors';

import { port } from '../config';
import routes from './routes';

export default express()
  .use(logger('dev'))
  .use(compression())
  .use(cors())
  .use(bodyParser.json())
  .use(enrouten(routes))
  .disable('x-powered-by')
  .listen(port, function(err) {
    if (err) throw err;
    console.info('Listening on port: ', port);
  });
