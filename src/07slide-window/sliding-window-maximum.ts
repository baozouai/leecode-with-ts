/*
 * @Description: 滑动窗口最大值
 * @Author: Moriaty
 * @Date: 2020-09-12 09:05:14
 * @Last modified by: Moriaty
 * @LastEditTime: 2021-08-10 12:59:08
 */

 /**
 * 示例1:
 *  
 *  输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
 *  输出: [3,3,5,5,6,7] 
 *  解释: 
 *  
 *    滑动窗口的位置                最大值
 *  ---------------               -----
 *  [1  3  -1] -3  5  3  6  7       3
 *   1 [3  -1  -3] 5  3  6  7       3
 *   1  3 [-1  -3  5] 3  6  7       5
 *   1  3  -1 [-3  5  3] 6  7       5
 *   1  3  -1  -3 [5  3  6] 7       6
 *   1  3  -1  -3  5 [3  6  7]      7
 *  
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/sliding-window-maximum
 */

/**
 * @description: 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 *               你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 *               返回滑动窗口中的最大值
 * @param {number[]} nums 数组 nums
 * @param {number} k 滑动窗口大小
 * @return {number[][]} 滑动窗口中的最大值
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
  // 声明最大滑动值数组
  const maxResult: number[] = [];
  // 数组不能为空，k也不能为0
  if (nums.length * k !== 0) {
    // 借助双头队列
    const queue:number[] = [];
    // 遍历nums
    nums.forEach((num, index, self) => {
      // 从第二个元素开始，将队列中元素小于当前元素的剔除
      while (index > 0 && queue.length && num > queue[queue.length - 1]) {
        queue.pop();
      }
      // 将当前元素加入队列
      queue.push(num);
      /**
       * (index - k)即滑动窗口前部的第一个值
       * 如[1, -1,1,-1]，k = 2
       * 当滑动窗口到达[-1,1],此时index为2，但队列的是[1,1](第一个元素和第三个元素)
       * 此时第一个元素以及在窗口外，要剔除
       */
      if (index >= k && self[index - k] === queue[0]) {
        queue.shift();
      }
      // 当nums索引大于等于 k - 1时，将队列第一个元素集最大值放入结果数组
      if (index >= k - 1) {
        maxResult.push(queue[0]);
      }
    })
  }
  return maxResult;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1, -1,1,-1], 2));
