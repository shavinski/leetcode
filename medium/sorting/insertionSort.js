/**
 * @param {number[]} nums
 * @return {number[]}

 Logic: 
 I will use insertion sort 

 loop through the normal array
    have a varibale called j, which will be the current position - 1

    while loop, while j > 0 AND check the current number is smaller than the previous number 
        temp variable to hold the current num
        at arr[j] we want to revalue to be arr[i]
        arr[i] becomes the temp
        subtract one from j
    
    return arr 
 */
var sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i - 1;

        while (j >= 0 && nums[j + 1] < nums[j]) {    // [1, 2, 3, 5] i = 4, j = -1
            let temp = nums[j + 1];
            nums[j + 1] = nums[j];
            nums[j] = temp;
            j -= 1;
        }
    }

    return nums;
};