import { User } from '../models/user';

export default function addPhoto(req, res) {
  return User.find({ _id: req.params.id })
  .then(([u]) => {
    u.photos.push(req.body.link);
    return u.save();
  })
  .then((u) => res.status(200).json(u));
}
