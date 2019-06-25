# 选择排序

选择排序算法是一种原址比较排序算法。

## 思路

找到数据中最小值并放置在第一位，接着找到第二小的值并将其放在第二位，以此类推...直到进行到数组的倒数第二位时，所有数据便完成了排序。

## 实现

```JavaScript
// 选择排序
const selectionSort = array => {
  let minIndex;
  const length = array.length;
  //外层循环：控制数组会进行多少轮排序
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    //内层循环：拿第 N + 1 项和 N 项数据进行比较，找出最小的值并它的索引赋值给 minIndex
    for (let j = i + 1; j < length; j++) {
      if (array[minIndex] > array[j])
        minIndex = j; //找出最小的那一项并赋值
    }
    //当前最小值索引与新最小值索引不同时，交换两项，把最小值放前面
    i !== minIndex && ([array[i], array[minIndex]] = [array[minIndex], array[i]]);
  }
  return array;
}

console.log(selectionSort([4, 2, 5, 6, 666, 22, 1, 12])); //[2, 4, 5, 6, 12, 1, 22, 666]
```

## 其他

TODO
