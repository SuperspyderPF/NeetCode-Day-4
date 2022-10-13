/**
 * Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 class Node{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}
var sortList = function(head) {
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
    return arr.sort((a,b)=>b-a)
}

//time O(n) space O(1)