const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

module.exports = class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
    this.queue = [];
  }

  getUnderlyingList() {
    let str = {};
   
    for (var i = 0; i < this.queue.length + 1; i++) {
      let tmp = { "value": this.queue[i], "next": str }
      str = tmp;
    }
    return str;
  }

  enqueue(value) {
    this.queue.push(value);
    return this; 
  }

  dequeue() {
    const removedValue = this.queue.shift();
    return removedValue; 
  }

}
