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
    return this.items.toString(',');
  }
}

const stack = new Stack();