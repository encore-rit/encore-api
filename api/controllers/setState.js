import { setState as stateSetter } from '../services/state';

/**
 * {
 *  id,
 *  state: ['TAKING', 'READY', 'FINISHED', 'APPROVED']
 * }
 */
export default function setState(req, res) {
  return stateSetter(req.params.id, req.params.state)
  .then((u) => res.status(200).json(u));
}
