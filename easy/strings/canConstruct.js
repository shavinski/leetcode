/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}

loop through ransomnote 
    store each letter and how many times it appaers

loop through magazine 
    store each letter and how many times it appears

loop through the ransomeNot object 
    check if values are the same where keys are the same in each object

 */
function canConstruct(ransomNote, magazine) {
    const ransomeObj = {};
    const magazineObj = {};

    for (let char of ransomNote) {
        ransomeObj[char] = (ransomeObj[char] || 0) + 1;
    }

    for (let char of magazine) {
        magazineObj[char] = (magazineObj[char] || 0) + 1;
    }

    for (let key in ransomeObj) {
        if (!magazineObj[key]) return false;
        if (ransomeObj[key] > magazineObj[key]) {
            return false;
        }
    }

    return true;
};