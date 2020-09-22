"use strict";
/*
 * @Description: 快排
 * @Author: Moriaty
 * @Date: 2020-09-22 09:29:14
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-22 12:06:52
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // const partitionIndex = partition(arr, left, right);
        const partitionIndex = partition1(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
;
function partition(arr, left, right) {
    const pivot = left;
    const pivotValue = arr[pivot];
    let index = left + 1;
    for (let i = index; i <= right; ++i) {
        if (arr[i] < pivotValue) {
            swap(arr, index, i);
            ++index;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}
function partition1(arr, low, hight) {
    const pivot = arr[low];
    while (low < hight) {
        while (low < hight && arr[hight] > pivot) {
            --hight;
        }
        arr[low] = arr[hight];
        while (low < hight && arr[low] <= pivot) {
            ++low;
        }
        arr[hight] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(quickSort([4, -2, 1, 9, 5, 4, 3, 9, 7, 11]));
