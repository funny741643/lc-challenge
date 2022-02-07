/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start

/**
 * 题解：
 * 遇到'('新压入一个空串
 * 遇到字符，让字符与栈顶元素拼接 
 * 遇到')',进行栈顶元素弹出反转并拼接到新栈顶中
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = ['']
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('')
        } else if (s[i] === ')') {
            let str = stack.pop()
            let t = str.split('').reverse().join('')
            stack[stack.length - 1] += t;
        } else {
            stack[stack.length - 1] += s[i]
        }
    }
    return stack.pop()
};
// @lc code=end

