"use strict";
/*
 * @Description: 给定两个数组，编写一个函数来计算它们的交集
 * @Author: Moriaty
 * @Date: 2020-08-18 08:35:26
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-08-18 18:07:28
 */
function intersect(nums1 = [], nums2 = []) {
    const intersectionArr = [];
    const map = {};
    // 遍历数组1 统计每个出现次数
    nums1.forEach((value) => {
        if (value in map) {
            map[value] += 1;
        }
        else {
            map[value] = 1;
        }
    });
    // 遍历数组2
    nums2.forEach((value) => {
        if (map[value] > 0) {
            // 大于0意味这两者有相同的元素
            // 减一的目的是避免出现如[1], [1, 1, 1] 而导致intersectionArr为[1, 1, 1]而不是[1]
            map[value] -= 1;
            intersectionArr.push(value);
        }
    });
    return intersectionArr;
}
/**
 * @description: 排序后再求交集
 * @param {array} nums1 数组1
 * @param {array} nums2 数组2
 * @return {array} nums1.slice(0, k) 交集
 */
function sortIntersect(nums1 = [], nums2 = []) {
    const intersectionArr = [];
    // 先排序
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    // 初始化两个指针
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            // 相等则两个指针同时向右移动
            intersectionArr.push(nums1[i++]);
            ++j;
        }
        else {
            // 否则小的向右移动
            nums1[i] > nums2[j] ? ++j : ++i;
        }
    }
    return intersectionArr;
}
console.log(sortIntersect([9, 4, 9, 8, 4, 1], [5, 4, 1, 9,]));
