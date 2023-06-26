import {describe, expect, test} from '@jest/globals';
import { vecToBinaryTree, maxDepth } from './p104_maximum_depth_of_binary_tree';

describe('p104_maximum_depth_of_binary_tree', () => {

  test('utils', () => {
    let input = [3,9,20,null,null,15,7]
    let tree = vecToBinaryTree(input)
    // console.log(tree)
  });

  test('t1', () => {
    let input = [3,9,20,null,null,15,7]
    let tree = vecToBinaryTree(input)
    expect(maxDepth(tree)).toBe(3)
  });

  test('t2', () => {
    let input = [1,null,2]
    let tree = vecToBinaryTree(input)
    expect(maxDepth(tree)).toBe(2)
  });

});
