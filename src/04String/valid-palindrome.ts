/*
 * @Description: 验证回文串
 * @Author: Moriaty
 * @Date: 2020-09-05 11:56:34
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-05 12:17:14
 */

/**
 * 示例 1:
 *  
 *  输入: "A man, a plan, a canal: Panama"
 *  输出: true
 * 示例 2:
 *  
 *  输入: "race a car"
 *  输出: false
 *  
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/valid-palindrome
 */

/**
 * @description: 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *               说明：本题中，我们将空字符串定义为有效的回文串
 * @param {string[]} s 字符串
 * @return {boolean} 是否是回文串
 */
function isPalindrome(s: string): boolean {
  /**
   * 1.先全部转换小写
   * 2.replace掉全部非数字|字母的
   */
  let tempStr:string = s.toLowerCase().replace(/[^0-9a-z]/g, '');
  // 判断正序与反序是否相同
  return tempStr === tempStr.split('').reverse().join('');
};
function isPalindrome1(s: string): boolean {
  // 先全部转换小写
  let tempStr:string = s.toLowerCase();
  // 声明左右指针
  let i = 0, j = tempStr.length - 1;
  const reg = new RegExp(/[0-9a-z]/);
  while (i < j) {
      // 不是0-9，a-z则跳过
      while (!(reg.test(tempStr[i]))) ++i;
      while (!(reg.test(tempStr[j]))) --j;
      // 有一个不相等则false
      if (tempStr[i++] !== tempStr[j--]) {
          return false;
      }
  }
  // 已经比较完
  return true;
};
function isPalindrome2(s: string): boolean {
  // 先全部转换小写
  let tempStr:string = s.toLowerCase();
  // 声明左右指针
  let i = 0, j = tempStr.length - 1;
  while (i < j) {
      // 不是0-9，a-z则跳过
      while (!((tempStr[i] >= '0' && tempStr[i] <= '9') || (tempStr[i] >= 'a' && tempStr[i] <= 'z'))) ++i;
      while (!((tempStr[j] >= '0' && tempStr[j] <= '9') || (tempStr[j] >= 'a' && tempStr[j] <= 'z'))) --j;
      // 有一个不相等则false
      if (tempStr[i++] !== tempStr[j--]) {
          return false;
      }
  }
  // 已经比较完
  return true;
};
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome1('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome1('race a car')); // false
console.log(isPalindrome2('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome2('race a car')); // false