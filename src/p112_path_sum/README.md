# p112_path_sum

## Iterative Approach

```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
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

```

## Recursive approach

```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
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
```
