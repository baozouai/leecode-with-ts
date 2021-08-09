"use strict";
/*
 * @Description: 找到字符串中所有字母异位词
 * @Author: Moriaty
 * @Date: 2020-09-20 23:41:25
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-23 12:31:35
 */
/**
* 示例 1:
*
*   输入:
*   s: "cbaebabacd" p: "abc"
*
*   输出:
*   [0, 6]
*
*   解释:
*   起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
*   起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
* 示例 2:
*
*   输入:
*   s: "abab" p: "ab"
*
*   输出:
*   [0, 1, 2]
*
*   解释:
*   起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
*   起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
*   起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
*
*   来源：力扣（LeetCode）
*   链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
*/
/**
 * @description: 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，
 *               返回这些子串的起始索引。
 *               字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 *
 *               说明：
 *               1. 字母异位词指字母相同，但排列不同的字符串。
 *               2. 不考虑答案输出的顺序
 * @param {string} s 字符串
 * @param {string} p 非空字符串
 * @return {number[]} s 中所有是 p 的字母异位词的子串的起始索引
 */
function findAnagrams(s, p) {
    const indexArr = [];
    if (s === null || p === null || s.length < p.length)
        return indexArr;
    // 声明窗口数组pArr和目标串数组sArr
    const pArr = Array(26).fill(0);
    const sArr = Array(26).fill(0);
    const aUnicode = 'a'.charCodeAt(0);
    // 先将两个数组初始化p.length
    for (let i = 0; i < p.length; ++i) {
        pArr[p[i].charCodeAt(0) - aUnicode]++;
        sArr[s[i].charCodeAt(0) - aUnicode]++;
    }
    let i = 0, j = p.length;
    while (j < s.length) {
        // 如果两个数组元素相同，则记录索引
        if (pArr.join() === sArr.join()) {
            indexArr.push(i);
        }
        // 窗口最左侧元素即将移除，将对应元素数量--
        sArr[s[i++].charCodeAt(0) - aUnicode]--;
        // s[j]为即将移入窗口的元素，++1
        sArr[s[j++].charCodeAt(0) - aUnicode]++;
    }
    if (pArr.join() === sArr.join()) {
        indexArr.push(i);
    }
    return indexArr;
}
;
console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
