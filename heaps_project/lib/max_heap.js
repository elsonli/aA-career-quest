class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    let parentIdx = this.getParent(idx);
    if (idx === 1 || this.array[idx] <= this.array[parentIdx]) return;
    [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
    this.siftUp(parentIdx);
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    if (idx === this.array.length - 1) return;
    let leftChildIdx = this.getLeftChild(idx);
    let rightChildIdx = this.getRightChild(idx);
    let leftChildVal = this.array[leftChildIdx] || -Infinity;
    let rightChildVal = this.array[rightChildIdx] || -Infinity;
    let greaterChildIdx = (leftChildVal > rightChildVal) ? leftChildIdx : rightChildIdx;
    if (this.array[idx] <= this.array[greaterChildIdx]) {
      [this.array[idx], this.array[greaterChildIdx]] = [this.array[greaterChildIdx], this.array[idx]];
      this.siftDown(greaterChildIdx);
    }
  }

  deleteMax() {
    if (this.array.length === 1) return null;
    [this.array[1], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[1]];
    let returnVal = this.array.pop();
    this.siftDown(1);
    return returnVal;
  }
}

module.exports = {
  MaxHeap
};