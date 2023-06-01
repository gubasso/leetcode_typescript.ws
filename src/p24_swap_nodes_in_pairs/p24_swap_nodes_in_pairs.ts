
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
  for (let i = 1; i < vec.length ; i++) {
    pointer.next = new ListNode(vec[i])
    pointer = pointer.next
  }
  return list
}

export function listToVec(list: ListNode | null): number[] {
  if (list === null) { return [] }
  let vec = []
  let pointer: ListNode | null = list
  while (pointer !== null) {
    vec.push(pointer.val)
    pointer = pointer.next
  }
  return vec
}

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) { return null }
  let dummy = new ListNode(0, head)
  let prev = dummy
  while (prev.next !== null) {
    let n1 = prev.next
    if (n1.next !== null) {
      let n2 = n1.next
      n1.next = n2.next
      n2.next = n1
      prev.next = n2
      prev = n1
    } else {
      prev.next = n1
      prev = prev.next
    }
  }
  return dummy.next
};
