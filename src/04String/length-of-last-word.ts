/*
 * @Description: 最后一个单词的长度
 * @Author: Moriaty
 * @Date: 2020-09-05 20:40:51
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-05 20:48:47
 */

/**
 * 示例 1:
 *    输入: "Hello World"
      输出: 5  
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/length-of-last-word
 */

/**
 * @description: 给定两个字符串, A 和 B。A 的旋转操作就是将 A 最左边的字符移动到最右边。 
 *               例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。
 *               如果在若干次旋转操作之后，A 能变成B，那么返回True
 * @param {string[]} A 字符串
 * @param {string[]} B 字符串
 * @return {boolean} 若干次旋转操作之后，A是否等于B
 */
function lengthOfLastWord(s: string): number {
  if (!s.match(/[a-zA-Z]/)) {
    // 如果不包含字母
    return 0;
  }
  /**
   *  1.filer(Boolean)的原因是过滤掉空字符串''
   *  2.取第一个的长度
   */
  return s.split(' ').filter(Boolean).reverse()[0].length;
};
function lengthOfLastWord1(s: string): number {
  // 声明数量
  let count:number = 0;
  let i:number = s.length - 1;
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
};
console.log(lengthOfLastWord('a'));
console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord1('a'));
console.log(lengthOfLastWord1('Hello World'));