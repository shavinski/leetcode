/**
 * Logic: 
 * have two objects to store counts 
 * 
 * turn num1 and num2 into strings
 * 
 * loop through num1
 * loop through num2
 *  create counts based on loops
 * 
 * compare the keys and there values to one another
 *  compare num1[1] = 1 and num2[1] = 1 and so on 
 *  if they are not equal we can return false 
 * 
 * 
 * return true
 * 
*/

//my solution
function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    let count1 = {};
    let count2 = {};

    let num1s = num1.toString();
    let num2s = num2.toString();

    if (num1s.length !== num2s.length) return false;

    for (let num of num1s) {
        console.log(num);
        count1[num] = (count1[num] || 0) + 1;
    }

    for (let num of num2s) {
        count2[num] = (count2[num] || 0) + 1;
    }

    for (let key in count1) {
        if (count1[key] !== count2[key]) return false;
    }

    return true;
}
