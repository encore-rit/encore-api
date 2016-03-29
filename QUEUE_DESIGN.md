# Queue API design

Proposed solution: [kue](https://github.com/Automattic/kue) a Redis-backed queue from the company that maintains Redis.

Server:
```
function publishNextTaker(payload) {
  return queue.create('taker', {
     title: 'Taker',
     ts: Date.now(),
     ...payload
  })
  .priority('high')
  .attempts(3)
  .save();
}
```

Client:
```
function consumeNextTaker() {
  return queue.process('taker', (job, done) => {
    ...
    done(new Error('Some error'))
    ...
    done();
  })
}
```
