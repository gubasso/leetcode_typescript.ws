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
  console.log(tree)
  return tree
}

export function maxDepth(root: TreeNode | null): number {
  // if (root == null) return 0;
  // let maxLeft = maxDepth(root.left)
  // let maxRight = maxDepth(root.right)
  // return Math.max(maxLeft, maxRight) + 1
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};
