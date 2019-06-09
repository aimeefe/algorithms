# 字典

字典也称映射，是以`【键，值】对`的形式来存储不重复数据的数据结构。

键：用来查找的东西

值：查找得到的结果

## 字典 VS 集合

字典和集合set都可以用来存储唯一值，两者区别在于：

- 字典：以【键，值】的形式来存储元素
- 集合 set：以【值，值】的形式来存储元素

## 生活场景

像电话簿的名字和电话号码一样，要找一个电话时，先找名字（键），名字找到了电话号码（值）也就找到了。

## 操作

- `set(key, value)` 向字典中添加新元素
- `delete(key)` 通过键值来移除键值对应的数据值
- `has(key)` 判断某个键值是否存在于字典中
- `get(key)` 通过键值查找特点的数据并返回
- `clear()` 将字典中所有元素清空
- `size()` 返回字典包含的元素数量
- `keys()` 将字典所包含的所有键名以数据形式返回
- `values()` 将字典所包含的所有数值以数组形式返回

## 实现

基于 object 实现字典

### ES5

```Javascript
function Dictionary() {
  this.items = {};
}

// has(key) 判断某个键值是否存在于字典中
Dictionary.prototype.has = function (key) {
  return key in this.items;
}

// set(key, value) 像字典中添加新元素 - 可用来添加新值，也可用来更新已有值
Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
}

// delete(key) 通过键值来移除键值对应的数据值
Dictionary.prototype.delete = function (key) {
  if (!this.has(key)) {
    return false;
  }
  delete this.items[key];
  return true;
}

// get(key) 通过键值查找特点的数据并返回
Dictionary.prototype.get = function (key) {
  return this.items[key];
}

// keys() 将字典所包含的所有键名以数据形式返回
Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
}

// values() 将字典所包含的所有数值以数组形式返回
Dictionary.prototype.values = function () {
  let values = [];
  for (let key in this.items)
    values.push(this.items[key]);
  return values;
}

// showAll() 查看所有元素
Dictionary.prototype.showAll = function () {
  for (let key of this.keys())
    console.log(`${key}: ${this.items[key]}`);
}

```

### ES6

es6 中也包含了一个 Map 类（字典）的实现

传送门：[Map](http://es6.ruanyifeng.com/#docs/set-map#Map)

## 应用

###### 使用Dictionary类统计一段文本中各个单词出现的次数。该程序显示每个单词出现的次数，但每个单词只显示一次。
###### demo: “the brown fox jumped over the blue fox”

```javascript
let dictionary = new Dictionary();

const func = text => {
  if (!text) return console.log('文本啥都没有啊 ~~~');

  const textArray = text.split(' ');
  for (let word of textArray) {
    if (!dictionary.has(word)) {
      dictionary.set(word, 1);
    } else {
      let count = dictionary.get(word);
      dictionary.set(word, ++count);
    }
  }
  return dictionary.showAll();
}

func('the brown fox jumped over the blue fox'); //the: 2, brown: 1, fox: 2, jumped: 1, over: 1, blue: 1

```
