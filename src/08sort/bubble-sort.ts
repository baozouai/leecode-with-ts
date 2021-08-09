/*
 * @Description: 冒泡排序
 * @Author: Moriaty
 * @Date: 2020-09-22 08:39:12
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-23 13:03:32
 */

function bubbleSort(arr: number[]): void {
  const len = arr.length;
  for (let i = 0; i < len - 1; ++i) {
    let flag = false;
    for (let j = 0; j < len - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        swap(arr, j, j + 1);
      }
    }
    if (!flag) {
      break;
    }
  }
};
const arr:number[] = [4, -2, 1, 9, 5, 4, 9, 7, 11, 3];
bubbleSort(arr);
console.log(arr)

