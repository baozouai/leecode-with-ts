/*
 * @Description: 旋转字符串
 * @Author: Moriaty
 * @Date: 2020-09-05 20:18:47
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-05 20:24:57
 */

/**
 * 示例 1:
 *    输入: A = 'abcde', B = 'cdeab'
 *    输出: true
 *    
 * 示例 2:
 *    输入: A = 'abcde', B = 'abced'
 *    输出: false
 *    
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/rotate-string
 */

/**
 * @description: 给定两个字符串, A 和 B。A 的旋转操作就是将 A 最左边的字符移动到最右边。 
 *               例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。
 *               如果在若干次旋转操作之后，A 能变成B，那么返回True
 * @param {string[]} A 字符串
 * @param {string[]} B 字符串
 * @return {boolean} 若干次旋转操作之后，A是否等于B
 */
// 暴力法
function rotateString(A: string, B: string): boolean {
  if (A === B) {
    return true;
  }
  let tempStr: string = A;
  for (let i = 0; i < tempStr.length; ++i) {
    tempStr = tempStr.slice(1) + tempStr[0];
    if (tempStr === B) {
      return true;
    }
  }
  return false;
};
function rotateString1(A: string, B: string): boolean {
  /**
    *  1长度不等直接false
    *  2.A翻转最大字数为自身长度，中间出现情况为A + A的子串，故判断B是否是A + A的子串
    */
  return (A.length === B.length) && (A + A).includes(B);
};
console.log(rotateString('abcde',  'cdeab'));
console.log(rotateString('abcde', 'abced'));
console.log(rotateString1('abcde',  'cdeab'));
console.log(rotateString1('abcde', 'abced'));