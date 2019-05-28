# 队列

队列是遵循FIFO（First In First Out，先进先出）原则的一组有序的项。

队列在尾部添加新元素，并从顶部移除元素。

最新添加的元素必须排在队列的末尾。

## 生活场景

排队买票，排在第一位的人先接受服务。

## 图示



## 操作

- `enqueue()`向队列尾部添加元素
- `dequeue()`移除队首元素，并返回被移除的元素
- `front()`返回队列中的第一个元素（最先被添加），队列不做任何变动
- `empty()`队列是否为空
- `size()`返回队列包含的元素个数
- `print()`输出队列内元素 - 辅助

## 实现

方法：通过包装数组来实现队列。

### ES5

```JavaScript
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
```

### ES6

```JavaScript
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

```



