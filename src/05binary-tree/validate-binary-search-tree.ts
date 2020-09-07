/*
 * @Description: 验证二叉搜索树
 * @Author: Moriaty
 * @Date: 2020-09-07 08:41:52
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-07 08:46:56
 */

/**
 * 示例 1:
 *  
 *  输入:
 *      2
 *     / \
 *    1   3
 *  输出: true
 * 示例 2:
 *  
 *  输入:
 *      5
 *     / \
 *    1   4
 *       / \
 *      3   6
 *  输出: false
 *  解释: 输入为: [5,1,4,null,null,3,6]。
 *       根节点的值为 5 ，但是其右子节点值为 4 。
 *  
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/validate-binary-search-tree
 */

/**
 * @description: 给定一个二叉树，判断其是否是一个有效的二叉搜索树。         
 *               假设一个二叉搜索树具有如下特征：          
 *               1.节点的左子树只包含小于当前节点的数。
 *               2.节点的右子树只包含大于当前节点的数。
 *               3.所有左子树和右子树自身必须也是二叉搜索树。
 *               
 * @param {TreeNode | null} root 根节点
 * @return {boolean} 是否是一个有效的二叉搜索树
 */
function isValidBST(root: TreeNode | null): boolean {
  return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
/**
 * @description: 是否是二叉搜索树
 * @param {TreeNode | null} root 根节点
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @return {boolean} 是否是一个有效的二叉搜索树
 */
function isBST(root:TreeNode | null, min:number, max:number):boolean {
  // 根节点为空也是二叉搜索树
  if (root === null) {
      return true;
  }
  /**
   *  1.如果最小值大于等于根节点的值
   *  2.如果最大值小于等于根节点的值
   *  则不是二叉搜索树
   */
  if (min >= root.val || max <= root.val) {
      return false;
  }
  // 递归左右子树
  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}
