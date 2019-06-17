# 冒泡排序

冒泡排序比较任何两个相邻的项，如果第一个比第二个大，则交换他们。

元素项向上移动至正确的顺序，就像是气泡升至表面一样，因此得名冒泡排序。

## 思路

依次比较相邻的两个元素的大小

## 实现

```JavaScript

const bubbleSort = array => {
  let length = array.length;

  // 外层循环：控制数组会进行多少轮排序
  for (let i = 0; i < length; i++)
    // 内层循环：将当前项与下一项比较，如果顺序不对则交换他们
    // 从内循环中减去外循环中已跑过的轮数，来避免内循环中不必要的比较
    for (let j = 0; j < length - 1 - i; j++)
      array[j] < array[j + 1] && ([array[j], array[j + 1]] = [array[j + 1], array[j]])

  return array;
}

// 测试验证
const array = [1, 2, 3, 4, 5, 6];
console.log(bubbleSort(array)) //[2, 6, 15, 32, 43, 111]
```

## 分析

TODO
