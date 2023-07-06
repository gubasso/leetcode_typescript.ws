// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

export function vecToBinaryTreeIter(vec: (number | null)[]): TreeNode | null {
  let n = vec.length
  if (n == 0 || vec[0] == null) return null;
  let tree = new TreeNode(vec[0])
  let stack: [TreeNode, number][] = [[tree, 0]]

  while (stack.length > 0) {
    let [node, i] = stack.pop() as [TreeNode, number]
    let i_l = 2*i+1
    let i_r = 2*i+2
    if (vec[i_l]) {
      node.left = new TreeNode(vec[i_l] as number)
      stack.push([node.left, i_l])
    }
    if (vec[i_r]) {
      node.right = new TreeNode(vec[i_r] as number)
      stack.push([node.right, i_r])
    }
  }

  return tree
}

export function vecToBinaryTree(vec: (number | null)[], x?: number): TreeNode | null {
  let i = (x ? x : 0)
  let n = vec.length
  if (n == 0 || i >= n || vec[i] == null) return null;
  return new TreeNode(vec[i] as number,
                      vecToBinaryTree(vec, 2*i+1),
                      vecToBinaryTree(vec, 2*i+2)
                     )
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let stack = [[p, q]]

  while (stack.length > 0) {
    let [pn, qn] = stack.pop() as [TreeNode | null, TreeNode | null]
    if (pn == null && qn == null) continue;
    if (pn == null || qn == null) return false;
    if (pn.val != qn.val) return false;
    stack.push([pn.left, qn.left])
    stack.push([pn.right, qn.right])
  }

  return true
};

