import {describe, expect, test} from '@jest/globals';
import { vecToBinaryTree, vecToBinaryTreeIter, isSameTree } from './p100_same_tree';

describe('p100_same_tree', () => {

  test('utils', () => {
    let input = [3,1,4,3,null,1,5]
    let input2 = [3,3,null,4,2]
    let tree = vecToBinaryTree(input)
    let tree2 = vecToBinaryTree(input2)
    let treeIter = vecToBinaryTreeIter(input)
    let tree2Iter = vecToBinaryTreeIter(input2)
    // console.log(tree)
    // console.log(treeIter)
    // console.log(tree2)
    // console.log(tree2Iter)
  });

  test('t1', () => {
    let p = [1,2,3]
    let q = [1,2,3]
    let pl = vecToBinaryTree(p)
    let ql = vecToBinaryTree(q)
    expect(isSameTree(pl, ql)).toBe(true)
  });

  test('t2', () => {
    let p = [1,2]
    let q = [1,null,2]
    let pl = vecToBinaryTree(p)
    let ql = vecToBinaryTree(q)
    expect(isSameTree(pl, ql)).toBe(false)
  });

  test('t3', () => {
    let p = [1,2,1]
    let q = [1,1,2]
    let pl = vecToBinaryTree(p)
    let ql = vecToBinaryTree(q)
    expect(isSameTree(pl, ql)).toBe(false)
  });

});
