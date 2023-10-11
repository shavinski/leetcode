/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}



loop through stones 
    check if the current stone is included in the jewlws
    if it is make our counter + 1

return result 

 */
function numJewelsInStones(jewels, stones) {
    let result = 0;

    for (let stone of stones) {
        if (jewels.includes(stone)) {
            result++;
        }
    }

    return result;
};