"use strict";
/*
 * @Description: 平衡二叉树
 * @Author: Moriaty
 * @Date: 2020-09-09 08:27:14
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-09 08:31:40
 */
/**
 * 示例 1:
 *
 *  给定二叉树 [3,9,20,null,null,15,7]
 *
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 *  返回 true 。
 *
 * 示例 2:
 *
 *  给定二叉树 [1,2,2,3,3,null,null,4,4]
 *
 *         1
 *        / \
 *       2   2
 *      / \
 *     3   3
 *    / \
 *   4   4
 *  返回 false
 *
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/balanced-binary-tree
 */
/**
 * @description: 给定一个二叉树，判断它是否是高度平衡的二叉树。
                  本题中，一棵高度平衡二叉树定义为：
                  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1
 *
 * @param {TreeNode | null} root 根节点
 * @return {boolean} 是否是高度平衡的二叉树
 */
function isBalanced(root) {
    // 空树是平衡树
    if (root === null) {
        return true;
    }
    // 左右子树有一个节点不平衡，则整棵树不平衡
    if (!isBalanced(root.left) || !isBalanced(root.right)) {
        return false;
    }
    // 获取左右最大高度
    const leftHeight = maxDepth(root.left) + 1;
    const rightHeight = maxDepth(root.right) + 1;
    // 如果左右高度相差超过1
    if (Math.abs(leftHeight - rightHeight) > 1) {
        // 则树不平衡
        return false;
    }
    // 否则则是平衡树
    return true;
}
;
