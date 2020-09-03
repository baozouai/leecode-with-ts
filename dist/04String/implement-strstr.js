"use strict";
/*
 * @Description: 实现 strStr()
 * @Author: Moriaty
 * @Date: 2020-09-02 23:54:31
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-03 08:31:19
 */
/**
 * 示例 1:
 *
 *    输入: haystack = "hello", needle = "ll"
 *    输出: 2
 * 示例 2:
 *
 *    输入: haystack = "aaaaa", needle = "bba"
 *    输出: -1
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/implement-strstr
 */
/**
 * @description: 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 *                如果不存在，则返回  -1
 * @param {string} haystack 字符数组
 * @param {string} needle 模式串
 * @return {number} 模式串在主串中的第一个位置
 */
function strStr(haystack, needle) {
    // 获取主串与模式串的长度
    const originLength = haystack.length;
    const aimLength = needle.length;
    if (originLength < aimLength) {
        return -1;
    }
    // 声明主串与模式串的索引
    let originIndex = 0;
    let aimIndex = 0;
    // 当模式串未比较到最后一位
    while (aimIndex < aimLength) {
        // 当主串比较到最后一位 则不匹配
        if (originIndex > originLength - 1) {
            return -1;
        }
        if (haystack[originIndex] === needle[aimIndex]) {
            // 相同则一直++
            ++originIndex;
            ++aimIndex;
        }
        else {
            /**
             *  否则计算主串中位于模式串后面的第一个元素的索引
             *  originIndex - aimIndex为回溯到模式串在主串的第一个位置
             *  再+ aimLength则是得到主串中位于模式串后面的第一个元素的索引
             * */
            const nextCharIndex = originIndex - aimIndex + aimLength;
            // 判断该索引是否已超出主串
            if (nextCharIndex < originLength) {
                // 获取该索引对应元素在模式串最右的索引
                const rightestIndex = needle.lastIndexOf(haystack[nextCharIndex]);
                // 如果存在
                if (rightestIndex !== -1) {
                    /**
                     * 移动模式串最右即rightestIndex对应元素到主串nextCharIndex对应元素的位置
                     *  这个时候originIndex则与模式串第一个对齐
                     * */
                    originIndex = nextCharIndex - rightestIndex;
                }
                else {
                    // 没有则主串跳到该索引的下一位
                    originIndex = nextCharIndex + 1;
                }
            }
            else {
                // 超出则直接不匹配
                return -1;
            }
            // 有一个不匹配则模式串总是回溯到第一个开始匹配
            aimIndex = 0;
        }
    }
    // 返回模式串在主串中的第一个位置
    return originIndex - aimIndex;
}
;
console.log(strStr('hello', 'lld'));
console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
