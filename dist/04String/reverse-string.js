"use strict";
/*
 * @Description: 反转字符串
 * @Author: Moriaty
 * @Date: 2020-09-01 20:34:56
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-01 20:41:34
 */
/**
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/reverse-string
 */
/**
 * @description: 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 *               不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 *               你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符
 * @param {string[]} s 字符数组
 */
function reverseString(s) {
    // 左右声明两指针
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        ++left;
        --right;
    }
}
;
console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
