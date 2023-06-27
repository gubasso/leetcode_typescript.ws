# p104_maximum_depth_of_binary_tree

## Iterative approach

```
function maxDepth(root: TreeNode | null): number {
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
```

## Recursive approach

```
function maxDepth(root: TreeNode | null): number {
  // if (root == null) return 0;
  // let maxLeft = maxDepth(root.left)
  // let maxRight = maxDepth(root.right)
  // return Math.max(maxLeft, maxRight) + 1
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};
```

