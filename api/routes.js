import getArtists from './controllers/artists/index';
import createArtists from './controllers/artists/create';

import createUser from './controllers/users/create';
import addPhoto from './controllers/users/addPhoto';

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
