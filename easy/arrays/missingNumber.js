/**
 * @param {number[]} nums
 * @return {number}

logic:

sort the array first

loop through sorted array
    if the current index is not equal to the number return the current idnex

 */
function missingNumber(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i];
        console.log(sum)
    }

    return sum;
};