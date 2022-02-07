/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    let dfs = (t, start) => {
        res.push(t);
        for (let i = start; i < nums.length; i++) {
            // 同层重复，跳过
            if (i > start && nums[i - 1] == nums[i]) continue;
            t.push(nums[i]);
            dfs(t.slice(), i + 1);
            t.pop();
        }
    }
    dfs([], 0);
    return res;
};

// @lc code=end

