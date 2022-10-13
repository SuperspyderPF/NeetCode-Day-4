/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:




Input: head = []
Output: []
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/// MOTHER OF ALL SOLUTIONS 
 class Node{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}
var reverseList = function(head) {
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
    return arr
}

// sol 2 
 var reverseList = function(head) {  
    let prev = null
    while(head){
        let holdNext = head.next
        head.next = prev
        prev = head
        head = holdNext
    }
    return prev
};
//time O(n) space O(1)