/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
    let numToArray = num.toString().split('').map(Number);
    if (numToArray.length === 1) {
        return num;
    }

    let newNum = numToArray.reduce((a, b) => a + b);

    return addDigits(newNum);
};