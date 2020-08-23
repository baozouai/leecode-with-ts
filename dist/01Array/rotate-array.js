"use strict";
/*
 * @Description: 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数
 * @Author: Moriaty
 * @Date: 2020-08-19 14:47:04
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-19 15:49:07
 */
/**
 * example1:
 *   输入: [1,2,3,4,5,6,7] 和 k = 3
 *   输出: [5,6,7,1,2,3,4]
 *   解释:
 *   向右旋转 1 步: [7,1,2,3,4,5,6]
 *   向右旋转 2 步: [6,7,1,2,3,4,5]
 *   向右旋转 3 步: [5,6,7,1,2,3,4]
 *   示例 2:
 *
 *   输入: [-1,-100,3,99] 和 k = 2
 *   输出: [3,99,-1,-100]
 *   解释:
 *   向右旋转 1 步: [99,-1,-100,3]
 *   向右旋转 2 步: [3,99,-1,-100]
 *  说明:
 *   所有输入只包含小写字母 a-z
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/rotate-array
 */
/**
 * @description: 翻转数组
 * @param {number[]}  nums 待翻转的数组
 * @param {number}  start 起始索引
 * @param {number}  end 结尾索引
 */
function reverse(nums, start = 0, end = nums.length - 1) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        ++start;
        --end;
    }
}
;
function rotate(nums, k) {
    reverse(nums);
    reverse(nums, 0, k % nums.length - 1);
    reverse(nums, k % nums.length);
}
rotate([1, 2, 3, 4, 5, 6, 7], 3);
