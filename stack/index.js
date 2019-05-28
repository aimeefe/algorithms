/**************** 实现栈 es5 ****************/
/*
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
*/

/**************** 实现栈 es6 ****************/
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

/**************** demo01 ****************/
/**
 * 十进制转二进制
 * 思路：将十进制数字和2整除（二进制满二进一），直到结果是0位止
 */
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