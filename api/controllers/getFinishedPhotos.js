import { map, prop } from 'ramda';
import { User } from '../models/user';

export default function getFinishedPhotos(req, res) {
  return User.find({ state: 'FINISHED' })
  .limit(req.params.number)
  .sort({ createdAt: 1 })
  .then(map((x) => {
    return { editedPhoto: x.editedPhoto, memory: x.memory };
  }))
  .then((u) => res.status(200).json(u));
}
