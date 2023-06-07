# p2130_maximum_twin_sum_of_a_linked_list

<!-- toc GFM -->

* [Solution after reading leetcode's solutions:](#solution-after-reading-leetcodes-solutions)
* [My simple dirty solution:](#my-simple-dirty-solution)

<!-- toc -->

## Solution after reading leetcode's solutions:

```typescript
export function pairSum(head: ListNode | null): number {
  let [slow, fast] = [head, head]
  let maxVal = 0

  // get middle of linked list
  while (fast != null && fast.next != null && slow != null) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse second part of linked list
  let curr = slow
  let prev = null
  while (curr != null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  // get max sum of pairs
  while (prev != null && head != null) {
    maxVal = Math.max(maxVal, prev.val + head.val)
    head = head.next
    prev = prev.next
  }

  return maxVal
};
```

## My simple dirty solution:

```typescript
export function pairSum(head: ListNode | null): number {
  let list1: ListNode | null = new ListNode(0)
  list1.next = head
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let prev = slow

  while (fast != null && fast.next != null) {
    prev = slow
    slow = slow != null ? slow.next : slow
    fast = fast.next.next
  }

  slow = slow != null ? slow : new ListNode(-1)
  prev = prev != null ? prev : new ListNode(-1)
  if (slow.next == null && fast == null) {
    return prev.val + slow.val
  }

  //invert list 2

  let list2: ListNode | null = new ListNode(0)
  list2.next = slow
  prev = prev != null ? prev : new ListNode(-1)
  prev.next = null
  let prevInv: ListNode | null = list2
  let currInv: ListNode | null = list2.next

  while (currInv != null) {
    let next: ListNode | null = currInv.next
    currInv.next = prevInv
    prevInv = currInv
    currInv = next
  }

  let tail = list2.next
  tail.next = null
  list2.next = prevInv

  let result = 0

  while (list1 != null && list2 != null) {
    result = Math.max(result, list1.val + list2.val)
    list1 = list1.next
    list2 = list2.next
  }

  return result
};
```
