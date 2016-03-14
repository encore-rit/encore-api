import mongoose from 'mongoose';
import Promise from 'bluebird';

import { mongoURL, mongoOpts } from '../../config';

mongoose.Promise = Promise;
export default mongoose.connect(mongoURL, mongoOpts);
