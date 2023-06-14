import {describe, expect, test} from '@jest/globals';
import {vecToList, listToVec, reverseList} from './p206_reverse_linked_list';

describe('p206_reverse_linked_list', () => {

  test('utils', () => {
    const list = vecToList([1,2,3,4,5])
    const vec = listToVec(list)
    // console.log(list)
    // console.log(vec)
  });

  test('t1', () => {
    const list = vecToList([1,2,3,4,5])
    const result = reverseList(list)
    const vec = listToVec(result)
    expect(vec).toEqual([5,4,3,2,1])
  });

  test('t2', () => {
    const list = vecToList([1,2])
    const result = reverseList(list)
    const vec = listToVec(result)
    expect(vec).toEqual([2,1])
  });

  test('t3', () => {
    const list = vecToList([])
    const result = reverseList(list)
    const vec = listToVec(result)
    expect(vec).toEqual([])
  });

});
