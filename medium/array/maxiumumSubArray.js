/**
 * @param {number[]} nums
 * @return {number}

    have a variable to keep track of masxSum 

    loop through the initial array
        start with the first index
        have a variable to have a sumChecker, will be first index

        second loop 
            start at second index
            then we will add the second index to the sumChecker

        if the sumChecker is bigger tahn the maxSum 
            then sumChecker becomes maxSum

    return maxSum
 */

// My initial answer, tests passed 206/210
// function maxSubArray(nums) {
//     if (nums.length === 1) return nums[0];
//     let maxSum = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         let sumCheck = 0;

//         for (let j = i; j < nums.length; j++) {
//             sumCheck += nums[j];
//             if (sumCheck > maxSum) {
//                 maxSum = sumCheck;
//             }
//         }

//     }

//     return maxSum;
// };

function maxSubArray(nums) {
    let maxSub = nums[0];
    let curSum = 0;

    for (let num of nums) {
        if (curSum < 0) {
            curSum = 0;
        }

        curSum += num;
        maxSub = Math.max(maxSub, curSum);
    }

    return maxSub;
}