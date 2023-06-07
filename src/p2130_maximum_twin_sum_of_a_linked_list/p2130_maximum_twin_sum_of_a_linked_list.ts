// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function vecToList(vec: number[]): ListNode | null {
  let list = new ListNode(vec[0])
  let pointer = list
  for (let i = 1; i < vec.length ; i++) {
    pointer.next = new ListNode(vec[i])
    pointer = pointer.next
  }
  return list
}

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
