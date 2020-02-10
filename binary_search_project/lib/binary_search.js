const binarySearch = (array, target) => {
  if (!array.length) return false;
  let middleIdx = Math.floor(array.length / 2);
  if (target < array[middleIdx]) {
    return binarySearch(array.slice(0, middleIdx), target);
  } else if (target > array[middleIdx]) {
    return binarySearch(array.slice(middleIdx + 1), target);
  } else {
    return true;
  }
}

const binarySearchIndex = (array, target) => {
  if (!array.length) return -1;
  let middleIdx = Math.floor(array.length / 2);
  if (target < array[middleIdx]) {
    return binarySearchIndex(array.slice(0, middleIdx), target);
  } else if (target > array[middleIdx]) {
    let result = binarySearchIndex(array.slice(middleIdx + 1), target);
    return (result === -1) ? -1 : result + middleIdx + 1;
  } else {
    return middleIdx;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex
};