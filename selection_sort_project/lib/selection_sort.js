const swap = (array, idx1, idx2) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  return array;
}

const selectionSort = array => {
  let startIdx = 0;
  while (startIdx < array.length) {
    let smallestIdx = startIdx;
    for (let idx = startIdx; idx < array.length; idx++) {
      if (array[idx] < array[smallestIdx]) {
        smallestIdx = idx;
      }
    }
    swap(array, startIdx, smallestIdx);
    startIdx += 1;
  }
  return array;
}

module.exports = {
  selectionSort,
  swap
};