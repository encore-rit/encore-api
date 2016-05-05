import { toUpper } from 'ramda';

import { User } from '../../models/user';

/**
 * {
 *  id,
 *  state: ['TAKING', 'READY', 'FINISHED', 'APPROVED']
 * }
 */
export default function setState(req, res) {
  return User.find({ _id: req.params.id })
  .then(([u]) => {
    u.state = toUpper(req.params.state);
    return u.save();
  })
  .then((u) => res.status(200).json(u));
}
