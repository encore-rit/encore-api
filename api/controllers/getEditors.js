import { User } from '../models/user';

export default function getPhoto(req, res) {
  return User.find({ state: 'READY' })
  .sort({ updatedAt: -1 })
  .then((u) => res.status(200).json(u));
}
