import {describe, expect, test} from '@jest/globals';
import {listToVec, swapPairs, vecToList} from './p24_swap_nodes_in_pairs';


describe('p24_swap_nodes_in_pairs', () => {

  test('utils', () => {
    const list = vecToList([1,2,3,4])
    const vec = listToVec(list)
    expect(vec).toStrictEqual([1,2,3,4]);
  });

  test('t1', () => {
    const list = vecToList([1,2,3,4])
    const result = swapPairs(list)
    const vec = listToVec(result)
    expect(vec).toStrictEqual([2,1,4,3]);
  });

  test('t2', () => {
    const list = vecToList([1,2,3,4,5])
    const result = swapPairs(list)
    const vec = listToVec(result)
    expect(vec).toStrictEqual([2,1,4,3,5]);
  });

  test('t3', () => {
    const list = vecToList([])
    const result = swapPairs(list)
    const vec = listToVec(result)
    expect(vec).toStrictEqual([]);
  });

  test('t4', () => {
    const list = vecToList([1])
    const result = swapPairs(list)
    const vec = listToVec(result)
    expect(vec).toStrictEqual([1]);
  });

});
