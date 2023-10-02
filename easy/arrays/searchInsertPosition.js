/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

    Logic:

    this can be solved in O(log n) binary search

    we will have:
    left pointer 
    right pointer
    middle pointer 

    while loop through nums, while left < right

        revalue middle through each loop

        check if the target < middle
            make left pointer the middle plus one
        check if the target > middle 
            make right pointer the middle minus one
        check if the target is equal to middle
            if it is return the index


    return the index of where it should be 
 */
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        } else if (target === nums[middle]) {
            return middle;
        }
    }

    return right + 1;
};