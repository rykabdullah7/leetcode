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
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode();
    let list3 = head
    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val === list2.val) {
                list3.next = new ListNode(list1.val)
                list3 = list3.next
                list3.next = new ListNode(list1.val)
                list3 = list3.next
                list1 = list1.next
                list2 = list2.next
            }
            else if (list1.val > list2.val) {
                list3.next = new ListNode(list2.val)
                list3 = list3.next
                list2 = list2.next
            }
            else {
                list3.next = new ListNode(list1.val)
                list3 = list3.next
                list1 = list1.next
            }
        }
        else {
            if (list1) {
                list3.next = new ListNode(list1.val);
                list1 = list1.next
                list3 = list3.next
            }
            else if (list2) {
                list3.next = new ListNode(list2.val);
                list2 = list2.next
                list3 = list3.next
            }
        }

    }
    head = head.next
    return head
};
