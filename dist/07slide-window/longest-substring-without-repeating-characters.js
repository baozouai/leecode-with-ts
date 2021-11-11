"use strict";
/*
 * @Description: 无重复字符的最长子串
 * @Author: Moriaty
 * @Date: 2020-09-15 08:26:15
 * @Last modified by: Moriaty
 * @LastEditTime: 2021-09-28 14:57:53
 */
/**
* 示例 1:
*
*   输入: "abcabcbb"
*   输出: 3
*   解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
* 示例 2:
*
*   输入: "bbbbb"
*   输出: 1
*   解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
* 示例 3:
*
*   输入: "pwwkew"
*   输出: 3
*   解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
*      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
*
* 来源：力扣（LeetCode）
* 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
*/
/**
 * @description: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s 字符串
 * @return {number} 字符串
 */
function lengthOfLongestSubstring(s) {
    // 双指针法
    let maxSubLengh = 0, left = 0, right = 0;
    const length = s.length;
    // 声明一个窗口
    let windows = [];
    while (left < length && right < length) {
        const index = windows.indexOf(s[right]);
        // ~-1 === 0
        if (!~index) {
            // 如果窗口中没有该元素，则加入窗口，并扩大窗口
            windows.push(s[right]);
            ++right;
            // 取最大值
            maxSubLengh = Math.max(maxSubLengh, right - left);
        }
        else {
            // 否则将该元素及其左侧元素剔除出窗口，缩小窗口
            windows = windows.slice(index + 1);
            // 移动左指针
            left += index + 1;
        }
    }
    return maxSubLengh;
}
;
function lengthOfLongestSubstring1(s) {
    // 双指针法
    let maxSubLengh = 0, left = 0, right = 0;
    const length = s.length;
    // 声明map用于存放s每一个字符 s[index] => index + 1
    const map = {};
    while (right < length) {
        const character = s[right];
        // 如果元素已在map中，则left跳到该元素的下一个元素
        if (character in map) {
            left = Math.max(map[character], left);
        }
        // 计算最大值
        maxSubLengh = Math.max(maxSubLengh, right - left + 1);
        // 存储元素s[index] => index + 1
        map[character] = right + 1;
        ++right;
    }
    return maxSubLengh;
}
;
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
