/**
 * @param {number} x
 * @return {boolean}

Logic:
    turn number into an array

    while loop
        compare first and last element in the array if equal
            slice the array from first to last

        else if first and last element not equal
            return false

    return true
 */
var isPalindrome = function (x) {
    const numArray = x.toString().split('');
    // const splitArray = numArray.slice(1, numArray.length - 1);
    // console.log(numArray, splitArray);

    while (numArray.length !== 0) {
        if (numArray[0] !== numArray[numArray.length - 1]) return false;

        if (numArray[0] === numArray[numArray.length - 1]) {
            numArray.shift();
            numArray.pop();
        }
    }

    return true;
}