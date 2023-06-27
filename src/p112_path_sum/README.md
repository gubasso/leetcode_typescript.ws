# p112_path_sum

## Iterative Approach

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
