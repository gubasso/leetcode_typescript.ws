import {describe, expect, test} from '@jest/globals';
import {vecToList, pairSum} from './p2130_maximum_twin_sum_of_a_linked_list';

describe('p2130_maximum_twin_sum_of_a_linked_list', () => {

  test('utils', () => {
    const list = vecToList([5,4,2,1])
    // console.log(list)
  });

  test('t1', () => {
    const list = vecToList([5,4,2,1])
    const result = pairSum(list)
    expect(result).toBe(6)
  });

  test('t2', () => {
    const list = vecToList([4,2,2,3])
    const result = pairSum(list)
    expect(result).toBe(7)
  });

  test('t3', () => {
    const list = vecToList([1,100000])
    const result = pairSum(list)
    expect(result).toBe(100001)
  });

  test('t4', () => {
    const list = vecToList([47,22,81,46,94,95,90,22,55,91,6,83,49,65,10,32,41,26,83,99,14,85,42,99,89,69,30,92,32,74,9,81,5,9])
    const result = pairSum(list)
    expect(result).toBe(182)
  });

  test('t5', () => {
    const list = vecToList([1,2,3,4,6,8])
    const result = pairSum(list)
    expect(result).toBe(9)
  });

});
