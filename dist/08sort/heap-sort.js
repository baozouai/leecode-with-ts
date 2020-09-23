"use strict";
/*
 * @Description: 堆排序
 * @Author: Moriaty
 * @Date: 2020-09-23 11:04:09
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-23 11:24:05
 */
/**
 * @description: 构造大顶堆
 */
function buildMaxHeap(arr) {
    //  获取第一个非叶子节点索引
    const firstNonLeafIndex = Math.floor(arr.length / 2) - 1;
    // 从第一个非叶子节点索引到根节点，构造大顶堆
    for (let i = firstNonLeafIndex; i >= 0; --i) {
        heapify(arr, i);
    }
}
/**
 * @description: 根节点和左右节点比较
 * @param {number[]} arr 待排序数组
 * @param {number} index 构造大顶堆的根index
 * @param {number} len leftIndex与rightIndex不能超过的值
 */
function heapify(arr, index, len = arr.length) {
    // 获取index节点的左右子节点索引
    const leftIndex = 2 * index + 1;
    const rightIndex = leftIndex + 1;
    // 初始最大节点索引为index
    let largestIndex = index;
    // 如果有左节点且左节点比父节点大，最大索引改为leftIndex
    if (leftIndex < len && arr[leftIndex] > arr[largestIndex]) {
        largestIndex = leftIndex;
    }
    // 如果有右节点且右节点比父节点大，最大索引改为rightIndex
    if (rightIndex < len && arr[rightIndex] > arr[largestIndex]) {
        largestIndex = rightIndex;
    }
    // 如果最大索引不是index，则交互，并递归处理
    if (largestIndex !== index) {
        [arr[index], arr[largestIndex]] = [arr[largestIndex], arr[index]];
        heapify(arr, largestIndex, len);
    }
}
;
function heapSort(arr) {
    // 先构造大顶堆
    buildMaxHeap(arr);
    // 构造完根节点即为最大值
    for (let i = arr.length - 1; i >= 1; --i) {
        // 将根节点跟最后一个节点交互
        [arr[i], arr[0]] = [arr[0], arr[i]];
        // 交互后跳转0 ~ i- 1为大顶堆
        heapify(arr, 0, i - 1);
    }
    return arr;
}
console.log(heapSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));
console.log(heapSort([1, 2, 3, 4, 5, 6, 7, 8]));
