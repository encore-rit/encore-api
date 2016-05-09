import createUser from './controllers/create';
import getUser from './controllers/getUser';
import addPhoto from './controllers/addPhoto';
import addEditedPhoto from './controllers/addEditedPhoto';

import getUsersInState from './controllers/getUsersInState';
import setState from './controllers/setState';
import readyTaker from './controllers/readyTaker';
import getPhotos from './controllers/getPhotos';
import getFinishedPhotos from './controllers/getFinishedPhotos';
import getEditors from './controllers/getEditors';
import getAllPhotos from './controllers/renderAllPhotos';

export default {
  routes: [
    {
      path: '/users',
      method: 'POST',
      handler: createUser,
    },
    {
      path: '/photos/all',
      method: 'GET',
      handler: getAllPhotos,
    },
    {
      path: '/users/:state',
      method: 'GET',
      handler: getUsersInState,
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
      path: '/users/:id/ready',
      method: 'POST',
      handler: readyTaker,
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
      path: '/approved/photos/:number',
      method: 'GET',
      handler: getPhotos,
    },
    {
      path: '/finished/photos/:number',
      method: 'GET',
      handler: getFinishedPhotos,
    },
  ],
};
