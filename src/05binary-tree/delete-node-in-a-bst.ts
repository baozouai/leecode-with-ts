/*
 * @Description: 删除二叉搜索树中的节点
 * @Author: Moriaty
 * @Date: 2020-09-08 21:54:04
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-23 10:24:04
 */

/**
 * 示例 1:
 * 
 *  root = [5,3,6,2,4,null,7]
 *  key = 3
 *  
 *      5
 *     / \
 *    3   6
 *   / \   \
 *  2   4   7
 *  
 *  给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
 *  
 *  一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
 *  
 *      5
 *     / \
 *    4   6
 *   /     \
 *  2       7
 *  
 *  另一个正确答案是 [5,2,6,null,4,null,7]。
 *  
 *      5
 *     / \
 *    2   6
 *     \   \
 *      4   7
 *  
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
 */

/**
 * @description: 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，
 *               并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。
 *             一般来说，删除节点可分为两个步骤：
 *             
 *             首先找到需要删除的节点；
 *             如果找到了，删除它。
 *             说明： 要求算法时间复杂度为 O(h)，h 为树的高度
 *               
 * @param {TreeNode | null} root 根节点
 * @param {number} key 二叉搜索树中的 要删除节点的key
 * @return {TreeNode | null} 返回二叉搜索树（有可能被更新）的根节点的引用。
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) {
      return root;
  }
  // 如果key不等于该节点，则根据key与该节点值大小比较，从左右子树找
  if (key < root.val) {
      root.left = deleteNode(root.left, key);
      return root;
  }
  if (key > root.val) {
      root.right = deleteNode(root.right, key);
      return root;
  }
  // 否则该节点即为要删除的节点
  // 如果该节点左子树为空，则返回其右节点
  if (root.left === null) {
      return root.right;
  }
  // 如果该节点右子树为空，则返回其左节点
  if (root.right === null) {
      return root.left;
  }
  /**
   *  否则找到 1.其左子树的最大值，
   *     或者 2.右子树的最小值
   *  这里采取第二种情况
   */
  let miniNode: TreeNode = root.right;
  // 一直找右节点的左节点，最终就是右子树的最小值
  while (miniNode.left) {
      miniNode = miniNode.left;
  }
  // 将右子树的最小值赋给该节点root
  root.val = miniNode.val;
  // 剔除miniNode
  root.right = deleteMiniNode(root.right);
  return root;
};
/**
 * @description: 删除最小节点
 * @param {TreeNode} root 右子树的根
 * @return { TreeNode | null} 返回新的左子树根引用
 */
function deleteMiniNode(root: TreeNode): TreeNode | null {
  // 找到该节点
  if (root.left === null) {
      // 取其右子树
      const rightNode: TreeNode | null = root.right;
      // 右节点置空
      root.right = null;
      return rightNode;
  }
  root.left = deleteMiniNode(root.left);
  return root;
}
