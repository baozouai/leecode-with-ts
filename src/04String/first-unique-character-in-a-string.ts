/*
 * @Description: 字符串中的第一个唯一字符
 * @Author: Moriaty
 * @Date: 2020-09-01 20:37:45
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-22 23:15:01
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
function firstUniqChar(s: string): number {

  for (let i = 0; i < s.length; ++i) {
    // 第一个和最后一个的索引都相等即为第一个不重复的字符
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
// 第二张方法
function firstUniqChar1(s: string): number {
  // 声明一个哈希表，存放s每个字符及其索引
  const map: { [key: string]: number } = {};
  const len:number = s.length;
  for (let i = 0; i < len; ++i) {
    map[s[i]] = i;
  }
  for (let i = 0; i < len; ++i) {
    const character:string = s[i]; 
    if (map[character] === i) {
      return i;
    } else {
      /**
       * 这里防止出现'cc', 而导致{c: 1}
       * 从而上面的map[character] === i为true
       *  故z只要出现map[character] !== i 则map[character]设为-1
       * */
      map[character] = -1;
    }
  }
  return -1;
}
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar1("leetcode")); // 0
console.log(firstUniqChar1("cc")); // -1