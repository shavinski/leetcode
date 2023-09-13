/**
 * @param {number[]} nums
 * @return {boolean}

    Use a hash map 

    loop through nums 
        store the current element as key, value will be number of times occured

        check if the number is greater than one, if so it appeard twice 
            return true
    
    else we will return false at end


 */
function containsDuplicate(nums) {
    let numCount = {};

    for (let num of nums) {
        if (numCount[num] !== undefined) {
            numCount[num]++;
        } else {
            numCount[num] = 1;
        }

        if (numCount[num] >= 2) {
            return true;
        }
    }

    return false;
};