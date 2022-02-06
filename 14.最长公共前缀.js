/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 第一个串和其他的串两两对比，找出最小的公共长度，再截取
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let str = strs[0];
    if (str.length === 0) return '';
    let minLen = 10000;
    for (let i = 1; i < strs.length; i++) {
        let len = twoStrCompare(str, strs[i])
        if (len < minLen) {
            minLen = len;
        }
    }
    return str.slice(0, minLen);
};
var twoStrCompare = function(s, t) {
    // let count = 0;
    let i = 0;
    while (i < s.length && i < t.length) {
        if (s[i] === t[i]) {
            i++;
        } else {
            return i;
        }
    }
    return i;
}
// @lc code=end

