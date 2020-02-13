// View the full problem and run the test cases at:
//  https://leetcode.com/problems/implement-trie-prefix-tree/

const { Node } = require("../lib/trie");

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currNode = this.root;
    for (let idx = 0; idx < word.length; idx++) {
      let currLetter = word[idx];
      if (!Object.keys(currNode.children).includes(currLetter)) {
        currNode.children[currLetter] = new Node();
      }
      currNode = currNode.children[currLetter];
    }
    currNode.isTerminal = true;
  }

  search(word) {
    let currNode = this.root;
    for (let idx = 0; idx < word.length; idx++) {
      let currLetter = word[idx];
      if (!Object.keys(currNode.children).includes(currLetter)) {
        return false;
      }
      currNode = currNode.children[currLetter];
    }
    return currNode.isTerminal;
  }

  startsWith(prefix) {
    let currNode = this.root;
    for (let idx = 0; idx < prefix.length; idx++) {
      let currLetter = prefix[idx];
      if (!Object.keys(currNode.children).includes(currLetter)) {
        return false;
      }
      currNode = currNode.children[currLetter];
    }
    return this.checkTerminals(currNode);
  }

  checkTerminals(root) {
    if (root.isTerminal) return true;
    return Object.keys(root.children).some(letter => {
      let traverseTo = root.children[letter];
      return this.checkTerminals(traverseTo);
    });
  }
}