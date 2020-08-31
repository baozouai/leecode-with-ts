/*
 * @Description: 三角形最小路径和
 * @Author: Moriaty
 * @Date: 2020-08-31 13:31:02
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-31 13:42:05
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
  // 1.如果是空数组则返回0
  // 2.如果数组长度为1，则返回第一个元素
  if ([0, 1].indexOf(triangle.length) !== -1) {
      return 0 || triangle[0][0];
  }
  // 创建动态数组
  let dp: number[] = [triangle[0][0],];
  // 从第二行开始遍历
  for (let i = 1; i < triangle.length; ++i) {
      // 新动态数组置空
      const newDp:number[] = [];
      // 遍历第i行的每个元素
      for (let j = 0; j < triangle[i].length; ++j) {
        /**
         * 第i行每个元素最小路径和为:
         *  1.j === 0, 只能取上一行第0个元素 即triangle[i][j] + dp[0];
         *  2.j === i, 只能取上一行第j - 1个元素 即triangle[i][j] + dp[j - 1];
         *  3.other, triangle[i][j] + min(dp[j - 1], dp[j]);
         */
          let preNum;
          switch (j) {
              case 0:
                  preNum = dp[j];
                  break;
              case i:
                  preNum = dp[j - 1];
                  break;
              default:
                  preNum = Math.min(...dp.slice(j - 1, j + 1));
                  break;
          }
          newDp.push(triangle[i][j] + preNum);
      }
      // 将新的代替旧的
      dp = [...newDp];
  }
  // 获取最小值
  return Math.min(...dp);
};
console.log(minimumTotal([
           [2],
          [3,4],
         [6,5,7],
        [4,1,8,3]
      ])); // 11