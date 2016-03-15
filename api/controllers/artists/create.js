/*
 * Artist#create controller
 */

import { any, isNil, values } from 'ramda';

import { Artist } from '../../models/artist';

export default function createArtist(req, res) {
  const { name, dob, dod, bio, sigUrl, photoUrls, artifacts } = req.body;
  const required = { name, dob, bio, sigUrl, photoUrls };

  if (any(isNil)(values(required))) {
    return res.status(400).json(required);
  }

  return new Artist({name, dob, dod, bio, sigUrl, photoUrls, artifacts})
  .save()
  .then((artist) => res.status(201).json(artist))
  .catch((err) => res.status(500).json(err));
}
