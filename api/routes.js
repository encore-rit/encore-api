import createUser from './controllers/users/create';
import getUser from './controllers/users/getUser';
import addPhoto from './controllers/users/addPhoto';
import addEditedPhoto from './controllers/users/addEditedPhoto';

import setState from './controllers/users/setState';
import getPhotos from './controllers/users/getPhotos';
import getEditors from './controllers/users/getEditors';

export default {
  routes: [
    {
      path: '/users',
      method: 'POST',
      handler: createUser,
    },
    {
      path: '/users/:id',
      method: 'GET',
      handler: getUser,
    },
    {
      path: '/users/:id/editedPhoto',
      method: 'POST',
      handler: addEditedPhoto,
    },
    {
      path: '/users/:id/photos',
      method: 'POST',
      handler: addPhoto,
    },
    {
      path: '/users/:id/setState/:state',
      method: 'POST',
      handler: setState,
    },
    {
      path: '/editors',
      method: 'GET',
      handler: getEditors,
    },
    {
      path: '/photos/:number',
      method: 'GET',
      handler: getPhotos,
    },
  ],
};
