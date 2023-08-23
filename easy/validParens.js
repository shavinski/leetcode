/**
 * @param {string} s
 * @return {boolean}

Logic:

create a stack

loop through string
    if the  char is a ( [ { 
        push to stack
    
    if stack doesnt have length then exit (meaning no open paren)
    or 
    if stack at index is equal to closing AND the index previous to it is a beg paren

 */
    var isValid = function (s) {                     // {[]}

        const stack = [];    
    
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
                stack.push(s[i]);
            } else {
                if (!stack.length ||
                    s[i] === ')' && stack[stack.length - 1] !== '(' ||
                    s[i] === ']' && stack[stack.length - 1] !== '[' ||
                    s[i] === '}' && stack[stack.length - 1] !== '{') {
                    return false;
                }
                stack.pop();
            }
        }
    
        return !stack.length;
    };