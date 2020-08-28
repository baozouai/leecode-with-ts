/*
 * @Description: 最大子序和
 *               给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @Author: Moriaty
 * @Date: 2020-08-28 08:57:04
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-28 09:00:25
 */

/**
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 *     输出: 6
 *     解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/maximum-subarray
 */

/**
 * @description: dp[n]=max(dp[n-1]+nums[n]) dp[0] = nums[0]
 * @param {number[]} nums 整数数组
 * @return {number} 最大子序和
 */
function maxSubArray(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  const maxSubSumArr: number[] = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    maxSubSumArr.push(Math.max(nums[i], nums[i] + maxSubSumArr[i - 1]));
  }
  // 从大到小排序
  maxSubSumArr.sort((x: number, y: number): number => y - x);
  return maxSubSumArr[0];
};