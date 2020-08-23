"use strict";
/*
 * @Description:
 *     给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *     最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *     你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @Author: Moriaty
 * @Date: 2020-08-19 22:10:28
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-19 22:16:42
 */
/**
 * 示例 1:
 *
 *    输入: [1,2,3]
 *    输出: [1,2,4]
 *    解释: 输入数组表示数字 123。
 *
 * 示例 2:
 *    输入: [4,3,2,1]
 *    输出: [4,3,2,2]
 *    解释: 输入数组表示数字 4321。
 *
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/plus-one
 */
/**
 * @description: 加1
 * @param {number[]}  nums 待翻转的数组
 * @param {number}  start 起始索引
 * @param {number}  end 结尾索引
 */
function plusOne(digits) {
    // 进位初始为0
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; --i) {
        digits[i] += carry;
        // 加上进位后置零
        carry = 0;
        // 个位+1
        if (i === digits.length - 1) {
            digits[i] += 1;
        }
        // 如果该位为10，则进位置为1
        if (digits[i] === 10) {
            carry = 1;
            // 同时取余 如该位10 则取余后该位为0
            digits[i] %= 10;
        }
    }
    // 最后判断进位是否为1 如[9,9] =>  99 + 1 => [1, 0, 0], [9, 8] 98 + 1 => [9, 9];
    return carry === 1 ? [1, ...digits] : digits;
}
;
