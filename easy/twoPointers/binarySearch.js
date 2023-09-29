/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
    Binary search

    example:

    Target: 2

    [1,2,3,4,5]
     L   M   R

    Logic: 

    we will have two pointers 
    one will be the left, the beginning of the array
    one will be the right, the end of the array

    use a while loop, condition is while the left is less than or equal to right
        need to get our middle variable, left + right / 2

        check if the middle is more than the target 
            left becomes the middle + 1
        else if the midde is less than the target
            right becomes the middle - 1
        else 
            return the middle 

 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle
        }
    }

    return -1;
};