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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0,
): ListNode | null {
  if (!l1 && !l2 && carry === 0) {
    return null;
  }

  const firstNum = l1 ? l1.val : 0;
  const secondNum = l2 ? l2.val : 0;
  const summation = firstNum + secondNum + carry;

  carry = Math.floor(summation / 10);
  const num = summation % 10;

  const currentNode = new ListNode(num);
  currentNode.next = addTwoNumbers(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    carry,
  );

  return currentNode;
}
