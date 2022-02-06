/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 * 滑动窗口，快慢指针, 寻找最小长度
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0;
    let len = nums.length;
    let sum = 0;
    let ret = Infinity;
    while (r < len) {
        sum = sum + nums[r]
        while (sum >= target) {
            ret = Math.min(ret, r - l + 1)
            sum = sum - nums[l]
            l++
        }
        r++;
    }
    return ret == Infinity ? 0 : ret;
}
// @lc code=end

