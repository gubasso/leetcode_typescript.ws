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
  if (vec.length === 0) { return null }
  let list = new ListNode(vec[0])
  let pointer = list

  for (let i = 1; i < vec.length; i++) {
    pointer.next = new ListNode(vec[i])
    pointer = pointer.next
  }

  return list
}

export function listToVec(list: ListNode | null): number[] {
  if (list === null) { return [] }
  let pointer: ListNode | null = list
  let vec: number[] = []

  while (pointer != null) {
    vec.push(pointer.val)
    pointer = pointer.next
  }

  return vec
}

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head === null) { return null }
  if (head.next === null) { return head }
  let dummy = new ListNode(-1, head)
  let before: ListNode | null = dummy
  for (let i = 1; i < left; i++) {
    before = before.next
  }

  let prev = before
  let curr = before.next
  for (let i = left; i <= right; i++) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  before.next.next = curr
  before.next = prev

  return dummy.next

};




