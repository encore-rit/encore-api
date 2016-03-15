/*
 * User#create controller
 */

import { any, isNil, values } from 'ramda';

import { User } from '../../models/user';

export default function create(req, res) {
  const { username, artist } = req.body;
  const required = { username, artist };

  if (any(isNil)(values(required))) {
    return res.status(400).json(required);
  }

  return new User({username, artist})
  .save()
  .then((user) => User.populate(user, 'artist'))
  // @TODO hookup event system with dispatcher to fire a publish queue to RabbitMQ
  // .then(publishNextTaker)
  .tap(console.log)
  .tap()
  .then((user) => res.status(201).json(user))
  .catch((err) => res.status(500).json(err));
}
