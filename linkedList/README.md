# 链表

链表存储有序的元素集合，但不同于数组，链表中元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成。

## 数组 VS 链表

- 数组：元素在内存中连续放置，从起点或中间插入或移除元素成本高（需要移动其他元素），但是访问某个元素的时候效率高。

- 链表：元素在内存中非连续放置，添加或移除元素成本低（不需要移动其他元素），但是访问某个元素的时候效率低，需要从起点迭代列表直到找到为止。

## 生活场景

康家舞队，每个人都是一个元素，手是链向下一个人的指针，可以向队列中增加人，只要找到想加入的那个点，断开连接，插入一个人再重新连起来即可。

## 操作

- `append（element）` 向列表尾部添加新的项
- `insert(position, element)` 向列表特定位置插入一个新的项
- `remove(element)` 从列表中删除指定的元素
- `removeAt(position)` 删除指定位置的元素
- `update(element, position)` 更新指定位置的元素值
- `get(position)` 获取指定位置的元素
- `indexof(element)` 获取指定元素的索引
- `empty()` 列表是否为空
- `size()` 列表元素长度
- `print()` 列表元素内容（辅助）

## 辅助项

`Node` 加入列表的项，包含一个 element(要添加到列表的值)和 next（下一个节点项的指针）

## 实现

### 用 ES5 实现链表

```JavaScript
/* 定义 Node 类 */
function Node(element) {
  this.element = element;
  this.next = null;
}

/* 定义链表 LinkedList 类 */
function LinkedList() {
  this.head = null;
  this.length = 0;
}

/* 找到链表最后一个元素 */
LinkedList.prototype.lastNode = function () {
  let current = this.head;

  while (current.next) {
    current = current.next;
  }
  return current;
}

/* 找到指定位置的前一个元素和要插入的位置对应的那个元素 */
LinkedList.prototype.prevAndCurrent = function (position) {
  let previous,
    index = 0,
    current = this.head;

  while (index++ < position) {
    previous = current;
    current = current.next;
  }
  return {
    previous, //当前 position 的上一个元素
    current // 当前 postion 对应的元素
  }
}


/**
 * append（ element） 向列表尾部添加新的项
 * 场景：
 * 1. 列表为空， 添加第一个元素
 *    把 head 元素赋值给 node
 * 2. 列表不为空， 向其追加元素
 *    循环访问列表， 找到最后一项， 让最后一个元素的 next 指向新元素
 */
LinkedList.prototype.append = function (element) {
  const node = new Node(element);

  // 1. 列表为空，添加的是第一个元素
  if (this.head === null) {
    this.head = node;
  }
  // 2. 列表不为空， 向其追加元素
  else {
    this.lastNode().next = node;
  }
  //更新列表长度
  this.length++;
  return true;
}

/**
 * insert(position, element) 向列表特定位置插入一个新的项
 * 场景：
 * 1. 在列表起点插入一个元素
 *    新元素的 next 引用指向原 head， 然后将 head 赋值为新元素
 * 2. 在其他位置插入一个元素
 *    循环访问列表找到目标位置， 将 position 对应的上一项（ previous） 和当前项（ current） 获取到， 
 *    让 previous 的 next 引用指向新元素， 然后将新元素 next 的引用指向 current
 */
LinkedList.prototype.insert = function (position, element) {
  if (position < 0 || position > this.length) {
    return false;
  }

  const head = this.head,
    node = new Node(element);

  // 在第一个位置添加
  if (position === 0) {
    node.next = head;
    this.head = node;
  } else {
    // 在其他位置添加
    const {
      previous,
      current
    } = this.prevAndCurrent(position);
    node.next = current;
    previous.next = node;
  }

  this.length++;
  return true;
}

/* remove(element) 从列表中删除指定的元素 */
LinkedList.prototype.remove = function (element) {
  const positon = this.indexof(element);

  if (positon >= 0) {
    return this.removeAt(positon);
  } else {
    return null;
  }
}

/**
 * removeAt(position) 从列表特定位置移除一项
 * 场景：
 * 1. 删除第一个元素
 *    将新元素的 next 引用指向原 head， 然后将 head 赋值为新元素
 * 2. 删除其他位置的元素
 *    将该位置的上一个元素的 next 的引用指向该位置的下一个元素的
 */
LinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  // 删除第一个节点
  let del;
  if (position === 0) {
    del = this.head.element;
    this.head = this.head.next;
  } else {
    const {previous, current} = this.prevAndCurrent(position);
    del = current.element;
    previous.next = current.next;
  }
  this.length--;
  return del;
}

/* update(element, position) 修改某个位置的元素 */
LinkedList.prototype.update = function (position, element) {
  if (position < 0 || position >= this.length) {
    return false;
  }

  // 当前 postion 对应的元素
  const {current} = this.prevAndCurrent(position);
  current.element = element;
  return true;
}

/* get(position) 传入位置返回该位置对应的元素 */
LinkedList.prototype.get = function (position) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  // 当前 postion 对应的元素
  const {current} = this.prevAndCurrent(position);
  return current.element;
}

/* indexof(element) 传入元素返回元素在列表中的索引 */
LinkedList.prototype.indexof = function (element) {
  let current = this.head,
      index = 0;

  while (current) {
    if (current.element === element) {
      return index;
    }
    current = current.next;
    index++;
  }
  //没找到
  return -1;
}

/* empty() 列表是否为空 */
LinkedList.prototype.empty = function () {
  return this.length === 0;
}

/* size() 但会列表包含的元素个数 */
LinkedList.prototype.size = function () {
  return this.length;
}

/* print() 查看链表元素 */
LinkedList.prototype.print = function () {
  let listString = '',
      current = this.head;

  while (current) {
    listString += `${current.element} `;
    current = current.next;
  }
  return listString;
}

```

