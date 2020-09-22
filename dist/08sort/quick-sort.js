"use strict";
/*
 * @Description: 快排
 * @Author: Moriaty
 * @Date: 2020-09-22 09:29:14
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-22 09:51:13
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
function partition(arr, left, right) {
    const pivot = left;
    let index = left + 1;
    for (let i = index; i <= right; ++i) {
        if (arr[i] < arr[pivot]) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            ++index;
        }
    }
    [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
    return index - 1;
}
console.log(quickSort([4, -2, 1, 9, 5, 4, 9, 7, 11, 3]));
