/******************** es5 ********************/
/*
function Queue() {
  this.items = [];
}

// enqueue() 向队列尾部添加元素
Queue.prototype.enqueue = function (element) {
  this.items.push(element);
}

// dequeue() 删除队首元素， 并返回被移除的元素
Queue.prototype.dequeue = function () {
  return this.items.shift();
}

// front() 返回队列中的第一个元素（ 最先被添加）， 队列不做任何变动
Queue.prototype.front = function () {
  return this.items[0];
}

// empty() 队列是否为空
Queue.prototype.empty = function () {
  return this.items.length === 0;
}

// size() 返回队列包含的元素个数
Queue.prototype.size = function () {
  return this.items.length;
}

// print() 输出队列内元素 - 辅助
Queue.prototype.print = function () {
  return this.items.join('');
}
*/

/******************** es6 ********************/
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    this.items.shift();
  }
  front() {
    return this.items[0];
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