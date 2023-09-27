/**
 * Name: Doubly Linked List
 * Time Complexity:
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add node to end of linked list
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  // remove node from end of linked list
  pop() {
    if (!this.head) {
      return undefined;
    }

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  // remove node from start of linked list
  shift() {
    if (!this.head) {
      return undefined;
    }

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;

    return oldHead;
  }

  // add node to start of linked list
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  // get node at given index
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      let count = this.length - 1;
      let current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
}

let list = new DoublyLinkedList();
list.push("Steph Curry");
list.push("Kevin Durant");
list.push("Klay Thompson");
