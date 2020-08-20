/*
 * @Description: 
 *     给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 *     注意：答案中不可以包含重复的三元组。
 * @Author: Moriaty
 * @Date: 2020-08-20 09:06:06
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-20 09:30:39
 */

/**
 * 示例 1:
 *
 *    给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *      
 *      满足要求的三元组集合为：
 *      [
 *        [-1, 0, 1],
 *        [-1, -1, 2]
 *      ]
 *      
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/3sum
 */

/**
 * @description: 包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组
 * @param {number[]}  nums 待查找的整数数组 nums
 * @return {number[][]} targetArr 所有满足条件且不重复的三元组
 */
function threeSum(nums: number[]): number[][] {
    let targetArr: number[][] = [];
    // 先排序 从小到大
    nums.sort((x: number, y: number): number => x - y);
    for (let i: number = 0; i < nums.length; ++i) {
        // 如果第一个大于0，则跳出
        if (nums[i] > 0) break;
        // 计算差值
        const target = 0 - nums[i];
        // 设置左右指针
        let left: number = i + 1;
        let right: number = nums.length - 1;
        // 1.固定值为第一个(不会出现重复问题)
        // 2.下一个固定值不等于上一个固定值的时候（即固定值重复则跳过，否则结果会出现重复，即[ [ -1, -1, 2 ], [ -1, 0, 1 ], [ -1, 0, 1 ] ]）
        if (i === 0 || nums[i] !== nums[i - 1]) {
            while (left < right) {
                const sum: number = nums[left] + nums[right];
                if (sum === target) {
                    targetArr.push([nums[i], nums[left], nums[right]]);
                    // 排除掉相等的元素
                    while (left < right && nums[left + 1] === nums[left]) ++left;
                    while (left < right && nums[right - 1] === nums[right]) --right;
                    ++left;
                    --right;
                } else {
                    // 和小于固定值，则++左指针（加大），否则--右指针（减小）
                    sum < target ? ++left : --right;
                }
            }
        }
    }
    return targetArr;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))