/*
 * User#create controller
 */

import { any, isNil, values } from 'ramda'

import { User } from '../../models/user'

export default function create(req, res) {
  const { name, artist } = req.body;
  const required = { name, artist }

  console.log(required)
  if (any(isNil)(values(required))) {
    return res.status(400).json(required)
  }

  return new User({name, artist})
  .save()
  .then((user) => res.status(201).json(user))
  .catch((err) => res.status(500).json(err))
  // @TODO hookup event system with dispatcher to fire a publish queue to RabbitMQ
  // .then(publishNextTaker)
}
