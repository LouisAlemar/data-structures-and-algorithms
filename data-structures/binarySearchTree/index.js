/**
 * Name: Binary Search Tree
 * Time Complexity:
 *      Insertion: O(log(n))
 *      Searching: O(log(n))
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // add node to correct spot on tree based on value
  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) {
        return undefined;
      }

      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // find and return node
  find(val) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return false;
    }

    return current;
  }

  // check if tree contains node
  contains(val) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // breadth first search
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  // depth first search - pre order
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.val);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }

  // depth first search - post order
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      data.push(node.val);
    }

    traverse(this.root);

    return data;
  }

  // depth first search - in order
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      data.push(node.val);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
