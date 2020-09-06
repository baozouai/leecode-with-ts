/*
 * @Description: 二叉树的层序遍历
 * @Author: Moriaty
 * @Date: 2020-09-06 12:08:18
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-06 12:15:03
 */

/**
 * 示例：
 *  二叉树：[3,9,20,null,null,15,7],
 *  
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 *  返回其层次遍历结果：
 *  
 *  [
 *    [3],
 *    [9,20],
 *    [15,7]
 *  ]
 *  
 *  来源：力扣（LeetCode）
 *  链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
 */

/**
 * @description: 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）
 * @param {TreeNode | null} root 根节点
 * @return {number[][]} 按 层序遍历 得到的节点值
 */
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  // 声明一个队列
  const queue: TreeNode[] = [root];
  // 按 层序遍历 得到的节点值
  const res: number[][] = [];
  // 队列不为空
  while (queue.length) {
    // 获取队列长度
    const queueLength = queue.length;
    // 当前层级数组
    const currentArr: number[] = [];
    // 遍历队列
    for (let i = 0; i < queueLength; ++i) {
      const node: TreeNode | undefined = queue.shift();
      if (node) {
        // 将该层节点值放入数组
        currentArr.push(node.val);
      }
      // 如果有左右子节点则放入队列
      if (node && node.left) {
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
    // 放入结果数组
    res.push(currentArr);
  }
  return res;
};

function levelOrder1(root: TreeNode | null): number[][] {
  // 定义一个深度优先遍历函数
  function dfs(root: TreeNode | null, level: number, res: number[][]): number[][] {
    if (root === null) {
      return res;
    }
    // 结果数组长度与层级相等则创建新数组
    if (res.length === level) {
      res.push([root.val]);
    } else {
      // 否则该层数据以及创建，往该层数据push
      res[level].push(root.val);
    }
    // 处理左右子节点
    dfs(root.left, level + 1, res);
    dfs(root.right, level + 1, res);
    return res;
  }
  return dfs(root, 0, []);
};
