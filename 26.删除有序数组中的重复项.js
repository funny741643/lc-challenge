/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0, r = 0, len = nums.length;
    while (r < len) {
        if (nums[r] !== nums[l]) {
            l++;
            nums[l] = nums[r]
        } else {
            r++
        }
    }
    return l+1;
}
// @lc code=end

