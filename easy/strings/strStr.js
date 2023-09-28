/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}

    logic:
    
    keep a tracker of a created word
    left and right pointer, 0  1
    index tracker for needle 0

    while loop, while right is less than length of haystack

        haystack = "s a d b u t s a d", needle = "s a d"   'l'
                    l r                           t

        if our left pointer is equal to the first element in the needle and the result is no length
            concat onto created word
            trackerNeedle goes up one

        if right pointer is equal to the current trackerNeedle
            concat the right tracker 
            rigght plus one
            tracker plus

        else 
            left = right
            right = left + 1
            needle tracker = 0
            reset our result to empty string

    return the 0 or -1 depending on outcome
 */

function strStr(haystack, needle) {
    if (needle === '') {
        return 0; // Empty needle is always found at index 0.
    }

    for (let i = 0; i <= haystack.length; i++) {    // "sadbutsad" "sad"
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i; // Found a match starting at index i.
        }
    }

    return -1; // Needle not found in haystack.
}

/**
 * First attempt I psuedo code only worked partially 
 */