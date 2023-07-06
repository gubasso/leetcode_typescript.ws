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
  let i = (j == undefined ? 0 : j)
  let n = vec.length
  if (n == 0 || i >= n || vec[i] == null) return null;
  let tree = new TreeNode(vec[i] as number)
  tree.left = vecToBinaryTree(vec, 2*i+1)
  tree.right = vecToBinaryTree(vec, 2*i+2)
  return tree
}

export function vecToBinaryTreeIter(vec: (number | null)[]): TreeNode | null {
  let n = vec.length
  if (n == 0 || vec[0] == null) return null;
  let tree = new TreeNode(vec[0] as number)
  let stack: [TreeNode, number][] = [[tree, 0]]
  while (stack.length > 0) {
    let [node, i] = stack.pop() as [TreeNode, number]
    let i_l = 2*i+1
    let i_r = 2*i+2
    if (i_l < n && vec[i_l] != null) {
      node.left = new TreeNode(vec[i_l] as number)
      stack.push([node.left, i_l])
    }
    if (i_r < n && vec[i_r] != null) {
      node.right = new TreeNode(vec[i_r] as number)
      stack.push([node.right, i_r])
    }
  }
  return tree
}

// Runtime 121 ms
// Beats 98.91%
export function goodNodes(root: TreeNode | null): number {
  let dfs = (node: TreeNode | null, maxSoFar: number): number => {
    if (node == null) { return 0 }
    let ans = 0
    if (node.val >= maxSoFar) {
      maxSoFar = node.val
      ans += 1
    }

    let left = dfs(node.left, maxSoFar)
    let right = dfs(node.right, maxSoFar)

    return left + right + ans
  }

  return dfs(root, -Infinity)
};

// Runtime 146 ms
// Beats 48.9%
export function goodNodeIter(root: TreeNode | null): number {
  if (root == null) return 0;
  let ans = 0;
  let stack: [TreeNode, number][] = [[root as TreeNode, -Infinity]]

  while (stack.length > 0) {
    let [node, max] = stack.pop() as [TreeNode, number]
    if (node.val >= max) {
      ans +=1
      max = node.val
    }
    if (node.left) stack.push([node.left, max]);
    if (node.right) stack.push([node.right, max]);
  }

  return ans
}
