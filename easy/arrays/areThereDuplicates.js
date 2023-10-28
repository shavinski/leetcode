
// my solution
function areThereDuplicates(...args) {
    let arr = [...args];
    let count = {}
    for (let val in arr) {
        count[arr[val]] = (count[arr[val]] || 0) + 1
    }
    for (let key in count) {
        if (count[key] > 1) return true
    }
    return false;
}

// not mine, cool one liner
function areThereDuplicates(...args) {
    return new Set([...args]).size !== [...args].length;
}

// retesting that my commits go through