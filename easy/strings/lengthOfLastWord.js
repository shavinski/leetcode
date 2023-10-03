/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    let toArray = s.split(" ");
    console.log(toArray);

    for (let i = toArray.length - 1; i >= 0; i--) {
        if (toArray[i] !== '') {
            return toArray[i].length;
        }
    }
};