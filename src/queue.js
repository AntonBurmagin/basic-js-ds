const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class ListN {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor(data = null) {
    this.head = data;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(elem) {
    if(!this.head) {
      this.head = new ListN(elem);
    } else {
      let lastElem = this.head;
      if(lastElem) {
        while(lastElem.next) {
          lastElem = lastElem.next;
        }
      }
      lastElem.next = new ListN(elem);
    }
  }

  dequeue() {
    let result = this.head.value;
    this.head = this.head.next;
    return result;
  }
}

module.exports = {
  Queue
};
