import { toUpper } from 'ramda';

import { User } from '../models/user';
import { io } from '../app';

export function setState(id, state) {
  console.log(`setting state, user: ${id} to state: ${state}`);

  return User.find({ _id: id })
  .then(([u]) => {
    u.state = toUpper(state);
    return u.save();
  })
  .tap(() => {
    if (toUpper(state) === 'READY') {
      console.log('sending ready event');

      return User.find({ state: 'READY' })
        .sort({ createdAt: 1 })
        .then((editors) => {
          io.emit('EDITORS', editors);
        });
    }
  });
}
