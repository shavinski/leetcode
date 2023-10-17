/**
 * @param {number[]} nums
 * @return {number[]}

Goal: 
loop through original nums array and build a new array

new array is built off of the nums array at nums[i];

 */
var buildArray = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]]);
    }

    return result;
};