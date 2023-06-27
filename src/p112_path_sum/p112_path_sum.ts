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
  if (!root) return false;
  let node: TreeNode = root as TreeNode;
  let stack: TreeNode[] = [node]
  let curr = 0

  while (stack.length > 0) {
    let n = stack.pop() as TreeNode
    curr += n.val
    if (curr == targetSum) return true
    if (n?.left) stack.push(n.left)
    if (n?.right) stack.push(n.right)
  }

  return false
};
