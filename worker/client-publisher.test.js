import { range } from 'ramda';
import { publishTaker } from './queue';

range(0, 20).forEach((index) => {
  publishTaker({username: `bob-${index}`, artist: 'Johnny Rotten'});
});
