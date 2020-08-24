/*
 * @Description: 合并两个有序链表
 *              将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * @Author: Moriaty
 * @Date: 2020-08-24 19:29:06
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-24 19:30:56
 */

/**
 * 示例 1:
 *
 *    输入：1->2->4, 1->3->4
 *    输出：1->1->2->3->4->4
 *    
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let preHead: ListNode = new ListNode();
  const result:ListNode = preHead;
  while (l1 && l2) {
      /**
       * preHead.next指向较小的一个
       * 较小的一个移动指针
       */
      if (l1.val > l2.val) {
          preHead.next = l2;
          l2 = l2.next;
      } else {
          preHead.next = l1;
          l1 = l1.next;
      }
      // 移动preHead
      preHead = preHead.next
  }
  // l1 或者l2还有剩下的则直接连上
  if (l1) {
      preHead.next = l1;
  }
  if (l2) {
      preHead.next = l2;
  }
  return result.next;
};