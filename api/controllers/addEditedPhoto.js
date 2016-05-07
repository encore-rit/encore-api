import { User } from '../models/user';
import imgur from 'imgur';
imgur.setClientId('665e91941704f23');

export default function addEditedPhoto(req, res) {
  return User.find({ _id: req.params.id })
  .then(([u]) => {
    u.memory = req.body.memory;

    if (req.body.bigScreen) {
      u.state = 'APPROVED';
    }
    else {
      u.state = 'FINISHED';
    }

    return imgur.uploadBase64(req.body.imageData.split(',')[1])
    .then((res) => {
      u.editedPhoto = res.data.link;
      return u.save();
    });
  })
  .then((u) => res.status(200).json(u));
}

