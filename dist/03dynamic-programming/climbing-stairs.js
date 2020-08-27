"use strict";
/*
 * @Description: 爬楼梯
 *         假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *         每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *         注意：给定 n 是一个正整数。
 * @Author: Moriaty
 * @Date: 2020-08-25 20:36:55
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-27 08:46:06
 */
/**
 * 示例 1:
 *
 *    输入： 2
 *     输出： 2
 *     解释： 有两种方法可以爬到楼顶。
 *     1.  1 阶 + 1 阶
 *     2.  2 阶
 * 示例 2：
 *
 *     输入： 3
 *     输出： 3
 *     解释： 有三种方法可以爬到楼顶。
 *     1.  1 阶 + 1 阶 + 1 阶
 *     2.  1 阶 + 2 阶
 *     3.  2 阶 + 1 阶
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/climbing-stairs
 */
/**
 * @description: dp[n]=dp[n-1]+dp[n-2]
 * @param {number} n
 * @return {number} 到第n阶方法数
 */
function climbStairs(n) {
    const result = [1, 2];
    for (let i = 2; i < n; ++i) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result[n - 1];
}
;
