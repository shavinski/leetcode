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

/**
 * @param {string} s
 * @return {boolean}





ANOTHER WAY 
    create a helped function to determine if a char is alpha num
        check if char is between a-z A-Z 0-9

    in isPalindrome

        left and right tracker 

        need to do a while loop, while left is not equal to right
            if the current char on left is not alpha num
                add to one
            if the current char on right is not alpha num
                add one to right

            if the char on left is not equal to char on right
                return false

    return true;
 */
function isPalindrome(s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isValidChar(s[left])) {
            left += 1;
        }

        while (left < right && !isValidChar(s[right])) {
            right -= 1;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left += 1;
        right -= 1;
    };

    return true;
};

function isValidChar(char) {
    return (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9')
    )
}