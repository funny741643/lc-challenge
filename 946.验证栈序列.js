/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    const stack = []
    for (let cur of pushed) {
        stack.push(cur)
        while (stack[stack.length - 1] === popped[0] && stack.length) {
            stack.pop()
            popped.shift()
        }
    }
    return !stack.length
};
// @lc code=end

