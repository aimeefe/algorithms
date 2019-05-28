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
    return this.items.shift();
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

/******************** demo01 ********************/
/**
 * 击鼓传花
 * 规则：孩子们围成一个圈，把花尽快传递给旁边的人，某一时候传花停止，这个时候花在谁手里，谁就退出圆圈结束游戏，一直重复这个过程，直到只剩一个孩子（胜者）
 * 思路：
 * 1. 把这些孩子依次加入队列
 * 2. 给定一个数字，迭代队列，这个数字之前的孩子依次被移除队列并重新添加到队列末尾
 * 3. 传递次数达到给定的数字时，对应的孩子从队列中移除
 * 4. 重复2和3，直到队列中只剩下一个孩子位置
 */
const games = (members, num) => {

  //声明一个队列，将成员依次添加到队列中
  const queue = new Queue();
  members.forEach(member => queue.enqueue(member));

  let eliminated;
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      //将 num 前的孩子依次从队首删除，添加到队尾
      queue.enqueue(queue.dequeue());
    }
    // 从队首删除被淘汰的孩子
    eliminated = queue.dequeue();
    console.log(`${eliminated}在游戏中被淘汰`);
  }
  //返回最后的胜利者
  return queue.front();
}


games(['stu_1', 'stu_2', 'stu_3', 'stu_4', 'stu_5', 'stu_6'], 3); //stu_1