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

export function vecToBinaryTree(vec: (number | null)[], j?: number): TreeNode | null {
  let i = (j===undefined ? 0 : j)
  let val = vec[i] || null
  if (!vec.length || val == null) { return null }
  let tree = new TreeNode(val)
  tree.left = vecToBinaryTree(vec, 2*i+1)
  tree.right = vecToBinaryTree(vec, 2*i+2)
  return tree
}

export function maxDepth(root: TreeNode | null): number {
  let ans = 0
  let stack: [TreeNode | null, number][] = [[root, 1]]

  while (stack.length) {
    let [node, depth] = stack.pop() || [null,0]
    ans = Math.max(ans, depth)
    if (node?.left) {
      stack.push([node?.left, depth + 1])
    }
    if (node?.right) {
      stack.push([node?.right, depth + 1])
    }
  }

  return ans
};
