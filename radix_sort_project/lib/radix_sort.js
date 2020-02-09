// What digit is at the given place value in num?
const getDigitFrom = (num, place) => {
  for (let count = 0; count < place; count++) {
    num = Math.floor(num / 10);
  }
  return num % 10;
}

// How many digits are in num?
const getIntLength = num => {
  if (!num) return 0;
  return 1 + getIntLength(Math.floor(num / 10));
}

// How many digits does the integer with the most digits have?
const getMaxDigits = nums => {
  return Math.max(...nums.map(num => getIntLength(num)));
}

const radixSort = array => {
  if (!Array.isArray(array)) return null;
  let maxDigits = getMaxDigits(array);
  for (let count = 0; count < maxDigits; count++) {
    let buckets = new Array(10).fill(0).map(() => []);
    for (let idx = 0; idx < array.length; idx++) {
      let digit = getDigitFrom(array[idx], count);
      buckets[digit].push(array[idx]);
    }
    array = [].concat(...buckets);
  }
  return array;
}

module.exports = {
  radixSort
};