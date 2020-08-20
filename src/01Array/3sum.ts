/*
 * @Description: 
 *     给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *     最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *     你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @Author: Moriaty
 * @Date: 2020-08-20 08:18:04
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-20 09:23:54
 */


/**
 * 示例 1:
 *
 *    给定 nums = [2, 7, 11, 15], target = 9
 *
 *    因为 nums[0] + nums[1] = 2 + 7 = 9
 *    所以返回 [0, 1]
 *    
 *    来源：力扣（LeetCode）
 *    链接：https://leetcode-cn.com/problems/two-sum
 */

/**
 * @description: 给定一个整数数组 nums 和一个目标值 target，找出和为目标值的那 两个 整数，并返回他们的数组下标
 * @param {number[]}  nums 待查找的整数数组 nums
 * @param {number}  target 目标值 
 * @return {number[]}  和为目标值的两个整数的数组下标
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