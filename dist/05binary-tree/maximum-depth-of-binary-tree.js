"use strict";
/*
 * @Description: 二叉树的最大深度
 * @Author: Moriaty
 * @Date: 2020-09-06 11:45:46
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-06 12:56:10
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
 * @param {TreeNode | null} root 根节点
 * @return {number} 最大深度
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
    const que = [root];
    // 高度初始为0
    let height = 0;
    while (que.length) {
        // 获取队列长度
        const queLength = que.length;
        // 高度加1
        ++height;
        // 遍历改队列
        for (let i = 0; i < queLength; ++i) {
            // 取出节点
            const node = que.shift();
            // 如果有左右子树，则放进队列 先左节点，后右节点
            if (node === null || node === void 0 ? void 0 : node.left) {
                que.push(node.left);
            }
            if (node === null || node === void 0 ? void 0 : node.right) {
                que.push(node.right);
            }
        }
    }
    // 队列直到为空则得到树的高度
    return height;
}
;
