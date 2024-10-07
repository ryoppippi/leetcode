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

function deleteDuplicates(_head: ListNode | null): ListNode | null {
    let head = _head;

    while(head && head.next) {
      /** skip the next node if val is eqal */
      if(head.val === head.next.val) head.next = head.next.next;
      else head = head.next
    }
    
    return _head;
};
// @leet end
