/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
    let low = 1;
    let high = n;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2)

        if (guess(middle) === 1) {
            low = middle + 1;
        } else if (guess(middle) === -1) {
            high = middle - 1;
        } else {
            return middle;
        }
    }
};

function guess(num) {
    if (num < pick) {
        return 1;
    } else if (num > pick) {
        return -1;
    } else {
        return 0;
    }
}