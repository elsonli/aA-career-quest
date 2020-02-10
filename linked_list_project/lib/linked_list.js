// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
      const newNode = new Node(val);
      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length += 1;
      return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
      if (!this.length) return undefined;
      let tailNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let currNode = this.head;
        while (currNode.next !== this.tail) { currNode = currNode.next }
        this.tail = currNode;
        this.tail.next = null;
      }
      this.length -= 1;
      return tailNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      const newNode = new Node(val);
      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length += 1;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
      if (!this.length) return undefined;
      let headNode = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = headNode.next;
      }
      this.length -= 1;
      return headNode;
    }

    // TODO: Implement the contains method here
    contains(target) {
      let currNode = this.head;
      while (currNode) {
        if (currNode.value === target) return true;
        currNode = currNode.next;
      }
      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (index >= this.length) return null;
      let currNode = this.head;
      while (index > 0) {
        currNode = currNode.next;
        index -= 1;
      }
      return currNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
      let fetchedNode = this.get(index);
      if (!fetchedNode) return false;
      fetchedNode.value = val;
      return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (index >= this.length) return false;
      let currNode = this.head;
      while (index > 1) {
        currNode = currNode.next;
        index -= 1;
      }
      let newNode = new Node(val);
      newNode.next = currNode.next;
      currNode.next = newNode;
      this.length += 1;
      return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
      if (index >= this.length) return undefined;
      let currNode = this.head;
      while (index > 1) {
        currNode = currNode.next;
        index -= 1;
      }
      let removedNode = currNode.next;
      currNode.next = removedNode.next;
      this.length -= 1;
      return removedNode;
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
