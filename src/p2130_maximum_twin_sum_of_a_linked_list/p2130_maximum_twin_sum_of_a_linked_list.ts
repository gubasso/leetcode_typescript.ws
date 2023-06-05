// Definition for singly-linked list.
//
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
