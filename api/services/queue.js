import kue from 'kue';
import { isNil } from 'ramda';

const queue = kue.createQueue({
  redis: process.env.REDISCLOUD_URL || 'redis://127.0.0.1:6379',
});

export const publishTaker = (payload) => {
  console.info(`Publishing:`);
  console.info(payload);

  return queue.create('taker', {
    title: 'Taker',
    payload,
  })
  .priority('high')
  // @TODO for when client connections die?
  // For now we can restart jobs from the UI
  // .ttl(1000000)
  // .attempts(3)
  .save();
};

export const consumeTaker = (cb) => {
  console.info('Consuming...');

  queue.process('taker', (job, done) => {
    console.info(`Working on:`);
    console.info(job.id, job.data);

    if (isNil(job)) {
      done(new Error('Job was nil'));
      cb(new Error('Job was nil'));
    }

    cb({ job, done });
  });
};

export const getActiveTakers = (jobType) =>
  new Promise((resolve, reject) => {
    kue.Job.rangeByType(jobType, 'active', 0, 9, 'asc', (err, jobs) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(jobs);
      }
    });
  });
