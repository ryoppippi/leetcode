class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// @leet start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const nm = new Map<number, number>( )
  while (head) {
    nm.set(head.val, (nm.get(head.val) ?? 0) + 1)
    head = head.next
  }

  /** get numbers which appears only once */
  const arr = Array.from(nm.entries()).filter(([_, v]) => v === 1).map(([k, _]) => k).sort((a, b) => a - b)

  /** create a new list */
  const dummy = new ListNode()
  let current = dummy
  arr.forEach((v) => {
    current.next = new ListNode(v)
    current = current.next
  })

  return dummy.next
};
// @leet end
