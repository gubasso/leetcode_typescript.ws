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

export function vecToBinaryTreeIter(vec: (number | null)[], j?: number): TreeNode | null {
  if (vec.length == 0 || vec[0] == null) { return null }
  let tree = new TreeNode(vec[0])
  let stack: [TreeNode, number][] = [[tree, 0]]
  while (stack.length > 0) {
    let [node, idx] = stack.pop() || [new TreeNode(), 0]
    let left_idx = 2*idx + 1
    let right_idx = 2*idx + 2
    let left_val = vec[left_idx]
    let right_val = vec[right_idx]
    if (left_val) {
      let node_left = new TreeNode(left_val)
      node.left = node_left
      stack.push([node_left, left_idx])
    }
    if (right_val) {
      let node_right = new TreeNode(right_val)
      node.right = node_right
      stack.push([node_right, right_idx])
    }
  }
  return tree
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  let node: TreeNode = root as TreeNode;
  let stack: [TreeNode, number][] = [[node, 0]]

  while (stack.length > 0) {
    let [n, curr] = stack.pop() as [TreeNode, number]
    curr += n.val
    if (!n.left && !n.right) {
      if (curr == targetSum) return true
    }
    if (n?.left) stack.push([n.left, curr])
    if (n?.right) stack.push([n.right, curr])
  }

  return false
};
