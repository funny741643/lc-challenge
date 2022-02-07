/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s % 2 == 0) {
        return false
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop()
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length === 0) {
        return true
    }
    return false
};
// @lc code=end

