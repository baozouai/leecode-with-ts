"use strict";
/*
 * @Description: 二叉树的最大深度
 * @Author: Moriaty
 * @Date: 2020-09-06 11:45:46
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-06 11:57:14
 */
/**
 * 示例：
 *  给定二叉树 [3,9,20,null,null,15,7]，
 *
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 *  返回它的最大深度 3
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
/**
 * @description: 给定一个二叉树，找出其最大深度。
 *               二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *               说明: 叶子节点是指没有子节点的节点
 *                maxDepth(root) = max(maxDepth(root.left),maxDepth(root.right)) + 1
 * @param {string[]} s 字符串
 * @return {boolean} 是否是回文串
 */
function maxDepth(root) {
    if (!root) {
        return 0;
    }
    // 递归获取高度
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
;
function maxDepth1(root) {
    if (!root) {
        return 0;
    }
    // 声明一个队列
    const queue = [root];
    // 高度初始为0
    let height = 0;
    while (queue.length) {
        // 获取队列长度
        const queueLength = queue.length;
        // 高度加1
        ++height;
        // 遍历改队列
        for (let i = 0; i < queueLength; ++i) {
            // 取出节点
            const node = queue.shift();
            // 如果有左右子树，则放进队列 先左节点，后右节点
            if (node === null || node === void 0 ? void 0 : node.left) {
                queue.push(node.left);
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                queue.push(node.right);
            }
        }
    }
    // 队列直到为空则得到树的高度
    return height;
}
;
