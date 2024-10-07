  // class ListNode {
  //     val: number
  //     next: ListNode | null
  //     constructor(val?: number, next?: ListNode | null) {
  //         this.val = (val===undefined ? 0 : val)
  //         this.next = (next===undefined ? null : next)
  //     }
  // }
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

function detectCycle(_head: ListNode | null): ListNode | null {
  const prevVisited = new Set<ListNode>();

  let head = _head;

  while (head) {
    if (prevVisited.has(head)) {
      return head;
    }

    prevVisited.add(head);
    head = head.next;
  }

  return null;
};
// @leet end
