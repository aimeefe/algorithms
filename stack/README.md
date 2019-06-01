# 栈

栈是一种遵从`后进先出（LIFO）原则的有序集合`。

新添加或待删除的元素都保存在栈的同一端，成为栈顶，另一端叫栈底。

在栈里，新元素都靠近栈顶，旧元素都接近栈底。

## 生活场景

咖啡厅内的一摞盘子，只能从最上面取盘子，盘子洗净后，也只能落在这一摞盘子的最上面。

## 特点

后入先出（LIFO，last-in-first-out）

任何不在栈顶的元素都无法访问，为了得到栈底的元素，必须先拿掉上面的元素。

## 操作

- `push(element)` 将元素压入栈

- `pop(element)` 将元素压出栈：调用该方法后，栈顶元素会从栈中永久性删除，同时返回被移除的元素

- `peek()` 预览栈顶元素：返回栈顶元素，不对栈做任何修改

- `clear()` 清除栈内所有元素

- `empty()` 查看栈内元素是否为空

- `size()` 返回栈元素个数

- `print()` 输出栈元素（辅助）

## 实现

方法：通过包装数组来实现栈。

### ES5

```JavaScript
function Stack() {
  // 存放栈元素
  this.items = [];
}

// push() 将元素压入栈
Stack.prototype.push = function (element) {
  this.items.push(element);
}

// pop() 将元素压出栈： 调用该方法后， 栈顶元素会从栈中永久性删除， 同时返回被移除的元素
Stack.prototype.pop = function (element) {
  return this.items.pop(element);
}

// peek() 预览栈顶元素： 返回栈顶元素， 不对栈做任何修改
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1];
}

// clear() 清除栈内所有元素
Stack.prototype.clear = function () {
  return this.items = [];
}

// empty() 查看栈内元素是否为空
Stack.prototype.empty = function () {
  return this.items.length === 0;
}

// size() 返回栈元素个数
Stack.prototype.size = function () {
  return this.items.length;
}

// print() 输出栈内元素 - 辅助
Stack.prototype.print = function () {
  return this.items.join('');
}
```

### ES6

```JavaScript
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop(element) {
    return this.items.pop(element);
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  clear() {
    return this.items = [];
  }
  empty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    return this.items.join('');
  }
}
```

### demo 二进制转十进制

思路：将十进制数字和2整除（二进制满二进一），直到结果是0位止

```JavaScript
const divideBy2 = number => {
  let stack = new Stack(),
    rem,
    binaryString;

  while (number > 0) {
    stack.push(Math.floor(number % 2));
    number = Math.floor(number / 2);
  }

  if (!stack.empty()) {
    const stackItemSting = stack.print();
    binaryString = [...stackItemSting].reverse().join('');
  }
  return binaryString;
}

// 测试验证
divideBy2(100) //1100100
```




 


