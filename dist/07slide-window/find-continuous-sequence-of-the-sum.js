"use strict";
/*
 * @Description: 剑指 Offer 57 - II. 和为s的连续正数序列
 * @Author: Moriaty
 * @Date: 2020-09-20 23:41:25
 * @Last modified by: Moriaty
 * @LastEditTime: 2021-11-08 19:44:42
 */
/**
* 示例 1：
*
* 输入：target = 9
* 输出：[[2,3,4],[4,5]]
* 示例 2：
*
* 输入：target = 15
* 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
*
* 来源：力扣（LeetCode）
* 链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof
*/
/**
 * @description: 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 *               序列内的数字由小到大排列，不同序列按照首个数字从小到大排列
 * @param {number} target 目标值
 * @return {number[][]} 所有和为 target 的连续正整数序列
 */
function findContinuousSequence(target) {
    // 声明序列数组
    const result = [];
    // 声明1 ~ target - 1的正整数数组
    const intArr = [];
    for (let i = 1; i < target; ++i) {
        intArr.push(i);
    }
    // 初始化窗口值
    let windowValue = 0;
    // 由于target值必定小于其 中值及 中值 + 1，其中中值 = target / 2
    let i = 1, j = 1;
    while (i < target / 2) {
        // 如果窗口值小于目标值 移动窗口右侧
        if (windowValue < target) {
            windowValue += j++;
        }
        else if (windowValue > target) {
            // 缩小窗口，将窗口左侧收缩
            windowValue -= i++;
        }
        else {
            // 等于目标值 找到连续正序列
            result.push(intArr.slice(i - 1, j - 1));
            // 窗口左侧值移出窗口
            windowValue -= i++;
            windowValue += j++;
        }
    }
    return result;
}
;
console.log(findContinuousSequence(9));
console.log(findContinuousSequence(15));
