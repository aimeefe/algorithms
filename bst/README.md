# 二叉搜索树

二叉搜索树（BST）也称二叉排序树或二叉查找树，用以分层的方式存储数据。

## 特点

- 子节点个数不得超过两个，分别为左侧子节点和右侧子节点

- 与其根部的值相比，相对较小的值（键）总保存在左侧子节点，较大的值总保存在右侧子节点上

## 操作

- `insert(data)` 向树中插入一个新的键
- `preOrder(node)` 通过先序遍历所有的节点
- `inOrder(node)` 通过中序遍历所有的节点
- `postOrder(node)` 通过后序遍历所有的节点
- `getMin()` 查找最小值
- `getMax()` 查找最大值
- `find(data)` 查找给定的值
- `remove(data)` 从二叉树上删除节点

## 实现

```javaScript
/********************* 辅助类 *********************/

/**
 * 辅助类：二叉树的节点 - 左侧子节点 & 右侧子节点
 */
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.show = Show;
}


/**
 * 辅助类：查看节点值
 */
function Show() {
  return this.data;
}


/**
 * 辅助类：查找插入新节点的位置
 * 情况1-新节点的键 < 当前节点的键： 检查当前节点的左测节点
 * 情况2-新节点的键 > 当前节点的键： 检查当前节点的右侧节点
 */
function insertNode(node, newNode) {
  if (newNode.data < node.data) {
    if (!node.left)
      node.left = newNode;
    else
      insertNode(node.left, newNode);
  } else {
    if (!node.right)
      node.right = newNode;
    else
      insertNode(node.right, newNode);
  }
}


/********************* BST 类 *********************/

/**
 * 创建 BST 类 基本结构
 */
function BST() {
  // 根
  this.root = null;
}


/**
 * insert(data)：向树插入一个新键
 * 情况1-空树：将根节点指向新节点
 * 情况2-非空树：找到插入新节点的位置
 */
BST.prototype.insert = function (data) {
  var newNode = new Node(data);

  if (!this.root)
    this.root = newNode;
  else
    insertNode(this.root, newNode);
}


/**
 * 遍历 BST
 * 方法1：先序遍历
 */
BST.prototype.preOrder = function (node) {
  if (node) {
    console.log(node.show() + ' ');
    this.inOrder(node.left);
    this.inOrder(node.right);
  }
}


/**
 * 遍历 BST
 * 方法2：中序遍历
 */
BST.prototype.inOrder = function (node) {
  if (node) {
    this.inOrder(node.left);
    console.log(node.show() + ' ');
    this.inOrder(node.right);
  }
}


/**
 * 遍历 BST
 * 方法3：后序遍历
 */
BST.prototype.postOrder = function (node) {
  if (node) {
    this.inOrder(node.left);
    this.inOrder(node.right);
    console.log(node.show() + ' ');
  }
}


/**
 * 查找最小值
 * 思路：BST 的最小值总是在左子节点上，只需遍历左子树找到最后一个节点即可
 */
BST.prototype.getMin = function () {
  let current = this.root;

  while (current.left) {
    current = current.left;
  }

  return current.data;
}


/**
 * 查找最大值
 * 思路：BST 的最大值总是在右子节点上，只需遍历右子树找到最后一个节点即可
 */
BST.prototype.getMax = function () {
  let current = this.root;

  while (current.right) {
    current = current.right;
  }

  return current.data;
}


/**
 * 查找给定值 - 如果有该值则返回保存该值的节点，否则返回null
 * 思路：比较该值和当前节点上值的大小，通过比较确定给定值如果不在当前节点时该向左还是右遍历
 */
BST.prototype.find = function (data) {
  let current = this.root;
  while (current) {
    if (current.data === data)
      return current;
    else if (data < current.data)
      current = current.left;
    else
      current = current.right;
  }
  return null;
}
```




