const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newArr = Array.from(n.toString()).reduce((acc, _, index, arr) => {
    if (arr[index] < arr[index + 1]) {
      index = index + 1;
    }
    else acc.push(arr[index]);
    return acc
  }, []);

  if (newArr[newArr.length - 1] === '0') {
    newArr.pop();
  }
  return Number(newArr.join(''));

}


module.exports = {
  deleteDigit
};
