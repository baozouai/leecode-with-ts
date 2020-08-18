"use strict";
/*
 * @Description: 给定两个数组，编写一个函数来计算它们的交集
 * @Author: Moriaty
 * @Date: 2020-08-18 08:35:26
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-18 09:21:39
 */
/**
 * example1:
 *   输入: nums1 = [1,2,2,1], nums2 = [2,2]
 *   输出: [2,2]
 * example2:
 *   输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *   输出: [4,9]
 */
function intersect(nums1 = [], nums2 = []) {
    const map = {};
    nums1.forEach((value) => {
        if (value in map) {
            map[value] += 1;
        }
        else {
            map[value] = 1;
        }
    });
    let k = 0;
    nums2.forEach((value) => {
        if (map[value] > 0) {
            map[value] -= 1;
            nums2[k++] = value;
        }
    });
    return nums2.slice(0, k);
}
/**
 * @description: 排序后再求交集
 * @param {array} nums1 数组1
 * @param {array} nums2 数组2
 * @return {array} nums1.slice(0, k) 交集
 */
function sortIntersect(nums1 = [], nums2 = []) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0, j = 0, k = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            nums1[k++] = nums1[i++];
            ++j;
        }
        else {
            nums1[i] > nums2[j] ? ++j : ++i;
        }
    }
    return nums1.slice(0, k);
}
console.log(sortIntersect([9, 4, 9, 8, 4, 1], [5, 4, 1, 9,]));
