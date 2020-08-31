/*
 * @Description: 最小路径和
 * @Author: Moriaty
 * @Date: 2020-08-31 22:13:36
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-31 22:18:58
 */

/**
 * 输入:
 *  [
 *    [1,3,1],
 *    [1,5,1],
 *    [4,2,1]
 *  ]
 *  输出: 7
 *  解释: 因为路径 1→3→1→1→1 的总和最小
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/minimum-path-sum
 */

/**
 * @description: 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *                 说明：每次只能向下或者向右移动一步。
 * @param {number[][]} grid 非负整数的 m x n 网格
 * @return {number} 最小路径和
 */
function minPathSum(grid: number[][]): number {
  // 获取行数
  const rows: number = grid.length;
  if (rows === 0) {
      return 0;
  }
  const dp: number[][] = Array(rows).fill([]);
  // 初始条件
  dp[0][0] = grid[0][0];
  const columns = grid[0].length;
  for (let i = 0; i < rows; ++i) {
      for (let j = 0; j < columns; ++j) {
        // 第一行的dp[0][j] = 第j个grid元素和前一个最小路径
          if (i === 0 && j !== 0) {
              dp[0][j] = grid[i][j] + dp[i][j - 1];
          } else if (i !== 0 && j === 0) {
              // 每行第一个只能取上一行第一个与该位元素相加
              dp[i][0] = grid[i][0] + dp[i - 1][0];
          } else if (i !== 0 && j !== 0) {
              // 否则去左侧和上面最小路径的最小值，再加上该位元素
              dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }
  // 返回最底部最右侧的最小路径
  return dp[rows - 1][columns - 1];
};
console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
])); // 7