class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
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

function reverseList(head: ListNode | null): ListNode | null {
  const n: number[] = [];
  while (head) {
    n.push(head.val);
    head = head.next;
  }

  /** reverse list */
  const nR = n.reverse();

  /** create the start node ( empty node, so the actual node stats from next) */
  let node = new ListNode();
  const headNode = node;
  for (const i of nR) {
    node.next = new ListNode(i);
    node = node.next;
  }

  return headNode.next;
}
// @leet end

