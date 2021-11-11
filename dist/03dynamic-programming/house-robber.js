"use strict";
/*
 * @Description: 打家劫舍
 * @Author: Moriaty
 * @Date: 2020-09-01 13:53:47
 * @Last modified by: Moriaty
 * @LastEditTime: 2021-11-11 15:36:36
 */
/**
 * 给定三角形：
 *
 *    [
 *         [2],
 *        [3,4],
 *       [6,5,7],
 *      [4,1,8,3]
 *    ]
 *    自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/house-robber
 */
/**
 * @description: 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 *               如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，
 *                一夜之内能够偷窃到的最高金额
 * @param {number[][]} nums 沿街的每一间房屋的金额
 * @return {number} 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额
 */
function rob(nums) {
    const length = nums.length;
    // 如果只有一间房屋，则返回第一个，数量为0则nums[0]为undefined，则返回0
    if ([1, 0].indexOf(length) !== -1) {
        return nums[0] || 0;
    }
    /**
     *  构造动态数组：
     *    1. dp[0] = nums[0];
     *    2. dp[1] = nums[0]和nums[1]的最大值 如果两间，由于不能相邻，则取两者最大值
     *    3. index > 1 dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
     *      index > 1,当到达第index间，到达时能偷窃的最大值为（index - 2与index的金额）与index - 1两者中的最大值
     */
    // 对应上述1、2情况
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < length; ++i) {
        // 对应上述第3种情况
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    // 返回最大值
    return dp[length - 1];
}
;
console.log(rob([1, 2, 3, 1])); // 4
