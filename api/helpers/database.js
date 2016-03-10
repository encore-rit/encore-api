import mongoose from 'mongoose';
import Promise from 'bluebird';

import { mongoURL, mongoOpts } from '../../config';

export default () => {
  if (mongoose.connection.db) {
    return mongoose;
  }
  mongoose.Promise = Promise;
  mongoose.connect(mongoURL, mongoOpts);

  return new Promise((fulfill, reject) => {
    mongoose.connection.on('error', (err) => reject(err));
    mongoose.connection.on('open',  () => fulfill(mongoose));
  });
};
