/**
 Logic: 
 
 take out the first word to be our checker 
 have a result 
 
 loop through words starting at index 1
 if the first letter of the checker does not match cur letter of word
 return a ""
 
 if the first letter of the checker matches the first letter of the current word 
         add to the string result

 */


function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let firstWord = strs[0];                          //flower
    let result = "";                                  // "f"

    for (let i = 0; i < firstWord.length; i++) {                          // i = 0
        for (let s = 1; s < strs.length; s++) {                            // s = 2
            if (strs[s][i] !== firstWord[i]) {     //  0 === 4, strs[2][0] !== firstWord[0]
                return result;                                             //           flight => f      flower => f
            }
        }
        result += firstWord[i];
    }

    return result;
}