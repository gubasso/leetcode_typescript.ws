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
  if (list == null) { return [] }
  let vec: number[] = []
  let pointer: ListNode | null = list

  while (pointer != null) {
    vec.push(pointer.val)
    pointer = pointer.next
  }

  return vec
}

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let curr = head

  while (curr != null) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
};
