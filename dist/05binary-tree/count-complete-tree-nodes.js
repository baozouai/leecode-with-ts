"use strict";
/*
 * @Description: 完全二叉树的节点个数
 * @Author: Moriaty
 * @Date: 2020-09-09 09:12:21
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-09 09:18:10
 */
/**
 * 示例 1:
 *
 *  输入:
 *      1
 *     / \
 *    2   3
 *   / \  /
 *  4  5 6
 *
 *  输出: 6
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/count-complete-tree-nodes
 */
/**
 * @description: 给出一个完全二叉树，求出该树的节点个数。
 *               说明：
 *               完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，
 *               并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点
 *
 * @param {TreeNode | null} root 根节点
 * @return {boolean} 该树的节点个数
 */
function countNodes(root) {
    if (root === null) {
        return 0;
    }
    // 左右递归子树
    return 1 + countNodes(root.left) + countNodes(root.right);
}
;
function countNodes1(root) {
    if (root === null) {
        return 0;
    }
    // 获取左右子树高度
    let leftLevel = countLevel(root.left);
    let rightLevel = countLevel(root.right);
    // 左右子树高度相等，这时左子树肯定是满二叉树，左子树节点个数加上根节点为2^leftLevel
    if (leftLevel === rightLevel) {
        // 此时右子树非满二叉树，递归计算
        return countNodes(root.right) + (1 << leftLevel);
    }
    else {
        // 否则右子树是满二叉树，右子树节点个数加上根节点为2^rightLevel
        // 此时左子树非满二叉树，递归计算
        return countNodes(root.left) + (1 << rightLevel);
    }
}
;
/**
 * @description: 计算树层数
 * @param {TreeNode | null} root 根节点
 * @return {number} 树层数
 */
function countLevel(root) {
    let level = 0;
    while (root) {
        root = root.left;
        ++level;
    }
    return level;
}
