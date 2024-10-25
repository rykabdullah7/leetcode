/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let final_node = new ListNode();
    let head = final_node
    let carry = 0

    while (l1 !== null || l2 !== null || carry > 0) {

        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = (sum - (sum % 10)) / 10
        head.val = sum % 10


        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next
        }

        if (l1 || l2 || carry > 0) {
            head.next = new ListNode()
            head = head.next
        }

    }

    return final_node;

};
