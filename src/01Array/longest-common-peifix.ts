/*
 * @Description: 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，则返回""
 * @Author: Moriaty
 * @Date: 2020-08-18 08:39:32
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-19 09:16:02
 */

/**
 * example1: 
 *   输入: ["flower","flow","flight"]
 *   输出: "fl"
 * example2:
 *   输入: ["dog","racecar","car"]
 *   输出: ""
 *  说明:
 *   所有输入只包含小写字母 a-z
 */

/**
 * @description: 
 * @param {string[]}  strArr 字符串数组
 * @return {string}  prefix 最长公共前缀
 */

function longgestCommonPrefix(strArr: string[]): string {
  if (strArr.length === 0) return '';
  // 先将最长公共前缀赋值为第一个
  let prefix = strArr[0];
  // 从第二个开始遍历
  let i = 1;
  while (i < strArr.length) {
    // 第i个如果不包含该前缀，则将前缀的末尾-1
    while (strArr[i].indexOf(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      // 每次-1后如果是空字符串，则直接返回
      if (prefix === '') {
        return prefix;
      }
    }
    // 如果包含，则指针指向下一个
    ++i;
  }
  return prefix;
};
console.log(longgestCommonPrefix(["flower", "flow", "flight"]));

console.log(longgestCommonPrefix(["dog", "racecar", "car"]))
console.log(longgestCommonPrefix(["c","acc","ccc"]))
