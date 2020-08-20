/*
 * @Description: 
 *     给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *     最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *     你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @Author: Moriaty
 * @Date: 2020-08-20 08:18:04
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-20 08:50:22
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
function twoSum(nums: number[], target: number): number[] {
    if (nums.length < 2) {
        return [];
    }
    // 声明一个哈希表 存储nums的value => index
    const map: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; ++i) {
        // 计算差值
        const minusValue = target - nums[i];
        // 如果差值在哈希表中,表示该差值对应索引以及i即为答案
        if (minusValue in map) {
            return [map[minusValue], i];
        }
        // 否则，存储nums的value => index
        map[nums[i]] = i;
    }
    return []
};
console.log(twoSum([2, 7, 11, 15], 9))