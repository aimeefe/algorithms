// 集合
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

/* 求并集 - 自动过滤相同元素 */
Set.prototype.union = function (otherSet) {
  let unionSet = new Set(),
    values = [...this.values(), ...otherSet.values()];

  for (let i of values)
    unionSet.add(i)

  return unionSet;
}

/**
 * 求交集： x(元素) 存在于A中， 且x存在于B中
 */
Set.prototype.intersection = function (otherSet) {
  let intersectionSet = new Set(),
    values = this.values();

  for (let i of values)
    otherSet.has(i) && intersectionSet.add(i);

  return intersectionSet;
}

/**
 * 求差集：x(元素) 存在于A中， 且x不存在于B中
 */
Set.prototype.difference = function (otherSet) {
  let differenceSet = new Set(),
    values = this.values();

  for (let i of values)
    !otherSet.has(i) && differenceSet.add(i);

  return differenceSet;
}

/**
 * 求子集：A中的每一个x(元素)，也需要存在于B中
 */
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


//测试验证
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