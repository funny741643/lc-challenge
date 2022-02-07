/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 主要：广度优先解法，遇到空节点就返回，那便是最小的深度
const minDepth = (root) => {
    if (root === null) {
        return 0;
    }
    let ret = 1;
    let queue = []
    queue.push(root)
    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left === null && node.right === null) {
                return ret;
            }
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        ret++;
    }
    return ret;
}

// 递归解法
const minDepth = (root) => {
    if (root === null) {
        return 0;
    }
    let ret = Infinity;
    if (root.left) {
        ret = Math.min(minDepth(root.left) + 1, ret)
    }
    if (root.right) {
        ret = Math.min(minDepth(root.right) + 1, ret)
    }
    if (root.left && root.right == null) {
        ret = 1
    }
    return ret;
}
// @lc code=end

