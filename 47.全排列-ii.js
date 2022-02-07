/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let ret = []
    let len = nums.length
    let hash = {}   // 用于去重判断
    nums.sort((a, b) => a - b)
    function track(path) {
        if (path.length === len) {
            ret.push(path)
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (hash[i] || hash[i - 1] && nums[i] === nums[i - 1]) continue
            hash[i] = true;
            path.push(nums[i])
            track(path.slice())
            path.pop()
            hash[i] = false;
        }
    }
    track([])
    return ret;
}
// @lc code=end

