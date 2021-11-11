/*
 * @Description: 三角形最小路径和
 * @Author: Moriaty
 * @Date: 2020-08-31 13:31:02
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-31 15:08:38
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
 *  链接：https://leetcode-cn.com/problems/triangle
 */

/**
 * @description: 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 *                相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * @param {number[][]} triangle 三角形整数数组
 * @return {number} 三角形最小路径和
 */
function minimumTotal(triangle: number[][]): number {
  // 获取行数
  const rows: number = triangle.length;
  switch (rows) {
    // 1.如果是空数组则返回0
    case 0:
      return 0;
    // 2.如果数组长度为1，则返回第一个元素
    case 1:
      return triangle[0][0];
    default:
      break;
  }
  // 创建动态数组
  const dp: number[][] = [triangle[0]];
  // 从第二行开始遍历
  for (let i = 1; i < rows; ++i) {
    // 遍历第i行的每个元素
    for (let j = 0; j < triangle[i].length; ++j) {
      /**
       * 第i行每个元素最小路径和为:
       *  1.j === 0, 只能取上一行第0个元素 即triangle[i][j] + dp[i - 1][j];
       *  2.j === i, 只能取上一行第j - 1个元素 即triangle[i][j] + dp[j - 1];
       *  3.other, triangle[i][j] + min(dp[j - 1], dp[j]);
       */
      let preNum;
      switch (j) {
        case 0:
          preNum = dp[i - 1][j];
          break;
        case i:
          preNum = dp[i - 1][j - 1];
          break;
        default:
          preNum = Math.min(...dp[i - 1].slice(j - 1, j + 1));
          break;
      }
      dp[i][j] = triangle[i][j] + preNum
    }
  }
  // 获取最小值
  return Math.min.apply(null, dp[dp.length - 1]);
};
console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
])); // 11