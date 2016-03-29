import { curry } from 'ramda';
import Promise from 'bluebird';

import { artists } from './data';
import { Artist } from '../api/models/Artist';

const createOrMerge = curry((schema, query, objectOrUpdates) => {
  return schema.findOneAndUpdate(
    query,
    objectOrUpdates,
    {upsert: true, runValidators: true},
  );
});

const createArtist = createOrMerge(Artist);

const createArtists = (artistList) => (
  Promise.map(
    artistList,
    (a) => createArtist({name: a.name}, a)
      .then((doc) => {
        console.log('Created or merged:');
        console.log(doc);
        return doc;
      })
      .catch((err) => {
        console.log(err);
      })
  )
);


createArtists(artists)
.then(process.exit.bind(this, 0), process.exit.bind(this, 1));
