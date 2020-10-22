"use strict";
/*
 * @Description: 最后一个单词的长度
 * @Author: Moriaty
 * @Date: 2020-09-05 20:40:51
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-22 23:22:40
 */
/**
 * 示例 1:
 *    输入: "Hello World"
      输出: 5
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/length-of-last-word
 */
/**
 * @description: 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
 *               如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
 *               如果不存在最后一个单词，请返回 0 。
 *               说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串
 * @param {string} s 字符串
 * @return {number} 最后一个单词的长度
 */
function lengthOfLastWord(s) {
    if (!s.match(/[a-zA-Z]/)) {
        // 如果不包含字母
        return 0;
    }
    /**
     *  1.filer(Boolean)的原因是过滤掉空字符串''
     *  2.取第一个的长度
     */
    return s.split(' ').filter(Boolean).reverse()[0].length;
}
;
function lengthOfLastWord1(s) {
    // 声明数量
    let count = 0;
    let i = s.length - 1;
    // 从后往前遍历
    while (i >= 0) {
        // 如果是' '则跳过
        while (s[i] === ' ') {
            --i;
        }
        // 直到遇到第一个不是' '，到下一次遇到' '跳出
        while (s[i] !== ' ') {
            ++count;
            --i;
        }
        // 如果cout不等于0，则找到该单词 跳出
        if (count !== 0) {
            break;
        }
    }
    return count;
}
;
console.log(lengthOfLastWord('a'));
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord1('a'));
console.log(lengthOfLastWord1('Hello World'));
