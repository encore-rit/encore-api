import { User } from '../models/user';
import { head, isNil } from 'ramda';

export function anyTaking() {
  return User.find({ state: 'TAKING' })
  .sort({ createdAt: 1 })
  .limit(1)
  .then((x) => { console.log('from anyTaking', x); return x; })
  .then(head);
}

export function takeWaiting(taker) {
  console.log('takeWaiting', taker);

  if (isNil(taker)) {
    return User.find({ state: 'WAITING' })
    .sort({ createdAt: 1 })
    .limit(1)
    .then((x) => { console.log(x); return x; })
    .then(head);
  }
  else {
    return taker;
  }
}
