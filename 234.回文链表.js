/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 题解:
 * 利用链表的后续遍历，使用函数调用栈作为后序遍历栈，来判断是否回文
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let left = head;
    function traverse(right) {
        if (right === null) return true;
        traverse(right.next);
        res = res && left.val === right.val;
        left = left.next;
        return res;
    }
    traverse(head);
}
// @lc code=end

