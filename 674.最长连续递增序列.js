/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 * 快慢指针，要么++， 要么归0重计
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let ret = 1, maxLen = 1
    let l = 0, r = 1,
    while (r < nums.length) {
        if (nums[r] > nums[l]) {
            maxLen++
        } else {
            maxLen = 1;
        }
        l++;
        r++;
        ret = Math.max(ret, maxLen);
    }
    return ret;
}

// @lc code=end

