/**
 * @param {string} s
 * @return {number}

 Logic: 
    create object to store symbol and values 
    create variable to keep track of integer 

    loop through our roman string
        have variable called romanSymbol, current index 

        check current symbol if it is an I 
            if the symbol after is V 
                append the V to current symbol
            if the symbol after is X
                append the V to current symbol

        check current symbol if it is an X
            if the symbol is L
            if the symbol is C 

        check current symbol if it is a C 
            if the symbol is D 
            if the symbol is M 

        add to variable by getting objects values 

 */
var romanToInt = function (s) {
    const symbolCache = {
        I: 1,
        IV: 4,
        IX: 9,
        V: 5,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000
    }

    let integerYear = 0;

    for (let i = 0; i < s.length; i++) {
        let romanSymbol = s[i];
        let nextSymbol = s[i + 1];

        if (romanSymbol === 'I') {
            if (nextSymbol === 'V') {
                romanSymbol += nextSymbol;
                i++;
            }
            if (nextSymbol === 'X') {
                romanSymbol += nextSymbol;
                i++;
            }
        }

        if (romanSymbol === 'X') {
            if (nextSymbol === 'L') {
                romanSymbol += nextSymbol;
                i++;
            }
            if (nextSymbol === 'C') {
                romanSymbol += nextSymbol;
                i++;
            }
        }

        if (romanSymbol === 'C') {
            if (nextSymbol === 'D') {
                romanSymbol += nextSymbol;
                i++;
            }
            if (nextSymbol === 'M') {
                romanSymbol += nextSymbol;
                i++;
            }
        }

        integerYear += symbolCache[romanSymbol];
    }

    return integerYear;
};

/**
 * Better solution below from Leetcode solutions tab
 * this deals with the necessary symbols like IV and rather than storing them like 
 * I did they just check if the next element is bigger than the current and 
 * subtract off the value if that is true and add on the next element which 
 * creates the proper number 
 */

// symbols = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// };

// var romanToInt = function (s) {
//     value = 0;
//     for (let i = 0; i < s.length; i += 1) {
//         symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
//     }
//     return value
// };