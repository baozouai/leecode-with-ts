"use strict";
/*
 * @Description: 归并排序
 * @Author: Moriaty
 * @Date: 2020-09-23 08:53:37
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-23 09:37:42
 */
function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    if (left.length) {
        result = result.concat(left);
    }
    if (right.length) {
        result = result.concat(right);
    }
    return result;
}
console.log(mergeSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));
