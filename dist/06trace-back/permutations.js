"use strict";
/*
 * @Description:  全排列
 * @Author: Moriaty
 * @Date: 2020-09-11 08:35:33
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-23 11:13:58
 */
/**
 * 示例1:
 *
 *  输入: [1,2,3]
 *  输出:
 *  [
 *    [1,2,3],
 *    [1,3,2],
 *    [2,1,3],
 *    [2,3,1],
 *    [3,1,2],
 *    [3,2,1]
 *  ]
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/permutations
 */
/**
 * @description: 给定一个没有重复数字的序列，返回其所有可能的全排列
 * @param {number[]} nums 没有重复数字的序列
 * @return {number[][]} 所有可能的全排列
 */
function permute(nums) {
    // 存放所有可能的全排列
    const res = [];
    /**
     * @description: 获取所有全排列
     * @param {number[]} nums 没有重复数字的序列
     * @param {number[]}  temp 任一种排列
     */
    function getAllResltWithDFS(temp) {
        console.log(`res = ${JSON.stringify(res)}, temp = ${JSON.stringify(temp)}`);
        // 当temp数量跟nums数量相等，则获得了一次排列
        if (temp.length === nums.length) {
            // 将其存放
            res.push([...temp]);
        }
        else {
            // 遍历每个元素
            for (let num of nums) {
                /**
                 * 如果temp不包含该元素 则将该元素放入temp，再递归
                 * 递归完则去掉该元素
                 */
                if (!(~temp.indexOf(num))) {
                    temp.push(num);
                    getAllResltWithDFS(temp);
                    temp.pop();
                }
            }
        }
    }
    // 获取全排列
    getAllResltWithDFS([]);
    console.log(res);
    return res;
}
;
permute([1, 2, 3]);
permute([1, 2, 3, 5,]);
