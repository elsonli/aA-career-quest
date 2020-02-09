const quickSort = array => {
  if (!array.length || array.length === 1) return array;
  let pivotEle = array[0];
  let lePivot = [];
  let geqPivot = [];
  for (let idx = 1; idx < array.length; idx++) {
    array[idx] < pivotEle ? lePivot.push(array[idx]) : geqPivot.push(array[idx]);
  }
  return quickSort(lePivot).concat([pivotEle], quickSort(geqPivot));
}

module.exports = {
  quickSort
};