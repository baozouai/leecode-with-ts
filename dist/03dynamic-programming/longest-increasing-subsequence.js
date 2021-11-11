"use strict";
/*
 * @Description: 最长上升子序列
 * @Author: Moriaty
 * @Date: 2020-08-31 09:30:41
 * @Last modified by: Moriaty
 * @LastEditTime: 2021-11-11 12:57:53
 */
/**
 * 输入: [10,9,2,5,3,7,101,18]
    输出: 4
    解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */
/**
 * @description: 1.如果num[i]都比前面的元素小，则dp[i] = 1;
 *               2.如果前面存在着比nums[i]小的元素如nums[a], nums[b]...,取对应索引dp的值的最大值+1如c，dp[i]取dp[i]与c的最大值
 * @param {number[]} nums 上升序列
 * @return {number} 最长上升子序列的长度
 */
function lengthOfLIS(nums) {
    if (!nums.length) {
        return 0;
    }
    // 第一个元素的上升子序列为1
    const dp = [1];
    for (let i = 1; i < nums.length; ++i) {
        dp[i] = 1;
        // 比较前面元素
        for (let j = 0; j < i; ++j) {
            // 如果前面存在着比nums[i]小的元素，取两者dp的最大值，赋值给dp[i]
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }
    // 返回最长上升子序列的长度
    return Math.max.apply(null, dp);
}
;
