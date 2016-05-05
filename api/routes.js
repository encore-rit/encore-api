import getArtists from './controllers/artists/index';
import createArtists from './controllers/artists/create';

import createUser from './controllers/users/create';
import getUser from './controllers/users/getUser';
import addPhoto from './controllers/users/addPhoto';
import addEditedPhoto from './controllers/users/addEditedPhoto';

import publishEditor from './controllers/queue/publishEditor';

import share from './controllers/share/index';

export default {
  routes: [
    {
      path: '/artists',
      method: 'GET',
      handler: getArtists,
    },
    {
      path: '/artists',
      method: 'POST',
      handler: createArtists,
    },
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
      path: '/publish/editor',
      method: 'POST',
      handler: publishEditor,
    },
    {
      path: '/share/:method',
      method: 'POST',
      handler: share,
    },
  ],
};
