/*
 * @Description: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
 * @Author: Moriaty
 * @Date: 2020-08-23 09:00:21
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-23 09:06:08
 */

/**
 * 示例 1:
 *
 *    给定一个链表: 1->2->3->4->5, 和 n = 2. 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *    
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
/**
 * @description: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
 * @param {ListNode | null}  head 链表的头结点
 * @param {number}  n 删除链表的倒数第 n 个节点
 * @return {ListNode | null}  返回链表的头结点
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || n <= 0) return head;

  // 声明快慢指针
  let fastPointer: ListNode | null = head;
  let slowPointer: ListNode | null = head;
  // 快指针先走n步 如输入[1,2,3,4,5],n = 2,则fastPointer会走到3
  while (n > 0 && fastPointer) {
    fastPointer = fastPointer.next;
    --n;
  }
  // 避免输入[1],n=1,上面while循环使fastPointer走到尾部的下一个null，则输出得为head.next,即null
  if (!fastPointer) return head.next;
  // 这里执行后下面就不用执行while (fastPointer && fastPointer.next && slowPointer)
  fastPointer = fastPointer.next
  // 快慢指针同时走，直到快指针指向尾部的下一个(即fastPointer => null)
  // 这里感觉 （&& slowPointer）是不用加的，因为快指针都不为空，慢指针肯定不为空，但是不加leecode无法通过
  while (fastPointer && slowPointer) {
    fastPointer = fastPointer.next;
    slowPointer = slowPointer.next;
  }
  // 这里感觉是是没必要加的，但是不加leecode无法通过
  if (slowPointer && slowPointer.next) {
    // slowPointer走到要删除节点的前一个节点，则前一个节点的next指向删除节点的next，则释放掉删除节点
    slowPointer.next = slowPointer.next.next;
  }
  return head;
};