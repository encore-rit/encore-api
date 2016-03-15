import kue from 'kue';
import { isNil } from 'ramda';

const queue = kue.createQueue();

export const publishTaker = (payload) => {
  console.info(`Publishing:`);
  console.info(payload);

  return queue.create('taker', {
    title: 'Taker',
    ...payload,
  })
  .priority('high')
  // @TODO for when client connections die?
  // For now we can restart jobs from the UI
  .ttl(1000000)
  .attempts(3)
  .save();
};

export const consumeTaker = () => {
  console.log('Consuming...');

  return queue.process('taker', (job, done) => {
    console.info(`Working on:`);
    console.info(job.id, job.data);

    if (isNil(job)) {
      done(new Error('Job was nil'));
    }

    // Represents user using the next state of the app
    // Would probably be based off of some internal even emitter
    // So externally `eventBus.emit('DONE', true)`
    // And in here `eventBus.on('DONE', () => done())`
    setTimeout(done, 30000);
  });
};
