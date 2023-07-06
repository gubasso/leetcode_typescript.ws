# p100_same_tree

## Iterative approach

```typescript
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
```

## Recursive approach

```typescript
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  let left = isSameTree(p.left, q.left)
  let right = isSameTree(p.right, q.right)

  return left && right
};
```
