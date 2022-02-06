/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 * 固定一个数后，左右指针， 求相加和与target的差值，取差值小的
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if(nums.length < 3) {
        return []
    }
    let ret = 0, sum = 0, diff = Infinity
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1
        while ( l < r) {
            sum = nums[i] + nums[l] + nums[r]
            ret = Math.abs(target - sum) < diff ? sum : ret
            diff = Math.abs(target - sum) < diff ? Math.abs(target - sum) : diff
            sum > target ? r-- : l++
        }
    }
    return ret;
}
// @lc code=end

