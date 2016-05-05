/*
 * User#create controller
 */

import { any, isNil, values } from 'ramda';

import { User } from '../../models/user';
import { publishTaker } from '../../services/queue';

export default function create(req, res) {
  const { username, artistKey, artist } = req.body;
  const required = { username, artistKey, artist };

  if (any(isNil)(values(required))) {
    return res.status(400).json(required);
  }

  return new User({ username, artistKey, artist })
  .save()
  .tap((user) => publishTaker({ username, artistKey, artist,
                              userId: user.id }))
  .tap((user) => console.log(user))
  .then((user) => res.status(201).json(user))
  // .catch((err) => res.status(500).json(err))
  ;
}
