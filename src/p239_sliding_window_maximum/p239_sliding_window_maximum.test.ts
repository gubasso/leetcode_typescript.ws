import {describe, expect, test} from '@jest/globals';
import { maxSlidingWindow } from './p239_sliding_window_maximum';

describe('p239_sliding_window_maximum', () => {

  test('t1', () => {
    let result = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
    expect(result).toStrictEqual([3,3,5,5,6,7])
  });

  test('t2', () => {
    let result = maxSlidingWindow([1], 1)
    expect(result).toStrictEqual([1])
  });

  test('t3', () => {
    let result = maxSlidingWindow([7,2,4], 2)
    expect(result).toStrictEqual([7,4])
  });

});
