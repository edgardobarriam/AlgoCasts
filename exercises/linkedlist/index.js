// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.getFirst()) {
      this.head = this.getFirst().next;
    }
  }

  removeLast() {
    let node = this.head;
    if (node) {
      while (node && node.next && node.next.next) {
        node = node.next;
      }
      if (node.next) {
        node.next = null;
      } else {
        this.head = null;
      }
    }
  }

  insertLast(data) {
    if (this.getLast()) {
      this.getLast().next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let i = 0;
    while (node && i != index) {
      node = node.next;
      i++;
    }
    return node;
  }

  removeAt(index) {
    if (index < 0) {
      return;
    }

    if (this.head && index === 0) {
      this.head = this.head.next;
      return;
    }

    const node = this.getAt(index - 1);
    if (node) {
      node.next = this.getAt(index + 1);
    }
  }

  insertAt(data, index) {
    if (index < 0) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let node = this.getAt(index - 1);
    if (node) {
      node.next = new Node(data, this.getAt(index));
    } else {
      this.getLast().next = new Node(data);
    }
  }

  forEach(fun) {
    let node = this.head;
    let i = 0;
    while (node) {
      fun(node, i);
      node = node.next;
      i++;
    }
  }

  // i copied this one from completed_exercises, cuz idk wtf
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
