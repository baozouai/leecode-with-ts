"use strict";
/*
 * @Description: 环形链表
 *              给定一个链表，判断链表中是否有环。
 *              为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 *              如果 pos 是 -1，则在该链表中没有环。
 * @Author: Moriaty
 * @Date: 2020-08-24 19:29:06
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-24 20:11:43
 */
/**
 * 示例 1:
 *
 *    输入：head = [3,2,0,-4], pos = 1
 *    输出：true
 *    解释：链表中有一个环，其尾部连接到第二个节点。
 * 示例 2：
 *
 *    输入：head = [1,2], pos = 0
 *    输出：true
 *    解释：链表中有一个环，其尾部连接到第一个节点。
 * 示例 3：
 *
 *     输入：head = [1], pos = -1
 *     输出：false
 *     解释：链表中没有环。
 *
 *   来源：力扣（LeetCode）
 *   链接：https://leetcode-cn.com/problems/linked-list-cycle
 */
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean} 是否环形
 */
var hasCycle = function (head) {
    // 第一张方法 JSON.strigify无法string循环结构
    // try {
    //     JSON.stringify(head)
    // } catch(e) {
    //     return true;
    // }
    // return false;
    // 第二种方法
    if (!head)
        return false;
    // 声明快慢指针 
    let fast = head.next;
    // 快指针走两步，慢指针走一步，如果是环形，快指针终将遇上慢指针
    while (fast && fast.next && head) {
        if (fast === head)
            return true;
        fast = fast.next.next;
        head = head.next;
    }
    // 不是环形则false
    return false;
};
