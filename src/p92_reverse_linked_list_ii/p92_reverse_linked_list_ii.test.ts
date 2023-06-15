import {describe, expect, test} from '@jest/globals';
import {listToVec, reverseBetween, vecToList} from './p92_reverse_linked_list_ii';

describe('p92_reverse_linked_list_ii', () => {

  test('utils', () => {
    const list = vecToList([1,2,3,4])
    const vec = listToVec(list)
    expect(vec).toStrictEqual([1,2,3,4]);
  });

  test('t1', () => {
    const list = vecToList([1,2,3,4,5])
    const result = reverseBetween(list, 2, 4)
    const vec = listToVec(result)
    expect(vec).toStrictEqual([1,4,3,2,5]);
  });

  test('t2', () => {
    const list = vecToList([5])
    const result = reverseBetween(list, 1, 1)
    const vec = listToVec(result)
    expect(vec).toStrictEqual([5]);
  });

});
