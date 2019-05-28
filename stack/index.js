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