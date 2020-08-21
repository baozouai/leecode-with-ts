"use strict";
/*
* @Description:
*    将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
*    比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
*
*   L   C   I   R
*   E T O E S I I G
*   E   D   H   N
*
*   之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
*
*   请你实现这个将字符串进行指定行数变换的函数：
*
*   string convert(string s, int numRows);
* @Author: Moriaty
* @Date: 2020-08-21 23:39:05
* @Last modified by: Moriaty
 * @LastEditTime: 2020-08-21 23:47:04
*/
/**
* 示例 1:
*
*    输入: s = "LEETCODEISHIRING", numRows = 3
*    输出: "LCIRETOESIIGEDHN"
*
* 示例 2:
*
*    输入: s = "LEETCODEISHIRING", numRows = 4
*    输出: "LDREOEIIECIHNTSG"
*    解释:
*
*    L     D     R
*    E   O E   I I
*    E C   I H   N
*    T     S     G
*
*  来源：力扣（LeetCode）
*  链接：https://leetcode-cn.com/problems/zigzag-conversion
*
*/
/**
 * @description: 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列
 * @param {string}  s 给定字符串
 * @param {number}  numRows 给定的行数
 * @return {string}  新的字符串
 */
// 第一种方法
function convert(s, numRows) {
    if (numRows === 1)
        return s;
    const strArr = Array(numRows).fill('');
    // 周期为2 * numRows - 2
    const period = 2 * numRows - 2;
    for (let i = 0; i < s.length; ++i) {
        // 取模
        const mod = i % period;
        // 如果模小于numRows 则正向走（规定向下为正） 否则反向
        const index = mod < numRows ? mod : period - mod;
        strArr[index] += s[i];
    }
    // 第二种方法
    return strArr.join('');
}
;
// 第二种方法
function convert1(s, numRows) {
    if (numRows === 1)
        return s;
    const strArr = Array(numRows).fill('');
    let i = 0;
    let flag = -1;
    for (let j = 0; j < s.length; ++j) {
        strArr[i] += s[j];
        // 到头和尾加完就转向
        if (i === 0 || i === numRows - 1)
            flag = -flag;
        i += flag;
    }
    return strArr.join('');
}
;
console.log(convert("PAYPALISHIRING", 3));
