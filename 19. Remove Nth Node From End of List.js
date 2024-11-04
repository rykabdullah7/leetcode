/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    current = head;
    length = 0;

    //traversing to calculate the length
    while(current){
        length++;
        current = current.next
    }
    current = head;
    prev = null;

    //if the node to be delated is the first node
    if(length === n){
        head = head.next
        return head;
    }
    
    while(current){
        if(length === n){
            if(current.next)
            {prev.next = current.next;}
            else{
                prev.next = null
            }
        }
        prev = current
        current = current.next
        length--;
    }
    return head;
};
