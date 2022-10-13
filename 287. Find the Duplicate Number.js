/**
 * @param {number[]} nums
 * @return {number
 * }Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
 */
 var findDuplicate = function(nums) {
    let fast = 0, slow = 0
    while(true){
        fast = nums[nums[fast]]
        slow = nums[slow]
        if(fast === slow){
            let pointer = 0
            while(pointer !== slow){
                pointer = nums[pointer]
                slow = nums[slow]
            }
            return pointer
        }
    }
   
   
};

//time O(n) space O(1)