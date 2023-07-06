import {describe, expect, test} from '@jest/globals';
import { goodNodes, goodNodeIter, vecToBinaryTreeIter, vecToBinaryTree, } from './p1448_count_good_nodes_in_binary_tree';

describe('p1448_count_good_nodes_in_binary_tree', () => {

  test('utils', () => {
    let input = [3,1,4,3,null,1,5]
    let input2 = [3,3,null,4,2]
    let tree = vecToBinaryTree(input)
    let tree2 = vecToBinaryTree(input2)
    let treeIter = vecToBinaryTreeIter(input)
    let tree2Iter = vecToBinaryTreeIter(input2)
    // console.log(tree2)
    // console.log(tree2Iter)
  });

  test('t1', () => {
    let input = [3,1,4,3,null,1,5]
    let tree = vecToBinaryTree(input)
    expect(goodNodes(tree)).toBe(4)
  });

  test('t2', () => {
    let input = [3,3,null,4,2]
    let tree = vecToBinaryTree(input)
    expect(goodNodes(tree)).toBe(3)
  });

  test('t3', () => {
    let input = [1]
    let tree = vecToBinaryTree(input)
    expect(goodNodes(tree)).toBe(1)
  });

  test('t1Iter', () => {
    let input = [3,1,4,3,null,1,5]
    let tree = vecToBinaryTree(input)
    expect(goodNodeIter(tree)).toBe(4)
  });

  test('t2Iter', () => {
    let input = [3,3,null,4,2]
    let tree = vecToBinaryTree(input)
    expect(goodNodeIter(tree)).toBe(3)
  });

  test('t3Iter', () => {
    let input = [1]
    let tree = vecToBinaryTree(input)
    expect(goodNodeIter(tree)).toBe(1)
  });
});
