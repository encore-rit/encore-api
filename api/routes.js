import getArtists from './controllers/artists/index';

import createUser from './controllers/users/create';
import addPhoto from './controllers/users/addPhoto';

import publishTaker from './controllers/queue/publishTaker';
import publishEditor from './controllers/queue/publishEditor';

import consumeTaker from './controllers/queue/consumeTaker';
import consumeEditor from './controllers/queue/consumeEditor';

import share from './controllers/share/index';

export default {
  routes: [
    {
      path: '/artists',
      method: 'GET',
      handler: getArtists,
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
      path: '/publish/taker',
      method: 'POST',
      handler: publishTaker,
    },
    {
      path: '/publish/editor',
      method: 'POST',
      handler: publishEditor,
    },
    {
      path: '/consume/taker',
      method: 'POST',
      handler: consumeTaker,
    },
    {
      path: '/consume/editor',
      method: 'POST',
      handler: consumeEditor,
    },
    {
      path: '/share/:method',
      method: 'POST',
      handler: share,
    },
  ],
};
