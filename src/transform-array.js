const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


function transform(arr) {
  if (arr instanceof Array === false) {
    throw Error('\'arr\' parameter must be an instance of the Array!')
  }
  const newarr = arr.reduce((acc, val, index, arr) => {

    if (arr[index] === '--discard-prev' && index == 0) {
      return acc
    }
    else if (arr[index] === '--discard-prev' && index != 0) {
      acc.pop(index - 1)
    }
    else if (arr[index] === '--double-prev' && index == 0) {
      return acc
    }
    else if (arr[index] === '--double-prev' && arr[index - 2] == '--discard-next') {
      acc.pop(index)
    }
    else if (arr[index] === '--double-prev' && index != 0) {
      acc.push(arr[index - 1])
    }
    else if (arr[index] === '--discard-next' && arr[index + 2] == '--discard-prev') {
      index = index + 2
    }
    else if (arr[index] === '--discard-next' && arr[index + 2] == '--double-prev') {
      index = index + 2
    }
    else if (arr[index] === '--double-next' && index != arr.length - 1) {
      acc.push(arr[index + 1])
    }
    else if (arr[index] === '--double-next' && index == arr.length - 1) {
      return acc
    }
    else if (arr[index] === '--discard-next' && index != arr.length - 1) {
      index = index + 1
    }
    else if (arr[index] === '--discard-next' && index == arr.length - 1) {
      return acc
    }

    else acc.push(val);

    return acc

  }, [])
  return newarr
}


module.exports = {
  transform
};
