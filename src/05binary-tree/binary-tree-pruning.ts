/*
 * @Description: 二叉树剪枝
 * @Author: Moriaty
 * @Date: 2020-09-10 21:22:23
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-10 21:29:00
 */

/**
 * 示例1:
 *   
 *  解释: 
 *  只有节点满足条件“所有不包含 1 的子树”。
 *  
 * 
 *  输入: root = [5,3,0,2,0,null,0]
 *  
 *      5
 *     / \
 *    3   0
 *   / \   \
 *  2   0   0
 * 
 * 输出:
 *       5
 *     / 
 *    3   
 *   /    
 *  2      
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/binary-tree-pruning
 */
type rootType = TreeNode | null;

/**
 * @description: 给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。
 *              返回移除了所有不包含 1 的子树的原二叉树。
 *              ( 节点 X 的子树为 X 本身，以及所有 X 的后代。)
 *               
 * @param {rootType} root 根节点
 * @return {rootType} 移除了所有不包含 1 的子树的原二叉树
 */
function pruneTree(root: rootType): rootType {
    return deleteEmptyTree(root);
};
/**
 * @description: 如果节点值为0，其左右子树为null，则去掉该节点
 */
function deleteEmptyTree(root: rootType): rootType {
    if (root === null) {
        return null;
    }
    root.left = deleteEmptyTree(root.left);
    root.right = deleteEmptyTree(root.right);
    if (!root.left && !root.right && root.val === 0) {
        return null;
    }
    return root;
}