/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * 
 * //
 * @param {ListNode} head
 * @return {ListNode}
 */


///MOAS = mother of all solutions 

class Node{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}
var deleteDuplicates = function(head) {
    if(!head) return null
    var nodes = sortNodes(head)
    let result
    for(let i =0;i<nodes.length;i++){
        result = new Node(nodes[i], result)
    }
    return result
};
function sortNodes(head){
    let arr =[]
    while(head){
        arr.push(head.val)
        head = head.next
    }
    var s = new Set(arr)
    return Array.from(s).sort((a,b)=>b-a)
}

 var deleteDuplicates = function(head){
    let curr = head 
    while(curr){
        if(curr.next !== null && curr.val === curr.next.val){
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head 
}
//time O(n) space O(1)

var deleteDuplicates = function(head) {
    // Special case...
    if(head == null || head.next == null)
        return head;
    // Initialize a pointer curr with the address of head node...
    let curr = head;
    // Traverse all element through a while loop if curr node and the next node of curr node are present...
    while( curr != null && curr.next != null){
        // If the value of curr is equal to the value of prev...
        // It means the value is present in the linked list...
        if(curr.val == curr.next.val){
            // Hence we do not need to include curr again in the linked list...
            // So we increment the value of curr...
            curr.next = curr.next.next;
        }
        // Otherwise, we increment the curr pointer...
        else{
            curr = curr.next; 
        }
    }
    return head;        // Return the sorted linked list without any duplicate element...
};