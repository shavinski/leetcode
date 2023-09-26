function isPalindrome(s) {
    if (s.length <= 1) return true;

    let newS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let backwards = newS.split('').reverse().join('')

    return newS === backwards;
};