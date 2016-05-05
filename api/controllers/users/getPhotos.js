import { map, prop } from 'ramda';
import { User } from '../../models/user';

export default function getPhoto(req, res) {
  return User.find({ state: 'APPROVED' })
  .limit(req.params.number)
  .sort({ updatedAt: -1 })
  .then(map(prop('editedPhoto')))
  .then((u) => res.status(200).json(u));
}

