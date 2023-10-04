/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}


Logic



check if current node value is equal to the next value 
    if it is equal to the next value then delete from linked list



 */
function deleteDuplicates(head) {

    let cur = head

    while (cur) {
        while (cur.next && cur.next.val === cur.val) {
            cur.next = cur.next.next
        }
        cur = cur.next
    }

    return head;
};