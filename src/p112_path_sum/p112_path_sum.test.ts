import {describe, expect, test} from '@jest/globals';
import { vecToBinaryTree, hasPathSum } from './p112_path_sum';

describe('p112_path_sum', () => {

  test('utils', () => {
    let input = [3,9,20,null,null,15,7]
    let tree = vecToBinaryTree(input)
    // console.log(tree)
  });

  test('t1', () => {
    let input = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    let tree = vecToBinaryTree(input)
    expect(hasPathSum(tree, 22)).toBe(true)
  });

});
