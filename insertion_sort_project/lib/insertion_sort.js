const insertionSort = array => {
  for (let idx = 1; idx < array.length; idx++) {
    const currEle = array[idx];
    for (var jdx = idx - 1; jdx >= 0 && currEle < array[jdx]; jdx--) {
      array[jdx + 1] = array[jdx];
    }
    array[jdx + 1] = currEle;
  }
  return array;
}

module.exports = {
  insertionSort
};