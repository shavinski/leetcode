/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function hasCycle(head) {
    let fast = head;

    while (fast && fast.next) {
        head = head.next;
        fast = fast.next.next

        if (fast === head) {
            return true;
        }
    }

    return false;
};