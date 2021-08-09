/*
 * @Description: 快排
 * @Author: Moriaty
 * @Date: 2020-09-22 09:29:14
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-10-23 13:03:18
 */

function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
  if (left < right) {
    // const partitionIndex = partition(arr, left, right);
    const partitionIndex = partition1(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

function partition(arr: number[], left: number, right: number): number {
  const pivotValue = arr[left];
  let index = left + 1;
  for (let i = index; i <= right; ++i) {
    if (arr[i] < pivotValue) {
      swap(arr, index, i);
      ++index;
    }
  }
  swap(arr, left, index - 1);
  return index - 1;
}

function partition1(arr: number[], low: number, hight: number): number {
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
function swap<T = number>(arr: T[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


console.log(quickSort([4, -2, 1, 9, 5, 4, 3, 9, 7, 11]))
