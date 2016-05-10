import { User } from '../models/user';

export function addPhotos(userId, photoArray) {
  console.log('adding photos: ', userId, photoArray);

  return User.find({ _id: userId })
    .then(([u]) => {
      photoArray.forEach((link) => {
        u.photos.push(link);
      });
      return u.save();
    });
}
