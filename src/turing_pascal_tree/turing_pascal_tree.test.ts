import {describe, expect, test} from '@jest/globals';
import { row } from './turing_pascal_tree';

describe('turing_pascal_tree', () => {

  test('t1', () => {
    expect(row(0)).toStrictEqual([1])
  })

  test('t2', () => {
    expect(row(1)).toStrictEqual([1,1])
  })

  test('t3', () => {
    expect(row(3)).toStrictEqual([1,3,3,1])
  })

});
