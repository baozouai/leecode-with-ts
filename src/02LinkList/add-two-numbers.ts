/*
 * @Description: 两数相加
 *         给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *         如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *         您可以假设除了数字 0 之外，这两个数都不会以 0 开头
 * @Author: Moriaty
 * @Date: 2020-08-25 20:36:55
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-25 20:42:12
 */

/**
 * 示例 1:
 *
 *    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *    输出：7 -> 0 -> 8
 *    原因：342 + 465 = 807  
 *   来源：力扣（LeetCode）
 *   链接：https://leetcode-cn.com/problems/add-two-numbers/
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
 * @param { ListNode | null} l1
 * @param { ListNode | null} l2
 * @return {ListNode | null} 两数相加结果
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let newPreHead:ListNode = new ListNode();
    // 声明哨兵节点，只做最后返回的作用
    const result:ListNode = newPreHead;
    // tmp: 携带进位的值到下一位的运算
    let temp = 0;
    while (l1 || l2 || temp) {
        if (l1) {
            temp += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            temp += l2.val;
            l2 = l2.next;
        }
        // 两数以及进位相加的余数生成新的节点
        newPreHead.next = new ListNode(temp % 10);
        // 取除数
        temp = Math.floor(temp / 10);
        newPreHead = newPreHead.next;
    }
    return result.next;
};