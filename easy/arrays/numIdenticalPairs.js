/**
 * @param {number[]} nums
 * @return {number}

 Logic: 
counter 

have a left and right pointer 

while loop, cond if left is equal to last index


    check if array[left] is equal to array[right]

    if right is equal to the last index
        increment left 
        restart right to be left + 1

    increment right

 */
var numIdenticalPairs = function (nums) {
    let counter = 0;
    let l = 0
    let r = l + 1;

    while (l < nums.length - 1) {
        if (nums[l] === nums[r]) {
            counter++;
        }

        if (r === nums.length) {
            l++;
            r = l;
        }

        r++;
    }

    return counter;
};