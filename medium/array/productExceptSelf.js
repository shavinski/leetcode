/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
    let result = [];
    let left = 1;    // 1
    let right = 1;   // 24

    for (let i = 0; i < nums.length; i++) { // i = 3
        // compute left product for nums[i]
        result[i] = left;    // [1, 1, 2, 6]
        left *= nums[i];     // 2 *= 3 = 6
    }

    for (let i = nums.length - 1; i >= 0; i--) {   // i = 0
        // compute right product for nums[i] and multiply it with the left product
        result[i] *= right;   // [24, 12, 8, 6]
        right *= nums[i];     // 24 *= 24
    }

    return result;
};