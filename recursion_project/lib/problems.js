// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
const lucasNumber = num => {
  if (num === 0) return 2;
  if (num === 1) return 1;
  return lucasNumber(num - 1) + lucasNumber(num - 2);
}

// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
const sumArray = arr => {
  if (!arr.length) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"
const reverseString = str => {
  if (!str.length) return "";
  return reverseString(str.slice(1)) + str[0];
}

// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
// pow(2, -5)   // => 0.03125
const pow = (base, exponent) => {
  if (exponent === 0) return 1;
  if (exponent > 0) {
    return base * pow(base, exponent - 1);
  } else {
    return 1 / pow(base, -exponent);
  }
}

// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
const flatten = data => {
  if (!Array.isArray(data)) return [data];
  let flattened = [];
  for (let idx = 0; idx < data.length; idx++) {
    const currEle = data[idx];
    flattened = flattened.concat(flatten(currEle));
  }
  return flattened;
}

// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
// let desktop = {
//     '/images': {
//         'app_academy_logo.svg': null,
//         '/parks': {
//             'yosemite.jpeg': null,
//             'acadia.jpeg': null,
//             'yellowstone.png': null
//         },
//         '/pets': {
//             'trixie_lou.jpeg': null,
//             'rolo.jpeg': null,
//             'opal.jpeg': null,
//             'diana.jpeg': null,
//         }
//     },
//     '/music': {
//         'hey_programmers.mp3': null,
//         '/genres': {
//             '/rock': {
//                 'everlong.flac': null,
//                 'livin_on_a_prayer.mp3': null
//             },
//             '/hip_hop': {
//                 'express_yourself.wav': null,
//                 'ny_state_of_mind.mp3': null
//             }
//         }
//     }
// };
//
// fileFinder(desktop, 'app_academy_logo.svg');     // => true
// fileFinder(desktop, 'everlong.flac');            // => true
// fileFinder(desktop, 'sequoia.jpeg');             // => false
const fileFinder = (directories, targetFile) => {
  if (Object.keys(directories).includes(targetFile)) return true;
  return (
    Object.keys(directories).map(directory => {
      if (directory.startsWith("/")) {
        return fileFinder(directories[directory], targetFile);
      } else {
        return directory === targetFile
      }
    }).some(bool => bool)
  );
}

// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null

// Customized myFind function that returns null instead of undefined if nothing is truthy
const myFind = pathArr => {
  const mapped = pathArr.map(path => path ? path : null);
  const foundPath = mapped.find(path => path);
  return foundPath ? foundPath : null;
}

const pathFinder = (directories, targetFile) => {

  // File has been found, so we can return the file name to be appended
  if (Object.keys(directories).includes(targetFile)) return `/${targetFile}`;

  // Recursively construct paths until file is found, otherwise all elements are null
  const mapped = (
    Object.keys(directories).map(directory => {
      if (directory.startsWith("/")) {
        const result = pathFinder(directories[directory], targetFile);
        return result ? directory + result : null;
      }
    })
  )

  // Return the only path to that file, or null if there is no such path
  return myFind(mapped);
}

module.exports = {
  lucasNumber,
  sumArray,
  reverseString,
  pow,
  flatten,
  fileFinder,
  pathFinder
};