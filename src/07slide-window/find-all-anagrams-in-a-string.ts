/*
 * @Description: 找到字符串中所有字母异位词
 * @Author: Moriaty
 * @Date: 2020-09-20 23:41:25
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-20 23:59:37
 */
/*
 * @Description: 无重复字符的最长子串
 * @Author: Moriaty
 * @Date: 2020-09-15 08:26:15
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-20 23:59:29
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
function findAnagrams(s: string, p: string): number[] {
  const indexArr: number[] = [];
  if (s === null || p === null || s.length < p.length) return indexArr;
  // 声明窗口数组pArr和目标串数组sArr
  const pArr: number[] = Array(26).fill(0);
  const sArr: number[] = Array(26).fill(0);
  const aUnicode:number = 'a'.charCodeAt(0);
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
};
console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
