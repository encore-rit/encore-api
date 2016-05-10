import { User } from '../models/user';

export default function getUser(req, res) {
  return User.find({ _id: req.params.id })
  .then(([u]) => res.status(200).json(u));
}

