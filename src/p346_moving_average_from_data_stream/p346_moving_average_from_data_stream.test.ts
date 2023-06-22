import {describe, expect, test} from '@jest/globals';
import { MovingAverage } from './p346_moving_average_from_data_stream';

describe('p346_moving_average_from_data_stream', () => {

  test('t1', () => {
    let obj = new MovingAverage(3)
    let inputs = [[1], [10], [3], [5]]
    let answers = [1.0, 5.5, 4.66667, 6.0]
    for (let i = 0; i < inputs.length; i++) {
      expect(obj.next(inputs[i][0])).toBe(answers[i])
    }
  });

});
