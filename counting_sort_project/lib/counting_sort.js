const countingSort = (array, max) => {
  const countArray = new Array(max + 1).fill(0);
  array.forEach(int => countArray[int] += 1);
  let resultArray = [];
  for (let idx = 0; idx < countArray.length; idx++) {
    for (let count = 0; count < countArray[idx]; count++) {
      resultArray.push(idx);
    }
  }
  return resultArray;
}

module.exports = {
  countingSort
};