// O(n^2) solution

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {

        for (let x = i + 1; x < nums.length; x++) {
            if ((nums[i] + nums[x]) === target) {
                return [i, x];
            }
        }
    }

    return []
};

// O(n) solution 

var twoSum = function (nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i];
        }
        hash[n] = i;
    }
    return [];
}

/**
 * Idea behind this one is that we are storing the difference in a object
 * which will determine if we have numbers which will add up to be the target
 * 
 * twoSum([2,7,11,15], 9)
 * 
 * hash starts of as => {}
 * 
 * first loop the if is neglected
 * 
 * hash[2] = 0
 * 
 * next loop
 * hash[9-7] !== undefined
 *  this is true 
 *  so we return an array with [hash[9 - 7], 1] => [0,1]
 */
