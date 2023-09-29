/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}

    we need a dummy node so we avoid an empty linked lists dilema

    while loop, while  list1 or list2 not null
        check if the head on list1 is less than list2
            create a newListNode with value of headnode and the next will be null
            move the head to be the next
        else if the head on list2 is less than list1
            create a newListNode with value of headnode and the next will be null
            move the head to be the next
 */
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2;
    }

    return dummy.next;
};
