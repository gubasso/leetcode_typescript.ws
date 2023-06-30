import {describe, expect, test} from '@jest/globals';
import {  vecToBinaryTreeIter, vecToBinaryTree, hasPathSum } from './p112_path_sum';

describe('p112_path_sum', () => {

  test('utils', () => {
    let input = [3,9,20,null,null,15,7]
    let tree = vecToBinaryTree(input)
    let tree_iter = vecToBinaryTreeIter(input)
    let input2 = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    let tree2 = vecToBinaryTree(input2)
    let tree2_iter = vecToBinaryTreeIter(input2)
  });

  test('t1', () => {
    let input = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    let tree = vecToBinaryTree(input)
    expect(hasPathSum(tree, 22)).toBe(true)
  });

  test('t2', () => {
    let input = [1,2]
    let tree = vecToBinaryTree(input)
    expect(hasPathSum(tree, 1)).toBe(false)
  });

});
