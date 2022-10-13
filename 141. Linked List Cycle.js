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

 var hasCycle = function(head){
    var s = head
    while(head && head.next){
        head = head.next.next
        s = s.next
        if(head === s) return true
    } 
    return false 
}