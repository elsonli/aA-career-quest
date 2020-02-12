class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insertRecur(word, root=this.root) {
    let firstLetter = word[0];
    if (word.length === 1) {
      if (!Object.keys(root.children).includes(firstLetter)) {
        root.children[firstLetter] = new Node();
      }
      root.children[firstLetter].isTerminal = true;
      return;
    } else if (Object.keys(root.children).includes(firstLetter)) {
      return this.insertRecur(word.slice(1), root.children[firstLetter]);
    } else {
      let newNode = new Node();
      root.children[firstLetter] = newNode;
      return this.insertRecur(word.slice(1), newNode);
    }
  }

  insertIter(word) {
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

  searchRecur(word, root=this.root) {
    let firstLetter = word[0];
    if (!word.length && root.isTerminal) return true;
    if (!Object.keys(root.children).includes(firstLetter)) return false;
    return this.searchRecur(word.slice(1), root.children[firstLetter]);
  }

  searchIter(word) {
    let currNode = this.root;
    for (let idx = 0; idx < word.length; idx++) {
      let currLetter = word[idx];
      if (!Object.keys(currNode.children).includes(currLetter)) return false;
      currNode = currNode.children[currLetter];
    }
    return currNode.isTerminal ? true : false;
  }

  allWordsFromRoot(prefix="", root=this.root) {
    if (!root) return [];
    let terminalWords = [];
    for (let letter in root.children) {
      let currNode = root.children[letter];
      if (currNode.isTerminal) {
        terminalWords.push(prefix + letter);
      }
      let result = this.allWordsFromRoot(prefix + letter, root.children[letter]);
      terminalWords = terminalWords.concat(result);
    }
    return terminalWords;
  }

  wordsWithPrefix(prefix, root=this.root) {
    let currNode = root;
    let prefixCopy = prefix.slice();
    while (prefixCopy.length) {
      let firstLetter = prefixCopy[0];
      prefixCopy = prefixCopy.slice(1);
      if (!currNode.children[firstLetter]) return [];
      currNode = currNode.children[firstLetter];
    }
    let result = this.allWordsFromRoot(prefix, currNode);
    if (currNode.isTerminal) result.push(prefix);
    return result;
  }
}

module.exports = {
  Node,
  Trie
};