import {describe, expect, test} from '@jest/globals';
import { longestSubarray } from './p1438_longest_continuous_subarray_with_absolute_diff_less_than_or_equal_to_limit';

describe('p1438_longest_continuous_subarray_with_absolute_diff_less_than_or_equal_to_limit', () => {

  test('t1', () => {
    let result = longestSubarray([8,2,4,7], 4)
    expect(result).toBe(2)
  });

  test('t2', () => {
    let result = longestSubarray([10,1,2,4,7,2], 5)
    expect(result).toBe(4)
  });

  test('t3', () => {
    let result = longestSubarray([4,2,2,2,4,4,2,2], 0)
    expect(result).toBe(3)
  });

});
