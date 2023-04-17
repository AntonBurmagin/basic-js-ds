const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.r = null;
  }
  root() {
    return this.r;
  }

  add(x) {
    if (this.r) {
      let it = this.r;
      for ( ; x !== it.data; ) {
        if (x > it.data) {
          if (it.right) {
            it = it.right;
          } else {
            it.right = new Node(x);
            break;
          }
        } else if (x < it.data) {
          if (it.left) {
            it = it.left;
          } else {
            it.left = new Node(x);
            break;
          }
        }
      }
    } else {
      this.r = new Node(x);
    }
  }

  has(x) {
    let it = this.r;
    for ( ; it; ) {
      if(it.data === x) {
        return true;
      } else if(it.data > x) {
        it = it.left;
      } else {
        it = it.right;
      }
    }
    return false;
  }

  find(x) {
    let it = this.r;
    for ( ; it; ) {
      if(it.data === x) {
        break;
      } else if(it.data > x) {
        it = it.left;
      } else {
        it = it.right;
      }
    }
    return it;
  }

  remove(x) {
    let it = this.r;
    let prev = null;
    if (x === it.data) {
      if (it.left) {
        let branch = it.right;
        this.r = it.left;
        it = it.left;
        while(it.right) { it = it.right; }
        it = branch;
      } else {
        this.r = it.right;
      }
    } else {
      for ( ; it; ) {
        if(it.data === x) {
          break;
        } else if(it.data > x) {
          prev = it;
          it = it.left;
        } else {
          prev = it;
          it = it.right;
        }
      }
      if (it) {
        if (prev.left === it) {
          if (it.left) {
            let branch = it.right;
            prev.left = it.left;
            it = it.left;
            while (it.right) { it = it.right; }
            it = branch;
          } else {
            prev.left = it.right;
          }
        } else {
          if (it.left) {
            let branch = it.right;
            prev.right = it.left;
            it = it.left;
            while (it.right) { it = it.right; }
            it = branch;
          } else {
            prev.right = it.right;
          }
        }
  
      }
    }

  }

  min() {
    if (this.r) {
      let it = this.r;
      while(it.left) { it = it.left; }
      return it.data;
    }
    return null;
  }

  max() {
    if (this.r) {
      let it = this.r;
      while(it.right) { it = it.right; }
      return it.data;
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree
};