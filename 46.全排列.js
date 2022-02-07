/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ret = []
    let len = nums.length
    function track(path) {
        if (path.length === len) {
            ret.push(path)
            return;
        }
        for (let i = 0; i < len; i++) {
            if (path.includes(nums[i])) continue
            path.push(nums[i])
            track(path.slice())
            path.pop()
        }
    }
    track([])
    return ret;
}
// @lc code=end

