const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let result = [];
  let count = 1;

  Array.from(str).forEach((val, i, arr) => {
    if (arr[i] === arr[i + 1]) { 
      count++;
    } else { 
      result.push(count + val);
      count = 1; 
    }
  })

  result = result.map(val => {
    return val[0] != '1' ? val : val.slice(1);
  });
  return result.join('');

}
module.exports = {
  encodeLine
};
