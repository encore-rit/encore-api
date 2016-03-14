/*
 * Get artists
 */

import { Artist } from '../../models/artist';

export default function getArtists(req, res) {
  return Artist.find({})
  .then((artists) => {
    console.log(artists);
    return res.status(201).json(artists);
  })
  .catch((err) => {
    console.error(err);
    return res.status(500).json(err);
  });
}

