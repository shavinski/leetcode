/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    let len = nums.length;
    if (len < 2) return nums;

    quickSort(nums, 0, len - 1);
    return nums;
};

function quickSort(nums, start, end) {
    if (start >= end) return

    let left = start
    let right = end;
    let pivot = nums[Math.floor((start + end) / 2)];

    while (left <= right) {
        while (left <= right && nums[left] < pivot) {
            left++;
        }
        while (left <= right && nums[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }

    quickSort(nums, start, right);
    quickSort(nums, left, end)
}