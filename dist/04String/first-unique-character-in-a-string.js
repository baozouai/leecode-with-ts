"use strict";
/*
 * @Description: 字符串中的第一个唯一字符
 * @Author: Moriaty
 * @Date: 2020-09-01 20:37:45
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-01 20:40:24
 */
/**
 * s = "leetcode"
 *  返回 0
 *
 *  s = "loveleetcode"
 *  返回 2
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
 */
/**
 * @description: 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1
 * @param {string[]} s 字符串
 * @return {number} 第一个不重复的字符的索引
 */
function firstUniqChar(s) {
    for (let i = 0; i < s.length; ++i) {
        // 第一个和最后一个的索引都相等即为第一个不重复的字符
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}
;
console.log(firstUniqChar("leetcode")); // 0
