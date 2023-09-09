/**
 * @param {number[]} nums
 * @return {number[]}

 Logic: 
 merge sort strategy 

 will need to use recursion 

 base case: if our 
 */
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

var sortArray = function (nums) {     // [2,1,4,3]
    if (nums.length <= 1) return nums;

    const middle = Math.floor(nums.length / 2);
    const leftHalf = nums.slice(0, middle);         // [2,1]
    const rightHalf = nums.slice(middle);           // [4,3]

    const sortLeft = sortArray(leftHalf);
    const sortRight = sortArray(rightHalf);

    return merge(sortLeft, sortRight);
};

/**
callstack:

    sortArray(4,3) 
    x sortArray(2,1) => [1,2]
 */

/**
    first call of sortArray on left half 
        => input: [2,1]
        => left half: [2] right half: [1]
        another recursive call 
            => sortArray([2]);
                returns [2]
            => srotArray([1])
                returns [1]
                then this returns a merge with these two
                    [1,2]
    THIS IS NUTS!
 */