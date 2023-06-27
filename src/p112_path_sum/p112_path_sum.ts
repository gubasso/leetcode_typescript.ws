//Definition for a binary tree node.
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
  let i = (j === undefined ? 0 : j)
  if (!vec.length || vec[i] == null) return null;
  return new TreeNode(vec[i]||0, vecToBinaryTree(vec, 2*i + 1), vecToBinaryTree(vec, 2*i + 2))
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  function dfs(root: TreeNode | null, curr: number): boolean {
    if (!root) return false;
    let node: TreeNode = root as TreeNode;
    curr += node.val
    if (node.left == null && node.right == null) return curr == targetSum
    let left = dfs(node.left, curr)
    let right = dfs(node.right, curr)
    return left || right
  }

  return dfs(root, 0)
};
