
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

