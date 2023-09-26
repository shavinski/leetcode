/**
 * @param {string} s
 * @return {number}

    keep track of current substring 
    keep track of a max length 

    loop through our string
        if current character is not in substring 
            push it to substring
        
        if curren char is in substring
            check if the cur max length is less than substring length and change dependign 
            is restart sub string

    

    return the length at end 

    a b c a b c b b
    L R

    subString = 'a'

    b b b b b
            L R

    subString = 'b'
    if the left and right are not the same 

 */
function lengthOfLongestSubstring(s) {
    if (s.length === 1) return 1;

    let subString = '';
    let maxLength = 0;

    let left = 0;
    let right = 1;

    while (right < s.length) {
        if (subString.length === 0) {
            F
            subString += s[left];
        }

        if (s[left] === s[right] || subString.includes(s[right])) {
            maxLength = subString.length > maxLength ? subString.length : maxLength;
            subString = '';
            left++;
            right = left + 1;
        } else {
            subString += s[right];
            right++;
            maxLength = subString.length > maxLength ? subString.length : maxLength;
        }
    }

    return maxLength
};