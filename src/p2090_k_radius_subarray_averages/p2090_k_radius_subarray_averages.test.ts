import {describe, expect, test} from '@jest/globals';
import {getAverages} from './p2090_k_radius_subarray_averages';

describe('p2090_k_radius_subarray_averages', () => {

  test('t1', () => {
    const result = getAverages([7,4,3,9,1,8,5,2,6], 3)
    expect(result).toStrictEqual([-1,-1,-1,5,4,4,-1,-1,-1]);
  });

  test('t2', () => {
    const result = getAverages([100000], 0)
    expect(result).toStrictEqual([100000]);
  });

  test('t3', () => {
    const result = getAverages([8], 100000)
    expect(result).toStrictEqual([-1]);
  });

});
