import { setState } from '../services/state';
import { addPhotos } from '../services/photo';

/**
 * {
 *  id,
 *  state: ['TAKING', 'READY', 'FINISHED', 'APPROVED']
 * }
 */
export default function readyTaker(req, res) {
  return setState(req.params.id, 'READY')
  .then((u) => addPhotos(req.params.id, req.body.photos).then(() => u))
  .then((u) => res.status(200).json(u));
}

