# 集合

集合是由一组`无序`且`唯一`的项组成。

## 特点

- 无序：无序意味着不能通过下标值访问
- 唯一：意味着相同的对象只能在集合中存在一份

## 操作

- `add(value)` 向集合中添加一个新的项

- `delete(value)` 从集合中移除一个值

- `has(value)` 判断集合中是否有某个值，有则返回true，否则返回false

- `clear()` 清空集合中的项

- `size()` 返回集合所包含元素的数量

- `values()` 返回一个包含集合中所有值的数组

## 实现

### ES5 实现 Set类

方法：通过包装 object 来实现集合

```JavaScript
function Set() {
  this.items = {};
}

/**
 * has(value)：判断集合中是否有某个值， 有则返回true， 否则返回false
 * Object.prototype.hasOwnProperty()：返回一个对象是都具有某个特定属性的布尔值
 */
Set.prototype.has = function (value) {
  return this.items.hasOwnProperty(value);
}

/**
 * add(value) 向集合中添加一个新的项
 * 集合不允许重复值， 因此对于添加的值要先判断集合中是否存在这个值， 如果不存在则进行添加操作
 */
Set.prototype.add = function (value) {
  if (!this.has(value)) {
    this.items[value] = value;
    return true;
  }
  return false;
}

Set.prototype.remove = function (value) {
  if (this.has(value)) {
    return delete this.items[value];
  }
  return false;
}

/* clear() 清空集合中的项 */
Set.prototype.clear = function () {
  this.items = {};
  return true;
}

/* size() 返回集合所包含元素的数量 */
Set.prototype.size = function () {
  return Object.keys(this.items).length;
}

/* values() 返回一个包含集合中所有值的数组 */
Set.prototype.values = function () {
  return Object.keys(this.items);
}
```

### ES6 中的 Set

ES6中新增了Set类，我们可以基于ES6的Set开发我们的 Set 类。

文档：[传送门](http://es6.ruanyifeng.com/#docs/set-map)

## 应用

集合可以做如下操作：

### 并集

对于给定的两个集合，返回一个包含两个集合中`所有`元素的新集合（自动过滤相同元素）

```JavaScript

Set.prototype.union = function (otherSet) {
  let unionSet = new Set(),
    values = [...this.values(), ...otherSet.values()];

  for (let i of values)
    unionSet.add(i)

  return unionSet;
}
```

### 交集

对于给定的两个集合，返回一个包含两个集合中`共有`元素的新集合

```JavaScript

Set.prototype.intersection = function (otherSet) {
  let intersectionSet = new Set(),
    values = this.values();

  for (let i of values)
    otherSet.has(i) && intersectionSet.add(i);

  return intersectionSet;
}
```

### 差集

对于给定的两个集合，返回一个包含两个集合中`共有`元素的新集合

```JavaScript

Set.prototype.difference = function (otherSet) {
  let differenceSet = new Set(),
    values = this.values();

  for (let i of values)
    !otherSet.has(i) && differenceSet.add(i);

  return differenceSet;
}
```

### 子集

对于给定的两个集合，返回一个包含两个集合中`共有`元素的新集合

```JavaScript

Set.prototype.subSet = function (otherSet) {
  let values = this.values();

  if (this.size() > otherSet.size()) {
    return false;
  }
  for (let i of values) {
    if (!otherSet.has(i)) {
      return false;
    }
  }
  return true;
}
```

###### 测试验证

```JavaScript

let setA = new Set();
let setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

console.log(`并集: ${setA.union(setB).values()}`); //[1,2,3,4,5,6]
console.log(`交集: ${setA.intersection(setB).values()}`); //[3]
console.log(`差集: ${setA.difference(setB).values()}`); //[1,2]
console.log(`子集: ${setA.subSet(setB)}`); //false
```
