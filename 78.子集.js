/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ret = []
    let dfs = function (path, start) {
        ret.push(path)
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            dfs(path.slice(), i + 1)
            path.pop()
        }
    }
    dfs([], 0)
    return ret;
}

// @lc code=end

