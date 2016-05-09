import { User } from '../models/user';
import { chain, prop, concat } from 'ramda';

export default function renderAllPhotos(req, res) {
  return User.find({ photos: { $ne: null } })
  .then((users) => {
    const urls = concat(
      chain(prop('editedPhoto'), users),
      chain(prop('photos'), users));
    return res.render('images', { images: urls });
  });
}
