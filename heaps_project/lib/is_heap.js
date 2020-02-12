// you may assume that the array will always have a null element at the 0-th index
const isMaxHeap = (array) => {
  if (array.length === 1) return true;

  for (let idx = 1; idx < array.length / 2; idx++) {
    let currVal = array[idx];
    let leftChildIdx = idx * 2;
    let rightChildIdx = idx * 2 + 1;
    let leftChildVal = array[leftChildIdx] || -Infinity;
    let rightChildVal = array[rightChildIdx] || -Infinity;
    if (currVal < leftChildVal || currVal < rightChildVal) return false;
  }
  return true;
}

module.exports = {
  isMaxHeap
};