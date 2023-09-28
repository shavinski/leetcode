/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

    logic:

    if the length of s is not equal to t return false

    keep a cahace of letters for s 
    keep a cache of letters for t

    loop through
        store the letter of s in cache
        store the letter of t in cache


    return if the caches are equal to one another 

 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const sCache = {}
    const tCache = {}

    for (let i = 0; i < s.length; i++) {
        sCache[s[i]] = (sCache[s[i]] || 0) + 1;
        tCache[t[i]] = (tCache[t[i]] || 0) + 1;
    }

    for (let key in sCache) {
        if (sCache[key] !== tCache[key]) {
            return false;
        }
    }

    return true;
};