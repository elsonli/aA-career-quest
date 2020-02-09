const merge = (array1, array2) => {
  let mergedArray = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      mergedArray.push(array1.shift());
    } else {
      mergedArray.push(array2.shift());
    }
  }
  return mergedArray.concat(array1, array2);
}

const mergeSort = array => {
  if (!array.length || array.length == 1) return array;
  let middleIdx = Math.floor(array.length / 2);
  let mergedLeft = mergeSort(array.slice(0, middleIdx));
  let mergedRight = mergeSort(array.slice(middleIdx));
  return merge(mergedLeft, mergedRight);
}

module.exports = {
  merge,
  mergeSort
};