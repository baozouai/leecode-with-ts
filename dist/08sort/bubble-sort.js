"use strict";
/*
 * @Description: 冒泡排序
 * @Author: Moriaty
 * @Date: 2020-09-22 08:39:12
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-22 09:50:32
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; ++i) {
        let flag = false;
        for (let j = 0; j < len - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                flag = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!flag) {
            break;
        }
    }
}
;
const arr = [4, -2, 1, 9, 5, 4, 9, 7, 11, 3];
bubbleSort(arr);
console.log(arr);
