"use strict";
/*
 * @Description: 二叉搜索树中的搜索
 * @Author: Moriaty
 * @Date: 2020-09-07 09:21:03
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-07 09:25:28
 */
/**
 * 示例 1:
 *   给定二叉搜索树:
 *
 *           4
 *          / \
 *         2   7
 *        / \
 *       1   3
 *
 *   和值: 2
 *   你应该返回如下子树:
 *
 *         2
 *        / \
 *       1   3
 *   在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL
 *
 *   来源：力扣（LeetCode）
 *   链接：https://leetcode-cn.com/problems/search-in-a-binary-search-tree
 */
/**
 * @description: 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。
 *               返回以该节点为根的子树。 如果节点不存在，则返回 NULL
 * @param {TreeNode | null} root 根节点
 * @param {number} val 查找值
 * @return {boolean} 节点值等于给定值，以该节点为根的子树
 */
function searchBST(root, val) {
    if (root === null) {
        return null;
    }
    // 找到值则返回
    if (root.val === val) {
        return root;
    }
    // 递归查找左右子树
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
}
;
function searchBST1(root, val) {
    while (root) {
        // 比较该节点以及左右子节点
        if (root.val === val) {
            return root;
        }
        else if (root.val > val) {
            root = root.left;
        }
        else {
            root = root.right;
        }
    }
    return null;
}
;
