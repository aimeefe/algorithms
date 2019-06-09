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



/******************** demo01 查看一段文本中各个单词出现的数次 ********************/
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

func('the brown fox jumped over the blue fox');