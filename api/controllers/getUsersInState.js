import { toUpper } from 'ramda';

import { User } from '../models/user';

export default function getPhoto(req, res) {
  return User.find({ state: toUpper(req.params.state) })
  .sort({ createdAt: 1 })
  .then((u) => res.status(200).json(u));
}

