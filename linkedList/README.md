# 链表

链表存储有序的元素集合，但不同于数组，链表中元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成。

## 数组 VS 链表

- 数组：元素在内存中连续放置，从起点或中间插入或移除元素成本高（需要移动其他元素），但是访问某个元素的时候效率高。

- 链表：元素在内存中非连续放置，添加或移除元素成本低（不需要移动其他元素），但是访问某个元素的时候效率低，需要从起点迭代列表直到找到为止。

## 生活场景

康家舞队，每个人都是一个元素，手是链向下一个人的指针，可以向队列中增加人，只要找到想加入的那个点，断开连接，插入一个人再重新连起来即可。

## 操作

- `append（element）`向列表尾部添加一个新的项
- `insert(position, element)`向列表特定位置插入一个新的项
- `remove(element)`从列表中移除一项
- `indexof(element)`返回元素在列表中的索引。如果列表中没有该元素则返回 -1
- `removeAt(position)`从列表特定位置移除一项
- `empty()`列表是否为空
- `size()`但会列表包含的元素个数
- `toString()`
- `print()`输出列表元素（辅助）

## 辅助项

`Node` 加入列表的项，包含一个 element(要添加到列表的值)和 next（下一个节点项的指针）

## 实现

### 首先，定义 LinkedList 初始类及辅助项

```JavaScript

/** 定义 Node 节点 **/
function Node(element) {
  // 要添加到列表的元素
  this.element = element;
  // 下一个节点的指针，最后一项始终指向 null
  this.next = null;
}

/** 定义 LinkedList 类 **/
function LinkedList() {
  // 列表长度
  this.length = 0; 
  // 第一个节点的引用
  this.head = null;
}

/** 找到链表最后一个元素 **/
LinkedList.prototype.lastNode = function () {
  let current = this.head;

  while (current.next) {
    current = current.next;
  }
  return current;
}

/** 找到指定位置的前一个元素和要插入的位置对应的那个元素 **/
LinkedList.prototype.prevAndCurrent = function (position, current) {
  let previous, index = 0;
  while (index++ < position) {
    previous = current;
    current = current.next;
  }
  return {
    previous,
    next: current
  }
}

```

### append

##### 场景1：列表为空，添加第一个元素
###### 此时 head 为 null，让 head 元素指向 node，下一个 node 元素会自动成为 null
##### 场景2: 列表不为空，向其追加元素
###### 循环访问列表，找到最后一项，让当前元素的 next 指向要添加到列表的元素

```JavaScript
/** 向列表尾部添加一个新的项 **/
LinkedList.prototype.append = function (element) {
  let current, node = new Node(element);

  // 1. 列表为空，添加的是第一个元素
  if (this.head === null) {
    this.head = node;
  }
  // 2. 列表不为空， 向其追加元素
  else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  //更新列表长度
  this.length++;
}
```

### insert

##### 场景1：在列表起点插入一个元素
###### 把 node.next 的值设置为列表中的第一个元素，然后让 head 的引用指向 node
##### 场景2：在其他位置插入一个元素
###### 循环访问列表找到目标位置， 找到要插入的位置的前一个元素(previous) 和当前位置对应的那个元素(next)， 把 node.next 赋值为 next, 把 previous.next 的引用指向 node

```JavaScript
/** 向列表特定位置插入一个新的项 **/
LinkedList.prototype.insert = function (element, position) {
  const current = this.head;
  const node = new Node(element);

  if (position < 0 || position > this.length) {
    return false;
  }

  // 在第一个位置添加
  if (position === 0) {
    node.next = current;
    this.head = node;
  }
  // 在其他位置添加
  else {
    const {previous, next} = this.prevAndCurrent(position, current);
    node.next = next;
    previous.next = node;
  }

  this.length++;
  return true;
}
```


