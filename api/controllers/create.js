/*
 * User#create controller
 */

import { any, isNil, values } from 'ramda';

import { User } from '../models/user';
import emitter from '../emitter';

export default function create(req, res) {
  const { username, artistKey, artist } = req.body;
  const required = { username, artistKey, artist };

  if (any(isNil)(values(required))) {
    return res.status(400).json(required);
  }

  return new User({ username, artistKey, artist })
  .save()
  .tap((user) => emitter.emit('NEW_USER', user))
  .then((user) => res.status(201).json(user))
  // .catch((err) => res.status(500).json(err))
  ;
}
